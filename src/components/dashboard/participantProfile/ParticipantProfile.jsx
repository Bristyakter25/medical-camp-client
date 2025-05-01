import React, { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import { InfinitySpin } from "react-loader-spinner";

const ParticipantProfile = () => {
  const [participant, setParticipant] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchParticipant = async () => {
      try {
        const response = await axiosSecure.get("/participants");
        const participants = response.data;

        const loggedInParticipant = participants.find(
          (p) => p.participantEmail === user?.email
        );

        if (loggedInParticipant) {
          setParticipant(loggedInParticipant);
        } else {
          Swal.fire({
            title: "Error!",
            text: "Participant data not found for the logged-in user.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error fetching participant data:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to load participant data.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchParticipant();
    } else {
      setLoading(false);
    }
  }, [axiosSecure, user?.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParticipant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosSecure.put(`/participants/${participant._id}`, participant);
      Swal.fire({
        title: "Success!",
        text: "Profile updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating participant:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to update profile.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  if (!participant) {
    return <div>No participant data available.</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-center w-full my-5 text-3xl text-[#A294F9] font-bold">
        Participant Profile
      </h2>
      <div className="flex flex-wrap justify-center">
        {!isEditing ? (
          <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
            <img
              className="w-full"
              src={user.photoURL}
              alt={participant.name || "Profile"}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {participant.participantName}
              </div>
              <p className="text-black dark:text-white">
                Email: {participant.participantEmail}
              </p>
              <p className="text-black dark:text-white">
                Contact No: {participant.phone}
              </p>
              <p className="text-black dark:text-white">Age: {participant.age}</p>
              <button
                className="btn bg-[#C5BAFF] my-5 glass text-violet-500 w-full"
                onClick={() => setIsEditing(true)}
              >
                Update
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="participantName"
                value={participant.participantName || ""}
                onChange={handleChange}
                className="shadow bg-white dark:bg-gray-800 dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="participantEmail"
                value={participant.participantEmail || ""}
                onChange={handleChange}
                className="shadow bg-white dark:bg-gray-800 dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={user.photoURL || ""}
                onChange={handleChange}
                className="shadow bg-white dark:bg-gray-800 dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contact
              </label>
              <input
                type="text"
                name="phone"
                value={participant.phone || ""}
                onChange={handleChange}
                className="shadow bg-white dark:bg-gray-800 dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="ml-4 bg-red-500 glass hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default ParticipantProfile;
