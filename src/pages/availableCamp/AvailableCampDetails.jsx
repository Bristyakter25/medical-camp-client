import { useParams } from "react-router-dom";
import AvailableCampDCard from "./AvailableCampDCard";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";


const AvailableCampDetails = () => {
    const {id} = useParams();
    const [details,setDetails] = useState([]);
    const [loading,setLoading] = useState(true);
    

    useEffect(()=>{
        fetch(`https://medical-camp-server-five.vercel.app/addCamp/${id}`)
        .then((res)=> res.json())
        .then((data)=>{
            setDetails(data);
            setLoading(false);
        })

    },[id])
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">
                    <InfinitySpin
                      visible={true}
                      width="200"
                      color="#4fa94d"
                      ariaLabel="infinity-spin-loading"
                    />
                  </div>; ;
    }

    
    return (
        <div>
            <h2 className="text-[#A294F9] my-5 text-3xl font-bold text-center">Available camp details</h2>
            <div>
               <AvailableCampDCard detail={details}></AvailableCampDCard>
            </div>
        </div>
    );
};

export default AvailableCampDetails;