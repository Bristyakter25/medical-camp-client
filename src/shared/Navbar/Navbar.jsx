import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import DarkModeToggle from "../../components/darkmode/DarkModeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const NavLinks = () => (
    <>
      <div className="gap-x-5 flex ">
        <NavLink to="/" className="text-xl text-[#4635B1] hover:text-blue-500 font-semibold">Home</NavLink>
        <NavLink to="/availableCamps" className="text-xl hover:text-blue-500 text-[#4635B1] font-semibold">Available Camps</NavLink>
      </div>
    </>
  );

  // Check if the current path is Dashboard or Login/Register
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const isLoginPage = location.pathname === "/login" || location.pathname === "/register";

  // If it's a dashboard or login/register page, don't show the navbar
  if (isDashboardPage) {
    return null;
  }

  return (
    <div className={`${isLoginPage ? "bg-[#F5EFFF]" : "bg-white"}`}>
      <div className="navbar max-w-[1000px] mx-auto px-4">
        {/* Left Side (Logo + Toggle) */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <NavLinks />
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
            <Link to="/" className="ml-2 text-2xl text-blue-500 font-bold">CareSphere</Link>
          </div>
        </div>

        {/* Center (Navigation Links) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>

        {/* Right Side (Dark Mode + User Profile / Join Us) */}
        <div className="navbar-end flex gap-4">
          <DarkModeToggle /> {/* Dark Mode Button */}
          {user ? <UserProfile user={user} handleLogOut={handleLogOut} /> : <Link to="/login" className="btn">Join Us</Link>}
        </div>
      </div>
    </div>
  );
};

// Separate User Profile Component
const UserProfile = ({ user, handleLogOut }) => (
  <div className="dropdown dark:text-black dropdown-end">
    <div tabIndex={0} role="button" className="m-1 flex items-center cursor-pointer">
      <img src={user.photoURL} alt="User Profile" className="w-8 h-8 rounded-full" />
    </div>
    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      <li className="text-center my-3 font-semibold">{user.displayName}</li>
      <li>
        <button onClick={handleLogOut} className="btn w-full">Log Out</button>
      </li>
      <li>
        <Link to="/dashboard/allChart" className="btn text-center btn-ghost w-full">Dashboard</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
