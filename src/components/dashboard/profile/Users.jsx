import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { InfinitySpin } from "react-loader-spinner";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axiosSecure.get("/users");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const updateRole = async (userId, role) => {
    try {
      const response = await axiosSecure.patch(`/users/admin/${userId}`, {
        role,
      });

      if (response.status === 200) {
        alert("User role updated successfully!");
        fetchUsers(); // Refresh list after update
      } else {
        alert("Failed to update role.");
      }
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  if (loading)
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

  return (
    <div className="lg:w-[800px] w-[380px] mx-auto p-4">
      <h1 className="text-center my-5 text-3xl font-bold text-[#4635B1] dark:text-[#A294F9]">
        Admin Dashboard
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 bg-white dark:bg-[#0D1117] shadow-md rounded-lg">
          <thead className="bg-gray-100 dark:bg-[#161B22] text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-[#1E232A]">
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{user.role}</td>
                <td className="px-6 py-4 text-sm">
                  <select
                    value={user.role}
                    onChange={(e) => updateRole(user._id, e.target.value)}
                    className="bg-white dark:bg-[#161B22] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 p-1 rounded"
                  >
                    <option value="participant">Participant</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
