import React, { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const CampChart = () => {
  const [campData, setCampData] = useState([]);
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCampData = async () => {
      try {
        const response = await axiosSecure.get('/participants', { params: { email: user.email } });
        setCampData(response.data);
      } catch (error) {
        console.error('Error fetching camp data:', error);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error fetching camp data.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    };

    if (user?.email) {
      fetchCampData();
    }
  }, [user?.email, axiosSecure]);

  return (
    <div>
      <h2 className="text-center w-full mt-5 mb-10 text-3xl text-[#A294F9] font-bold">Analysis of Your Registered Camps</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={campData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="campName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="campFees" fill="url(#colorFees)" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CampChart;
