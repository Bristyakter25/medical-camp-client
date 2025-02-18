import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartForShow = () => {
  const data = [
    {
      name: "Diabetes Awareness and Screening Camp",
      participantCount: 10
    },
    {
      name: "Child Vaccination Camp",
      participantCount: 4
    },
    {
      name: "Cardiac Health Screening Camp",
      participantCount: 3
    },
    {
      name: "Women's Health Awareness Camp",
      participantCount: 5
    },
    {
      name: "Skin Care and Dermatology Camp",
      participantCount: 7
    },
    {
      name: "Orthopedic Checkup Camp",
      participantCount: 3
    },
    {
      name: "Free Health Checkup Camp",
      participantCount: 1
    },
    {
      name: "Eye Care and Vision Camp",
      participantCount: 1
    }
  ];

  return (
    <div>
      <h2 className="text-center w-full mt-10 mb-16 text-3xl text-[#A294F9] font-bold ">Camp Participation Stats</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="participantCount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartForShow;
