import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import {
  FaClinicMedical,
  FaHospitalUser,
  FaMoneyCheckAlt,
  FaRegAddressBook,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { MdManageAccounts, MdQueryStats } from "react-icons/md";
import { TbBrandGoogleAnalytics, TbCashRegister } from "react-icons/tb";
import { GrHome } from "react-icons/gr";
import UseAdmin from "../../hooks/UseAdmin";

const DashBoard = () => {
  const [isAdmin] = UseAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Update class on HTML tag
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="flex w-full h-full">
      {/* Toggle Sidebar Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-[#4635B1] text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Dark/Light Toggle Button */}
      <button
        className="fixed top-4 right-24 z-40 p-2 bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded-md"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 lg:w-72 w-[200px] h-screen overflow-y-auto bg-[#F5EFFF] dark:bg-[#00072D] p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <ul className="menu">
          <h2 className="text-center my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Menu</h2>
          <li><NavLink to="/dashboard/allChart"><MdQueryStats /> Camp Fees Distribution</NavLink></li>
          <li><NavLink to="/"><GrHome /> Home</NavLink></li>
          <li><NavLink to='/availableCamps'><FaHouseMedicalFlag /> Available Camps</NavLink></li>

          {isAdmin && (
            <>
              <h2 className="text-center my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Organizers Dashboard</h2>
              <li><NavLink to="/dashboard/adminProfile"><FaHospitalUser /> Organizer Profile</NavLink></li>
              <li><NavLink to="/dashboard/addCamp"><FaClinicMedical /> Add Camp</NavLink></li>
              <li><NavLink to="/dashboard/users"><FaUsers /> Users</NavLink></li>
              <li><NavLink to="/dashboard/manageCamps"><MdManageAccounts /> Manage Camps</NavLink></li>
              <li><NavLink to="/dashboard/manageRegisteredCamps"><TbCashRegister /> Manage Registered Camps</NavLink></li>
            </>
          )}
        </ul>

        <div className="divider"></div>

        {!isAdmin && (
          <ul className="menu">
            <h2 className="text-center my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Participants Dashboard</h2>
            <li><NavLink to='/dashboard/campChart'><TbBrandGoogleAnalytics /> Analytics</NavLink></li>
            <li><NavLink to='/dashboard/participantProfile'><FaUserTie /> Participant Profile</NavLink></li>
            <li><NavLink to='/dashboard/registeredCamps'><FaRegAddressBook /> Registered Camps</NavLink></li>
            <li><NavLink to='/dashboard/payments'><FaMoneyCheckAlt /> Payment History</NavLink></li>
          </ul>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-5 lg:ml-0 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
