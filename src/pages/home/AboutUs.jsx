import React from 'react';
import campImage from "../../assets/camp images/senior-woman-with-walking-frame-hospital-waiting-room-rehabilitation-treatment.jpg"
const AboutUs = () => {
    return (
        <div>
            <h2 className="text-center w-full mt-16 text-3xl text-[#A294F9] font-bold mb-10">About Us</h2>
            <div className='flex gap-x-6 my-5'>
            <img className='w-[350px] rounded-lg h-[260px]' src={campImage} alt="" />
            <div className='text-gray-600 mb-5 dark:text-white'>
<p>At CareSphere, our mission is to provide accessible healthcare services to individuals in need. We offer a range of free and low-cost medical treatments, consultations, and preventive care. Our dedicated team of healthcare professionals and volunteers are committed to improving the health and well-being of the community by delivering quality care in a compassionate and welcoming environment. Whether it's routine check-ups, emergency care, or health education, we aim to make healthcare more inclusive for everyone.</p>
            </div>
            </div>
            
        </div>
    );
};

export default AboutUs;