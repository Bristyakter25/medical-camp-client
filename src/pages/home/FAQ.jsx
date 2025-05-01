import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is the purpose of the medical camp?",
      answer:
        "Our medical camp aims to provide free or affordable healthcare services to underserved communities. We offer various medical treatments, consultations, and health education to ensure better health for all participants.",
    },
    {
      question: "Who can participate in the medical camp?",
      answer:
        "Anyone in need of healthcare services can participate in the medical camp. We prioritize individuals from low-income backgrounds, but everyone is welcome to join.",
    },
    {
      question: "Are the services provided free?",
      answer:
        "Most of our services are free, while some specialized treatments may have a minimal cost. We aim to ensure that healthcare is accessible to all.",
    },
    {
      question: "How do I register for the medical camp?",
      answer:
        "You can register by clicking the 'Join Camp' button on our website. After registration, you'll receive a confirmation along with further details about the event.",
    },
    {
      question: "Do I need to bring any documents or identification?",
      answer:
        "For registration, it's helpful to bring a valid ID and any previous medical records or prescriptions you may have.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-28 mb-10 px-4">
      <h2 className="text-center text-3xl font-bold text-[#A294F9] mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 dark:border-[#2D2D3A] bg-white dark:bg-[#00072D] shadow-sm transition-all"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {faq.question}
              {activeIndex === index ? (
                <FaChevronUp className="text-blue-600 dark:text-blue-400" />
              ) : (
                <FaChevronDown className="text-gray-500 dark:text-gray-300" />
              )}
            </button>
            <div
              className={`px-5 pb-4 text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'block' : 'hidden'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
