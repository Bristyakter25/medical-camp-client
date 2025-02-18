import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CampDetailsCard from "./CampDetailsCard";
import { InfinitySpin } from "react-loader-spinner";


const CampDetails = () => {
    const {id} = useParams();
    const [details,setDetails] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://medical-camp-server-five.vercel.app/popularCamps/${id}`)
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
      </div>
    }
    return (
        <div>
            <h2 className="text-center w-full my-5 text-3xl text-[#A294F9] font-bold ">Camp Details </h2>

            <div className="lg:w-[900px] mx-auto w-[330px]">
        <CampDetailsCard detail={details}></CampDetailsCard>
        </div>
            
        </div>
    );
};

export default CampDetails;