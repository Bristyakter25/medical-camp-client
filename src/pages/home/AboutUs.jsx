import React from 'react';
import campImage from "../../assets/camp images/senior-woman-with-walking-frame-hospital-waiting-room-rehabilitation-treatment.jpg";

const AboutUs = ({ isFullPage = false }) => {
    return (
        <div className={`w-full max-w-7xl mx-auto px-4 mt-28 ${isFullPage ? "min-h-screen  items-center" : ""}`}>
            <h2 className="text-center mb-4 text-4xl font-bold text-[#A294F9]">About Us</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-10">
                Empowering Communities with Accessible Healthcare
            </p>

            <div className="lg:flex items-center gap-10">
                <img
                    className="lg:w-[500px] w-full rounded-lg shadow-md"
                    src={campImage}
                    alt="Healthcare mission"
                />
                <div className="text-gray-700 dark:text-gray-200 mt-8 lg:mt-0 space-y-5">
                    <p>
                        At <span className="font-semibold text-[#A294F9]">CareSphere</span>, we believe everyone deserves access to essential medical services.
                    </p>
                    <p>
                        We provide a range of services including free and low-cost treatments, health screenings, and education.
                    </p>
                    <p>
                        From check-ups to emergency care, we support underserved communities and promote healthier lives.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};


export default AboutUs;
