import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AvailableCampCard = ({availableCamp}) => {
    const {_id,name,image,date,location,healthcareName,description} = availableCamp;
    const [participantCount, setParticipantCount] = useState(0);

    useEffect(() => {
        const fetchCampDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/addCamp/${_id}`);
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
           <img className='w-full h-[500px]' src={image} alt="" /> 
           <h2>{name}</h2>
           <p>{date}</p>
           <p>{location}</p>
           <p>{healthcareName}</p>
           <p>{description}</p>
           <p>Participants: {participantCount? <>{participantCount}</>: 0 }</p>
           <Link to={`/addCamp/${_id}`}><button className='btn'>Details</button></Link>
        </div>
    );
};

export default AvailableCampCard;

// A. Camp Name, 
// B. Image, 
// C. Date & Time, 
// D. Location, 
// E. Healthcare Professional Name 
// F. Participant Count
// G.Description.
