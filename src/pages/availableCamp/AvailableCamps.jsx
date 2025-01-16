import { useEffect, useState } from "react";
import AvailableCampCard from "./AvailableCampCard";


const AvailableCamps = () => {
    const [availableCamps, setAvailableCamps] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:5000/addCamp')
            .then((res) => res.json())
            .then((data) =>{
                setAvailableCamps(data);
            })
    
        },[])
    return (
        <div>
           <h2 className="text-center w-full mt-16 text-3xl text-[#A294F9] font-bold mb-10">Available Camps</h2>

           <div className="lg:w-[1024px] mx-auto w-[400px]">
           {
                    availableCamps.map(availableCamp => <AvailableCampCard key={availableCamp._id} availableCamp={availableCamp}></AvailableCampCard> )
                } 
           </div>
        </div>
    );
};

export default AvailableCamps;
