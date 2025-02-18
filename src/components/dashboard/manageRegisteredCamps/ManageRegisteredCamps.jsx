import { useEffect, useState } from "react";

const ManageRegisteredCamps = () => {
  const [registeredCamps, setRegisteredCamps] = useState([]);

  useEffect(() => {
    fetch("https://medical-camp-server-five.vercel.app/participants")
      .then((res) => res.json())
      .then((data) => {
        setRegisteredCamps(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center w-full mt-16 text-3xl text-[#A294F9] font-bold mb-10">
        Registered Participants
      </h2>
      <div className="lg:w-[1024px] mx-auto w-[400px]">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Camp Name</th>
              <th className="px-4 py-2">Camp Fees</th>
              <th className="px-4 py-2">Participant Name</th>
              <th className="px-4 py-2">Payments State</th>
            </tr>
          </thead>
          <tbody>
            {registeredCamps.map((camp) => (
              <tr key={camp._id}>
                <td className="border px-4 text-center py-2">
                  {camp.campName}
                </td>
                <td className="border px-4 text-center py-2">
                  {camp.campFees}
                </td>
                <td className="border px-4 text-center py-2">
                  {camp.participantName}
                </td>
                <td className="border px-4 text-center py-2">{camp.status === "paid" ? "Paid" : "Unpaid"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRegisteredCamps;
