import { NavLink, Outlet } from "react-router-dom";
import { FaClinicMedical, FaHospitalUser, FaMoneyCheckAlt, FaRegAddressBook, FaUsers, FaUserTie } from "react-icons/fa";

import { MdManageAccounts } from "react-icons/md";

import UseAdmin from "../../hooks/UseAdmin";
import { TbBrandGoogleAnalytics, TbCashRegister } from "react-icons/tb";


const DashBoard = () => {
  
  const [isAdmin] = UseAdmin();

 
  return (
    <div className="flex">
      <div className="w-72 h-[900px] mx-auto bg-[#F5EFFF] p-5 ">
        <ul className="menu">
         {
          isAdmin? <>
          <h2 className="text-center my-5 font-bold text-xl text-[#4635B1]">Organizers Dashboard</h2>
           <li>
            <NavLink to="/dashboard/adminProfile"><FaHospitalUser />Organizer Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addCamp"><FaClinicMedical /> Add Camp</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users"><FaUsers /> Users</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageCamps"><MdManageAccounts />Manage Camps</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageRegisteredCamps"><TbCashRegister /> Manage Registered Camps</NavLink>
          </li>
          </> : <>
         
          </>
         }
        </ul>
        <div className="divider"></div>
        <ul className="menu">
        <h2 className="text-center my-5 font-bold text-xl text-[#4635B1]">Participants Dashboard</h2>
          <li>
            <NavLink to='/dashboard/campChart'><TbBrandGoogleAnalytics /> Analytics</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/participantProfile'><FaUserTie /> Participant Profile</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/registeredCamps'><FaRegAddressBook /> Registered Camps</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/payments'><FaMoneyCheckAlt /> Payment History</NavLink>
          </li>
        </ul>

        


      </div>
      <div className="flex-1 ml-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;