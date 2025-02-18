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
    console.log(data);
  
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
  
        // Update Firebase user profile with name and photoURL
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("User profile updated successfully");
  
            // Include displayName and photoURL in the database request
            const userToSave = {
              name: data.name,
              email: loggedUser.email,
              photoURL: data.photoURL,
            };
  
            // Store the updated user in the database
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
                console.log("User created in database:", response);
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
        console.error("Error creating user:", error);
        Swal.fire({
          title: "Registration Failed",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className=" bg-slate-300 min-h-screen ">
      <h1 className="text-5xl text-center font-bold py-5">Register now!</h1>
      <div className="flex items-center justify-center gap-x-2 my-5">
        <p className="text-center hover:text-blue-500">
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <FaArrowRight />
        </p>
        <p>Register</p>
      </div>
      <div className="bg-white lg:max-w-6xl mx-auto p-5 rounded-lg">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className=" lg:text-left w-[400px]">
            <Lottie animationData={loginAnimation}></Lottie>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                  name="name"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="url"
                  placeholder="photoURL"
                  {...register("photoURL")}
                  className="input input-bordered"
                  name="photoURL"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn w-full bg-[#C5BAFF] glass text-violet-500">Register</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <Social></Social>
            <p className="text-center py-3 ">
              Already have an account?
              <Link to="/login" className="text-red-500">
                {" "}
                Login here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
