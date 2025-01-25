import React, { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";

const ParticipantProfile = () => {
  const [participant, setParticipant] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext); // Access the logged-in user's info

  useEffect(() => {
    const fetchParticipant = async () => {
      try {
        // Fetch participants from the server
        const response = await axiosSecure.get("/participants");
        const participants = response.data;

        // Find the logged-in user's data
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
        setLoading(false); // Stop loading after data is fetched
      }
    };

    if (user?.email) {
      fetchParticipant();
    } else {
      setLoading(false); // Stop loading if no user is logged in
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
    return <div>Loading...</div>; // Loading spinner or message
  }

  if (!participant) {
    return <div>No participant data available.</div>; // Fallback message
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl mt-8 mb-4 font-bold">
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
              <div className="font-bold text-xl mb-2">{participant.participantName}</div>
              <p className="text-black">Email: {participant.participantEmail}</p>
              <p className="text-black">
                Contact No: {participant.phone }
              </p>
              <p className="text-black">Age: {participant.age}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
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
                name="name"
                value={participant.participantName || ""}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={participant.photoURL || ""}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contact
              </label>
              <input
                type="text"
                name="contact"
                value={participant.phone || ""}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
            <button
              type="button"
              className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
