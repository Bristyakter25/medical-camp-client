import React, { useState } from "react";
import pic1 from "../../assets/icons/eye (1).png";
import pic2 from "../../assets/icons/lung (1).png";
import pic3 from "../../assets/icons/heart (1).png";
import pic4 from "../../assets/icons/nasal (1).png";

const Methods = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const methods = [
    { id: 1, icon: pic1, title: "Sight Therapy", description: "Therapy for vision improvement." },
    { id: 2, icon: pic2, title: "Lung Therapy", description: "Effective lung treatments and care." },
    { id: 3, icon: pic3, title: "Heart Checkup", description: "Regular heart health monitoring." },
    { id: 4, icon: pic4, title: "Nasal Health", description: "Care for nasal health and allergies." },
  ];

  return (
    <div className="lg:w-full mt-20 w-[320px] mx-auto my-16">
      <h2 className="text-center w-full mt-16 text-3xl text-[#A294F9] font-bold mb-10">
        Our Methods In Healing
      </h2>
      <p className="text-black dark:text-white font-semibold text-center text-xl mb-10">
        Empowering lives with innovative healing techniques, where care meets precision and results
        speak for themselves.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {methods.map((method, index) => (
          <div
            key={method.id}
            className="flex flex-col items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full border-2 border-blue-300 hover:bg-blue-500 transition duration-300 relative overflow-hidden">
              {hoveredIndex === index ? (
                <span className="text-3xl text-white">{method.id}</span>
              ) : (
                <img src={method.icon} alt={method.title} className="w-16 h-16" />
              )}
            </div>
            <h3 className="mt-4 text-lg  font-semibold">{method.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-200 mt-2">{method.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methods;
