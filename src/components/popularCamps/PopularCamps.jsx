import { useEffect, useState } from "react";
import PopularCampCard from "./PopularCampCard";


const PopularCamps = () => {
    const [popularCamps, setPopularCamps] = useState([]);
    useEffect(()=>{
        fetch('https://medical-camp-server-five.vercel.app/popularCamps')
        .then((res) => res.json())
        .then((data) =>{
            setPopularCamps(data);
        })

    },[])
    return (
        <div className="w-[350px] lg:w-[1124px] mx-auto">
            <h2 className="text-center w-full mt-16 text-3xl text-[#A294F9] font-bold mb-10 ">Our Popular Medical Camps</h2>
            <div className="my-5   mr-3 lg:mr-0 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    popularCamps.map(popularCamp => <PopularCampCard key={popularCamp._id} popularCamp={popularCamp}></PopularCampCard>)
                }
           

            </div>
        </div>
    );
};

export default PopularCamps;