import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";  // Import your axiosSecure hook
import { InfinitySpin } from "react-loader-spinner";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  
  const axiosSecure = UseAxiosSecure(); // Use the axiosSecure instance

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      
      const response = await axiosSecure.get("/users");
      setUsers(response.data); // 
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
      } else {
        alert("Failed to update role.");
      }
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen">
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>;

  return (
    <div className="lg:w-[800px] w-[380px] mx-auto">
      <h1 className="text-center w-full my-5 text-3xl text-[#A294F9] font-bold">Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="gap-x-2">
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-5">{user.name}</td>
              <td className="px-5">{user.email}</td>
              <td className="px-5">{user.role}</td>
              <td className="px-5">
                <select
                  value={user.role}
                  onChange={(e) => updateRole(user._id, e.target.value)}
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
  );
};

export default Users;
