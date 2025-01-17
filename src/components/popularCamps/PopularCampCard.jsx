import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularCampCard = ({ popularCamp }) => {
    const { _id, name, image, fees, date, location, healthcareName } = popularCamp;
    const [participantCount, setParticipantCount] = useState(0);

    // Fetch latest participant count
    useEffect(() => {
        const fetchCampDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/popularCamps/${_id}`);
                const data = await response.json();
                setParticipantCount(data.participantCount);
            } catch (error) {
                console.error("Error fetching camp details:", error);
            }
        };

        fetchCampDetails();
    }, [_id]);

    return (
        <div>
            <img className="w-[300px] h-[230px] rounded-2xl" src={image} alt="" />
            <h2>{name}</h2>
            <p>Fees: {fees}</p>
            <p>Date: {date}</p>
            <p>Location: {location}</p>
            <p>Healthcare Professional: {healthcareName}</p>
            <p>Participants: {participantCount? <>{participantCount}</>: 0 }</p>
            <div className="flex space-x-5">
                <Link to="/availableCamps">
                    <button className="btn">See All Camps</button>
                </Link>
                <Link to={`/popularCamps/${_id}`}>
                    <button className="btn">Camp Details</button>
                </Link>
            </div>
        </div>
    );
};

export default PopularCampCard;
