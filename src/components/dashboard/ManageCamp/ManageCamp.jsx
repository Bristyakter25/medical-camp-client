import { useEffect, useState } from "react";


const ManageCamp = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addCamp")
      .then((res) => res.json())
      .then((data) => {
        setCamps(data);
      });
  }, []);
  return (
    <div>
      <h2 lassName="text-center w-full mt-16 text-3xl text-[#A294F9] font-bold mb-10">Manage Camps</h2>
      <div className="overflow-x-auto">
  <table className="table table-auto w-full border-collapse border border-gray-300">
    {/* Table Header */}
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-gray-300 px-4 py-2">Name</th>
        <th className="border border-gray-300 px-4 py-2">Date & Time</th>
        <th className="border border-gray-300 px-4 py-2">Location</th>
        <th className="border border-gray-300 px-4 py-2">Healthcare Professional</th>
        <th className="border border-gray-300 px-4 py-2">Actions</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody>
      {camps.map((camp, index) => (
        <tr key={camp.id}>
          <td className="border border-gray-300 px-2 py-2">{camp.name}</td>
          <td className="border border-gray-300 px-2 py-2">{camp.date}</td>
          <td className="border border-gray-300 px-2 py-2">{camp.location}</td>
          <td className="border border-gray-300 px-2 py-2">{camp.healthcareName}</td>
          <td className="border border-gray-300 px-4 py-2">
            <button className="btn bg-blue-500 text-white px-4 py-1 rounded mr-2">
              Update
            </button>
            <button className="btn bg-red-500 text-white px-4 py-1 rounded">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ManageCamp;
