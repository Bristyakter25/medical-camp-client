import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AvailableCampCard = ({availableCamp}) => {
    const {_id,name,image,date,location,healthcareName,description,fees} = availableCamp;
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
        <div className='lg:w-[330px] w-[170px]   mx-auto my-5'>
           <img className='lg:w-full w-[360px] h-[250px] mx-auto rounded-2xl' src={image} alt="" /> 
           <h2 className="text-black font-semibold lg:h-[60px]  lg:text-xl text-center mt-5">{name}</h2>
           <div className='lg:h-[300px] my-4 h-[400px]'>
           <p className="mb-2"><span className="text-black font-semibold "> Date:</span>{date}</p>
           <p className="mb-2"><span className="text-black font-semibold ">Location:</span>{location}</p>
           <p className="mb-2"><span className="text-black font-semibold "> Healthcare Professional:</span>{healthcareName}</p>
           <p className="mb-2"><span className="text-black font-semibold "> Description:</span>{description}</p>
           <p className="mb-2"><span className="text-black font-semibold "> Participants:</span> {participantCount? <>{participantCount}</>: 0 }</p>
           <p className="mb-2"><span className="text-black font-semibold "> Fees:</span> {fees}</p>
           </div>
           <Link to={`/addCamp/${_id}`}> <button className="btn w-full bg-[#C5BAFF] glass text-violet-500">Details</button></Link>
        </div>
    );
};

export default AvailableCampCard;


