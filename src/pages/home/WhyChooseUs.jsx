import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us mt-28 mb-32 px-4 max-w-6xl mx-auto">
      <h2 className="text-center w-full text-3xl text-[#A294F9] font-bold mb-10">Why Choose Us?</h2>
      <div >
        {[
          {
            title: "Expert Healthcare Professionals",
            description: "Our team of experienced doctors, nurses, and medical specialists are committed to providing the highest level of care. We ensure that each patient receives personalized treatment based on their needs."
          },
          {
            title: "Affordable and Accessible Care",
            description: "We strive to make healthcare accessible to everyone. Our medical camp offers free and affordable treatments, ensuring that cost is not a barrier to health."
          },
          {
            title: "Comprehensive Medical Services",
            description: "From routine check-ups to specialized treatments, our medical camp provides a wide range of healthcare services to meet various needs. We also offer health education to empower individuals to take charge of their health."
          },
          {
            title: "Compassionate Care in a Friendly Environment",
            description: "We believe in providing care with empathy. Our volunteers and medical professionals work together to create a welcoming environment where patients feel comfortable and cared for."
          },
          {
            title: "Community-Focused Approach",
            description: "We are dedicated to improving the health of the community. Through our medical camps, we aim to reach out to underserved populations and ensure they receive the healthcare they deserve."
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 mb-6 bg-white dark:bg-[#00072D] rounded-xl shadow-md border border-transparent hover:border-[#A294F9] hover:shadow-2xl transform hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold dark:text-white text-gray-800">{item.title}</h3>
            <p className="text-gray-600 dark:text-[#FDF4F5] mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
