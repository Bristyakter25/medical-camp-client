import { InfinitySpin } from "react-loader-spinner";
import useParticipants from "../../../hooks/useParticipants";



const TotalFees = () => {
  const { participants, loading } = useParticipants();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
    <InfinitySpin
      visible={true}
      width="200"
      color="#4fa94d"
      ariaLabel="infinity-spin-loading"
    />
  </div>;
  }

  // Calculate total fees per participant
  const totals = participants.reduce((acc, participant) => {
    const email = participant.participantEmail;
    const fees = parseFloat(participant.campFees) || 0;

    if (!acc[email]) {
      acc[email] = { name: participant.participantName, totalFees: 0 };
    }

    acc[email].totalFees += fees;

    return acc;
  }, {});

  return (
    <div>
      <h1>Participant Fees</h1>
      <ul>
        {Object.entries(totals).map(([email, { name, totalFees }]) => (
          <li key={email}>
            {name} ({email}): ${totalFees}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalFees;
