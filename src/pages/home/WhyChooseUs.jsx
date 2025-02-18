import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us mt-14  rounded-lg shadow-lg">
      <h2 className="text-center w-full text-3xl text-[#A294F9] font-bold mb-10">Why Choose Us?</h2>
      <div className="reasons space-y-6">
        <div className="reason p-6 bg-white dark:bg-[#000957]  rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white text-gray-800">Expert Healthcare Professionals</h3>
          <p className="text-gray-600 dark:text-[#FDF4F5] mt-2">
            Our team of experienced doctors, nurses, and medical specialists are committed to providing the highest level of care. We ensure that each patient receives personalized treatment based on their needs.
          </p>
        </div>
        
        <div className="reason p-6 dark:bg-[#000957] bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white  text-gray-800">Affordable and Accessible Care</h3>
          <p className="text-gray-600 dark:text-[#FDF4F5] mt-2">
            We strive to make healthcare accessible to everyone. Our medical camp offers free and affordable treatments, ensuring that cost is not a barrier to health.
          </p>
        </div>
        
        <div className="reason p-6 dark:bg-[#000957] bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white text-gray-800">Comprehensive Medical Services</h3>
          <p className="text-gray-600 dark:text-[#FDF4F5] mt-2">
            From routine check-ups to specialized treatments, our medical camp provides a wide range of healthcare services to meet various needs. We also offer health education to empower individuals to take charge of their health.
          </p>
        </div>
        
        <div className="reason p-6 dark:bg-[#000957] bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white text-gray-800">Compassionate Care in a Friendly Environment</h3>
          <p className="text-gray-600 dark:text-[#FDF4F5] mt-2">
            We believe in providing care with empathy. Our volunteers and medical professionals work together to create a welcoming environment where patients feel comfortable and cared for.
          </p>
        </div>
        
        <div className="reason p-6 dark:bg-[#000957] bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white text-gray-800">Community-Focused Approach</h3>
          <p className="text-gray-600 dark:text-[#FDF4F5] mt-2">
            We are dedicated to improving the health of the community. Through our medical camps, we aim to reach out to underserved populations and ensure they receive the healthcare they deserve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
