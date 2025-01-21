import { useParams } from "react-router-dom";
import AvailableCampDCard from "./AvailableCampDCard";
import { useEffect, useState } from "react";


const AvailableCampDetails = () => {
    const {id} = useParams();
    const [details,setDetails] = useState([]);
    const [loading,setLoading] = useState(true);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/addCamp/${id}`)
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
            <h2>Available camp details</h2>
            <div>
               <AvailableCampDCard detail={details}></AvailableCampDCard>
            </div>
        </div>
    );
};

export default AvailableCampDetails;