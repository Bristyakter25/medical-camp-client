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
        <div className='w-[330px]  mx-auto my-5'>
           <img className='w-full  h-[250px] mx-auto rounded-2xl' src={image} alt="" /> 
           <h2 className="text-black dark:text-white font-semibold lg:h-[60px]  lg:text-xl text-center mt-5">{name}</h2>
           <div className='h-[300px] my-4 '>
           <p className="mb-2"><span className="text-black dark:text-white font-semibold "> Date:</span>{date}</p>
           <p className="mb-2"><span className="text-black dark:text-white font-semibold ">Location:</span>{location}</p>
           <p className="mb-2"><span className="text-black dark:text-white font-semibold "> Healthcare Professional:</span>{healthcareName}</p>
           <p className="mb-2"><span className="text-black dark:text-white font-semibold "> Description:</span>{description}</p>
           <p className="mb-2"><span className="text-black dark:text-white font-semibold "> Participants:</span> {participantCount? <>{participantCount}</>: 0 }</p>
           <p className="mb-2"><span className="text-black dark:text-white font-semibold "> Fees:</span> {fees}</p>
           </div>
           <Link to={`/addCamp/${_id}`}> <button className="btn w-full bg-[#C5BAFF] glass hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white text-violet-500">Details</button></Link>
        </div>
    );
};

export default AvailableCampCard;


