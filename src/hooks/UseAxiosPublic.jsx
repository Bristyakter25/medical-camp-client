import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://medical-camp-server-five.vercel.app",
});


const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
