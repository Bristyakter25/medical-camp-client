import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import UseAdmin from "../../hooks/UseAdmin";


const DashBoard = () => {
  
  const [isAdmin] = UseAdmin();

 
  return (
    <div className="flex">
      <div className="w-64 min-h-full mx-auto bg-sky-400">
        <ul className="menu">
         {
          isAdmin? <>
           <li>
            <NavLink to="/dashboard/adminProfile"><FaUserTie /> Organizer Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addCamp"><FaWpforms /> Add Camp</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users"><FaWpforms /> Users</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageCamps"><MdOutlineManageAccounts /> Manage Camps</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageRegisteredCamps"><GiArchiveRegister /> Manage Registered Camps</NavLink>
          </li>
          </> : <>
         
          </>
         }
        </ul>
        <div className="divider">Default</div>
        <ul className="menu">
          <li>
            <NavLink to='/dashboard/analytics'><FaUserTie /> Analytics.</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/profile'><FaWpforms /> Participant Profile</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/registeredCamps'><MdOutlineManageAccounts /> Registered Camps</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/payHistory'><GiArchiveRegister /> Payment History</NavLink>
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

