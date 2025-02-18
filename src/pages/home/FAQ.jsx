import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is the purpose of the medical camp?",
      answer: "Our medical camp aims to provide free or affordable healthcare services to underserved communities. We offer various medical treatments, consultations, and health education to ensure better health for all participants."
    },
    {
      question: "Who can participate in the medical camp?",
      answer: "Anyone in need of healthcare services can participate in the medical camp. We prioritize individuals from low-income backgrounds, but everyone is welcome to join."
    },
    {
      question: "Are the services provided free?",
      answer: "Most of our services are free, while some specialized treatments may have a minimal cost. We aim to ensure that healthcare is accessible to all."
    },
    {
      question: "How do I register for the medical camp?",
      answer: "You can register by clicking the 'Join Camp' button on our website. After registration, you'll receive a confirmation along with further details about the event."
    },
    {
      question: "Do I need to bring any documents or identification?",
      answer: "For registration, it's helpful to bring a valid ID and any previous medical records or prescriptions you may have."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" mt-28   rounded-lg shadow-md">
      <h2 className="text-center  text-3xl text-[#A294F9] font-bold mb-5">Frequently Asked Questions</h2>
      <div className="faq-list p-5 space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => toggleAnswer(index)}
              className="faq-question w-full text-center text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="faq-answer mt-2 text-gray-700 dark:text-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
