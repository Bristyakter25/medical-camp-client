import React, { useContext, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
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
      <h2 className="text-xl font-semibold">Registered Camps</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={campData}>
          <XAxis dataKey="campName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="campFees" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CampChart;
