import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const isLoginPage = location.pathname === "/login" || "/register";
  const links = (
    <>
      <div className="gap-x-5 flex">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to='availableCamps'><li>Available Camps</li></NavLink>

        {user ? (
          <>
            <span className="text-black">
              {/* User Profile Picture */}
              {user.photoURL && (
                <div className="dropdown">
                  <div tabIndex={0}  className=" m-1">
                    <img
                      src={user.photoURL}
                      alt="User Profile"
                      className="w-8 h-8 rounded-full "
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li className="text-center my-3">{user.displayName}</li>
                    <li>
                      <button onClick={handleLogOut} className="btn ">
                        Log Out
                      </button>
                    </li>
                    <li>
                      <Link to='/dashboard/campChart'><button  className="btn text-center btn-ghost">
                        Dashboard
                      </button></Link>
                    </li>
                  </ul>
                </div>
              )}
            </span>
          </>
        ) : (
          <>
            <li>
              <Link to="/logIn">Join Us</Link>
            </li>
          </>
        )}
      </div>
    </>
  );
  return (
    <div
      className={`navbar bg-slate-50 ${
        isLoginPage ? "bg-slate-300" : "bg-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="w-10 h-10 rounded-full" src={logo} alt="" />
        <a className="ml-2 text-xl">CareSphere</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* <Link to='/login'><button className='btn'>Join Us</button></Link> */}
      </div>
    </div>
  );
};

export default Navbar;
