import { Link, NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import loginAnimation from '../../assets/login animation.json';
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Social from "../../components/Social/Social";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          title: "Login Successful!",
          text: `Welcome back, ${user.displayName || "User"}!`,
          icon: "success",
          confirmButtonText: "OK",
        });

        form.reset();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="min-h-screen pt-20 mt-20 bg-slate-100 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-5xl text-center font-bold py-5 text-gray-800 dark:text-white">Login now!</h1>

      <div className="flex items-center  justify-center gap-x-2 my-5 text-gray-700 dark:text-gray-300">
        <p className="hover:text-blue-500 dark:hover:text-blue-300">
          <NavLink to="/">Home</NavLink>
        </p>
        <p><FaArrowRight /></p>
        <p>Login</p>
      </div>

      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 lg:max-w-6xl mx-auto p-5 rounded-lg shadow-xl">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="w-[400px]">
            <Lottie animationData={loginAnimation} />
          </div>

          <div className="card bg-white dark:bg-gray-700 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleLogin} className="card-body bg-white dark:bg-gray-700">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input input-bordered bg-white dark:bg-gray-100 text-black"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="input input-bordered bg-white dark:bg-gray-100 text-black"
                />
              </div>

              <div className="form-control  mt-6">
                <button className="btn w-full bg-[#C5BAFF] hover:bg-[#B7ACF5] text-violet-600">Login</button>
              </div>
            </form>

            <div className="divider dark:divider-neutral bg-white dark:bg-gray-700">OR</div>

            <Social />

            <p className="text-center py-3 text-black dark:text-gray-300">
              Don't have an account?
              <Link to="/register" className="text-red-500 hover:underline"> Register here!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
