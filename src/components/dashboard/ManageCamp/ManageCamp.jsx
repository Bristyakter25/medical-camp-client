import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageCamp = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addCamp")
      .then((res) => res.json())
      .then((data) => {
        setCamps(data);
      });
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = await Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you won't be able to recover this camp!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (isConfirmed.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/addCamp/${id}`, {
          method: "DELETE",
        });
        
        const result = await response.json();
        if (result.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "The camp has been deleted successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });

          // Remove the deleted camp from the list
          setCamps(camps.filter((camp) => camp._id !== id));
        }
      } catch (error) {
        console.error("Error deleting camp:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the camp!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    }
  };

  return (
    <div>
      <h2 className="text-center w-full mt-16 text-3xl text-[#A294F9] font-bold mb-10">
        Manage Camps
      </h2>
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
            {camps.map((camp) => (
              <tr key={camp._id}>
                <td className="border border-gray-300 px-2 py-2">{camp.name}</td>
                <td className="border border-gray-300 px-2 py-2">{camp.date}</td>
                <td className="border border-gray-300 px-2 py-2">{camp.location}</td>
                <td className="border border-gray-300 px-2 py-2">{camp.healthcareName}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link to={`/dashboard/updateCamp/${camp._id}`}>
                    <button className="btn bg-blue-500 text-white px-4 py-1 rounded mr-2">
                      Update
                    </button>
                  </Link>
                  <button onClick={() => handleDelete(camp._id)} className="btn bg-red-500 text-white px-4 py-1 rounded">
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
