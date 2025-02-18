import React from 'react';

const UpcomingEvents = () => {
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
    <div className="upcoming-events  rounded-lg shadow-xl">
      <h2 className="text-center w-full mt-5 text-3xl text-[#A294F9] font-bold mb-10">Upcoming Events</h2>
      <div className="event-list space-y-6">
        {events.map((event, index) => (
          <div key={index} className="event p-6 bg-white dark:bg-[#000957] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="event-header flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold dark:text-white text-gray-800">{event.title}</h3>
              <span className="text-sm text-[#AA60C8]">{event.date}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
            <div className="event-details mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">{event.time}</span>
              <span className="text-sm text-gray-500">{event.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
