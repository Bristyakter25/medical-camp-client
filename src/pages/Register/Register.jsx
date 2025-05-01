import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import loginAnimation from "../../assets/login animation.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Social from "../../components/Social/Social";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userToSave = {
              name: data.name,
              email: loggedUser.email,
              photoURL: data.photoURL,
            };

            fetch("https://medical-camp-server-five.vercel.app/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
              body: JSON.stringify(userToSave),
            })
              .then((res) => res.json())
              .then((response) => {
                Swal.fire({
                  title: "Registration Successful!",
                  text: "Your account has been created.",
                  icon: "success",
                });
                reset();
                navigate("/");
              })
              .catch((error) => {
                console.error("Error storing user in database:", error);
              });
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Registration Failed",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="bg-slate-100 mt-20 dark:bg-gray-900 pt-20 min-h-screen text-black dark:text-white">
      <h1 className="text-5xl text-center font-bold py-5">Register now!</h1>
      <div className="flex items-center justify-center gap-x-2 my-5">
        <p className="hover:text-blue-500">
          <NavLink to="/">Home</NavLink>
        </p>
        <p><FaArrowRight /></p>
        <p>Register</p>
      </div>
      <div className="bg-white dark:bg-gray-800 lg:max-w-6xl mx-auto p-5 rounded-lg shadow-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[400px]">
            <Lottie animationData={loginAnimation} />
          </div>

          <div className="card bg-white dark:bg-gray-700 w-full max-w-sm shadow-2xl text-black dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  className="input input-bordered bg-white dark:bg-gray-800 text-black dark:text-white"
                />
                {errors.name && <span className="text-red-400">This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered bg-white dark:bg-gray-800 text-black dark:text-white"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Photo</span>
                </label>
                <input
                  type="url"
                  placeholder="photoURL"
                  {...register("photoURL")}
                  className="input input-bordered bg-white dark:bg-gray-800 text-black dark:text-white"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered bg-white dark:bg-gray-800 text-black dark:text-white"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn w-full bg-[#C5BAFF] glass text-violet-500">Register</button>
              </div>
            </form>

            <div className="divider dark:divider-white">OR</div>
            <Social />
            <p className="text-center py-3">
              Already have an account?
              <Link to="/login" className="text-red-500"> Login here!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
