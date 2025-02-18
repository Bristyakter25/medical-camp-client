import React, { useContext, useEffect, useState } from 'react';
import AdminProfile from './AdminProfile';
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';

const AdminList = () => {
  const [admin, setAdmin] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedAdmin, setUpdatedAdmin] = useState({});
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosSecure.get(`/users`, { params: { email: user.email } });
        const userData = response.data;

        if (userData && userData.role === 'admin') {
          setAdmin(userData);
          setUpdatedAdmin(userData);
        } else {
          Swal.fire({
            title: 'Access Denied!',
            text: 'You do not have admin privileges.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error fetching user data.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    };

    if (user?.email) {
      fetchUser();
    }
  }, [user?.email, axiosSecure]);

  const handleUpdate = (adminData) => {
    setUpdatedAdmin(adminData);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAdmin(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosSecure.put(`/users/${updatedAdmin._id}`, updatedAdmin);
      setAdmin(updatedAdmin);
      setIsEditing(false);
      Swal.fire({
        title: 'Success!',
        text: 'Your profile has been updated.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error updating your profile.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center w-full my-5 text-3xl text-[#A294F9] font-bold">Admin Profile</h2>
      <div className="flex flex-wrap justify-center">
        {admin && !isEditing && <AdminProfile admin={admin} onUpdate={handleUpdate} />}
        {isEditing && (
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input 
                type="text" 
                name="name" 
                value={updatedAdmin.name} 
                onChange={handleChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                value={updatedAdmin.email} 
                onChange={handleChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">Photo URL</label>
              <input 
                type="text" 
                name="photoURL" 
                value={updatedAdmin.photoURL} 
                onChange={handleChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button 
              type="submit" 
              className="bg-[#A594F9] glass hover:bg-[#C4D9FF] text-violet-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
            <button 
              type="button" 
              className="ml-4 bg-red-500 hover:bg-red-700 glass text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminList;
