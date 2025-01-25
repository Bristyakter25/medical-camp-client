import { useEffect, useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";


const FeedbackDisplay = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const axiosSecure = UseAxiosSecure();

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axiosSecure.get('/feedback');
                setFeedbacks(response.data);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };

        fetchFeedbacks();
    }, [axiosSecure]);
    return (
        <div className="container mx-auto">
            <h2 className="text-center text-3xl mt-8 mb-4 font-bold">Feedback List</h2>
            {feedbacks.length === 0 ? (
                <p>No feedback found.</p>
            ) : (
                <table className="table-auto border border-gray-300 lg:w-[900px] mt-5">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Feedback</th>
                            <th className="border border-gray-300 px-4 py-2">Image</th>
                            <th className="border border-gray-300 px-4 py-2">Submitted At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((feedback) => (
                            <tr key={feedback._id}>
                                <td className="border border-gray-300 px-4 py-2">{feedback.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{feedback.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{feedback.feedback}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img src={feedback.image} alt={feedback.name} className="w-12 h-12 rounded-full object-cover" />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{new Date(feedback.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};


export default FeedbackDisplay;