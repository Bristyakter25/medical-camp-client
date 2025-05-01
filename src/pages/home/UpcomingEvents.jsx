import React from 'react';

const UpcomingEvents = ({ isFullPage = false }) => {
  const events = [
    {
      title: "Free Health Checkup Camp",
      date: "March 5, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Community Health Center, Downtown",
      description: "Join us for a free health checkup, including blood pressure, glucose, and general wellness screenings."
    },
    {
      title: "Mental Health Awareness Seminar",
      date: "March 12, 2025",
      time: "1:00 PM - 3:00 PM",
      location: "City Hall Auditorium",
      description: "A seminar to raise awareness about mental health and provide coping strategies for stress and anxiety."
    },
    {
      title: "Vaccination Drive",
      date: "March 19, 2025",
      time: "8:00 AM - 4:00 PM",
      location: "Local Park, North Side",
      description: "Get vaccinated against common diseases in our free vaccination drive. Bring your ID and medical records."
    },
    {
      title: "Nutrition & Wellness Workshop",
      date: "March 25, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Community Center, West Side",
      description: "Learn about healthy eating habits and nutrition tips from certified experts in this interactive workshop."
    }
  ];

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 mt-7 ${isFullPage ? "min-h-screen  items-center" : ""}`}>
      <h2 className="text-center pt-24 w-full mb-10 text-3xl text-[#A294F9] font-bold">Upcoming Events</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-[#00072D] rounded-xl border border-transparent hover:border-[#A294F9] shadow-md hover:shadow-2xl transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold dark:text-white text-gray-800">{event.title}</h3>
              <span className="text-sm text-[#AA60C8]">{event.date}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{event.time}</span>
              <span>{event.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
