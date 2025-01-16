import React from 'react';

const AvailableCampCard = ({availableCamp}) => {
    const {name,image,date,location,healthcareName,description} = availableCamp;

    return (
        <div>
           <img className='w-full h-[500px]' src={image} alt="" /> 
           <h2>{name}</h2>
           <p>{date}</p>
           <p>{location}</p>
           <p>{healthcareName}</p>
           <p>{description}</p>
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
