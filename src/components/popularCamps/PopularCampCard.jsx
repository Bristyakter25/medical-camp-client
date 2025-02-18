import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularCampCard = ({ popularCamp }) => {
    const { _id, name, image, fees, date, location, healthcareName } = popularCamp;
    const [participantCount, setParticipantCount] = useState(0);

   
    useEffect(() => {
        const fetchCampDetails = async () => {
            try {
                const response = await fetch(`https://medical-camp-server-five.vercel.app/addCamp/${_id}`);
                const data = await response.json();
                setParticipantCount(data.participantCount);
            } catch (error) {
                console.error("Error fetching camp details:", error);
            }
        };

        fetchCampDetails();
    }, [_id]);

    return (
        <div >
            <img className="w-[370px] h-[230px] rounded-2xl mb-5" src={image} alt="" />
            <h2 className="text-black dark:text-white  font-semibold h-[50px] text-center mb-3">{name}</h2>
            <p className="mb-2"><span className="text-black dark:text-white font-semibold "> Fees:</span> {fees}</p>
            <p className="mb-2"><span className="text-black dark:text-white font-semibold "> Date:</span>{date}</p>
            <p className="mb-2"><span className="text-black dark:text-white font-semibold ">Location:</span> {location}</p>
            <p className="mb-2"><span className="text-black dark:text-white font-semibold "> Healthcare Professional:</span> {healthcareName}</p>
            <p className="mb-2"><span className="text-black dark:text-white font-semibold "> Participants:</span> {participantCount? <>{participantCount}</>: 0 }</p>
            <div className="flex space-x-2 my-3">
                <Link to="/availableCamps">
                    <button className="btn bg-[#C4D9FF] glass text-violet-500">See All Camps</button>
                </Link>
                <Link to={`/popularCamps/${_id}`}>
                    <button className="btn bg-[#C5BAFF] glass text-violet-500">Camp Details</button>
                </Link>
            </div>
        </div>
    );
};

export default PopularCampCard;
