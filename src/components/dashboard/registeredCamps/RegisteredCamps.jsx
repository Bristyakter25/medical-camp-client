import { Link } from "react-router-dom";
import useParticipants from "../../../hooks/useParticipants";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { InfinitySpin } from "react-loader-spinner";

const RegisteredCamps = () => {
  const { participants, loading } = useParticipants();
  const { user } = useContext(AuthContext);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
                <InfinitySpin
                  visible={true}
                  width="200"
                  color="#4fa94d"
                  ariaLabel="infinity-spin-loading"
                />
              </div>; ;
  }

 
  if (!user || !participants) {
    return <p>No registered camps found for you.</p>;
  }

  
  const userParticipants = participants.filter(
    (participant) => participant.participantEmail === user.email
  );

  // Calculate total fees for the logged-in user
  const totals = userParticipants.reduce((acc, participant) => {
    const email = participant.participantEmail;
    const fees = parseFloat(participant.campFees) || 0;

    if (!acc[email]) {
      acc[email] = {
        name: participant.participantName,
        email,
        campName: participant.campName,
        totalFees: 0,
      };
    }

    acc[email].totalFees += fees;

    return acc;
  }, {});

  const formattedTotals = Object.values(totals);

  return (
    <div className="lg:w-[900px] w-[380px] mx-auto">
      <h2 className="text-center w-full my-5 text-3xl text-[#A294F9] font-bold ">Registered Camps</h2>
      {formattedTotals.length === 0 ? (
        <p>No registered camps found for you.</p>
      ) : (
        <table className="table-auto border border-gray-300 lg:w-[900px] mt-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Camp Name</th>
              <th className="border border-gray-300 px-4 py-2">Payment</th>
              <th className="border border-gray-300 px-4 py-2">Total Fees</th>
              <th className="border border-gray-300 px-4 py-2">Feed back</th>
            </tr>
          </thead>
          <tbody>
            {formattedTotals.map(({ name, email, campName, totalFees }) => (
              <tr key={email}>
                <td className="border border-gray-300 px-4 py-2">{name}</td>
                <td className="border border-gray-300 px-4 py-2">{email}</td>
                <td className="border border-gray-300 px-4 py-2">{campName}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link to="/dashboard/pay" state={{ totalPrice: totalFees }}>
                    <button className="btn">Pay</button>
                  </Link>
                </td>
                <td className="border border-gray-300 px-4 py-2">${totalFees}</td>
                <Link to="/dashboard/feedBack"><td className="border border-gray-300 px-4 py-2"><button className="btn">Feedback</button></td></Link>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RegisteredCamps;
