import { Link } from "react-router-dom";


const PopularCampCard = ({popularCamp}) => {
    const {name,image,fees,date,location,healthcareName} = popularCamp;
    return (
        <div>
            
            <img className="w-[300px] h-[230px] rounded-2xl" src={image} alt="" />
            <h2>{name}</h2>
            <p>{fees}</p>
            <p>{date}</p>
            <p>{location}</p>
            <p>{healthcareName}</p>
           <div className="flex space-x-5">
           <Link to='/availableCamps'> <button className="btn">See All Camp</button></Link>
           <Link to={`/popularCamps/${popularCamp._id}`}><button className="btn">Camp Details</button></Link>
           
           </div>
            
        </div>
    );
};

export default PopularCampCard;

// Camp Name, Image, Camp Fees, Date and Time, Location, Healthcare Professional, and participant count.
