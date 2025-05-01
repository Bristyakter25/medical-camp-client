import React, { useState, useContext, useEffect } from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';
import useParticipants from '../../../hooks/useParticipants';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [participant, setParticipant] = useState({});
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const { participants } = useParticipants();

  useEffect(() => {
    if (user) {
      const currentParticipant = participants.find(p => p.participantEmail === user.email);
      if (currentParticipant) {
        setParticipant(currentParticipant);
      }
    }
  }, [user, participants]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = {
      feedback,
      name: participant.participantName,
      email: participant.participantEmail,
      image: user.photoURL,
    };

    try {
      const response = await axiosSecure.post('/feedback', feedbackData);
      if (response.data.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Your feedback has been submitted!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setFeedback('');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error submitting your feedback!',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <div className="container mt-28 mx-auto px-4">
      <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-100">Feedback</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-slate-700">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="feedback">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-800 dark:text-white bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Enter your feedback here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
