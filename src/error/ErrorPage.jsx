import Lottie from 'lottie-react';
import errorAnimation from '../assets/error animation.json'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="lg:w-[850px] w-[300px] my-5 mx-auto">
        <Lottie animationData={errorAnimation}></Lottie>
        <NavLink to="/"><button className="btn bg-purple-300 dark:bg-purple-700 text-blue-700 dark:text-white w-full h-16 py-4 px-6 text-[20px] lg:text-2xl">
Back To The Homepage
</button></NavLink>

     </div>
    );
};

export default ErrorPage;