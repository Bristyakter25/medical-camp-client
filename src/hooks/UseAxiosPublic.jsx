import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "http://localhost:5000",
})
const UseAxiosPublic = ()=>{
  return axiosPublic;
//   headers: {
//     "Content-Type": "application/json"
//   };
};

export default UseAxiosPublic;


