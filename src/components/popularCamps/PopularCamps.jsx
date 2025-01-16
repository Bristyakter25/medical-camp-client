import { useEffect, useState } from "react";
import PopularCampCard from "./PopularCampCard";


const PopularCamps = () => {
    const [popularCamps, setPopularCamps] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/popularCamps')
        .then((res) => res.json())
        .then((data) =>{
            setPopularCamps(data);
        })

    },[])
    return (
        <div>
            <h2 className="text-center w-full mt-16 text-3xl text-[#A294F9] font-bold mb-10">Popular Medical Camps</h2>
            <div className="my-5 ml-12 lg:ml-0 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    popularCamps.map(popularCamp => <PopularCampCard key={popularCamp._id} popularCamp={popularCamp}></PopularCampCard>)
                }

            </div>
        </div>
    );
};

export default PopularCamps;