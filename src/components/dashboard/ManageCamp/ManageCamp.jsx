import { useEffect, useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageCamp = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    fetch("https://medical-camp-server-five.vercel.app/addCamp")
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
        const response = await fetch(`https://medical-camp-server-five.vercel.app/addCamp/${id}`, {
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
    <div className="px-4">
      <h2 className="text-center mt-16 text-3xl text-[#A294F9] font-bold mb-10">
        Manage Camps
      </h2>
      <div className="overflow-x-auto w-[320px] lg:w-full">
        <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3">Name</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3">Date & Time</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3">Location</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3">Healthcare Professional</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-gray-900 text-black dark:text-white">
            {camps.map((camp) => (
              <tr key={camp._id}>
                <td className="border border-gray-300 dark:border-gray-700 px-2 py-3">{camp.name}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-2 py-3">{camp.date}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-2 py-3">{camp.location}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-2 py-3">{camp.healthcareName}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 flex gap-2">
                  <Link to={`/dashboard/updateCamp/${camp._id}`}>
                    <button className="btn bg-[#A594F9] hover:bg-[#C4D9FF] text-violet-600 dark:text-white font-bold px-4 py-1 rounded">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(camp._id)}
                    className="btn bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                  >
                    <IoTrashBinSharp />
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
