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
    <div className="bg-slate-300 min-h-screen pt-20">
      <h1 className="text-5xl text-center font-bold py-5">Login now!</h1>
      <div className="flex items-center justify-center gap-x-2 my-5">
        <p className="text-center hover:text-blue-500">
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <FaArrowRight />
        </p>
        <p>Login</p>
      </div>
      <div className="bg-white lg:max-w-6xl mx-auto p-5 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:text-left w-[400px]">
            <Lottie animationData={loginAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input dark:text-black input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input dark:text-black input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn w-full bg-[#C5BAFF] glass text-violet-500">Login</button>
              </div>
            </form>

            <div className="divider">OR</div>
            <Social></Social>
            <p className="text-center dark:text-black py-3">
              Don't have an account?
              <Link to="/register" className="text-red-500">
                {" "}
                Register here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
