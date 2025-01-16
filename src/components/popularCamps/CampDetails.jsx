import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CampDetailsCard from "./CampDetailsCard";


const CampDetails = () => {
    const {id} = useParams();
    const [details,setDetails] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(`http://localhost:5000/popularCamps/${id}`)
        .then((res)=> res.json())
        .then((data)=>{
            setDetails(data);
            setLoading(false);
        })

    },[id])
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <h2 className='text-center text-2xl font-bold my-5'>This is Details Page</h2>

            <div className="lg:w-[1024px] mx-auto w-[400px]">
        <CampDetailsCard detail={details}></CampDetailsCard>
        </div>
            
        </div>
    );
};

export default CampDetails;