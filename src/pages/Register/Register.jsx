import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import loginAnimation from '../../assets/login animation.json'
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm ();

  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser( data.email,data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);


      updateUserProfile(data.name,data.photoURL)
      .then(()=>{
        console.log('user profile updated')
        reset();
        Swal.fire({
          title: "Successfully LoggedIn",
          icon: "success",
          draggable: true
        });
        navigate('/');

})
.catch(error => console.log(error))


      });
   
  };
    return (
        <div className=" bg-slate-300 min-h-screen ">
<h1 className="text-5xl text-center font-bold py-5">Register now!</h1>
<div className="flex items-center justify-center gap-x-2 my-5">
<p className="text-center hover:text-blue-500"><NavLink to='/'>Home</NavLink></p>
<p><FaArrowRight /></p>
<p>Register</p>
</div>
         <div className="bg-white lg:max-w-6xl mx-auto p-5 rounded-lg">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className=" lg:text-left w-[400px]">
            
            <Lottie  animationData={loginAnimation}></Lottie>
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
                  {...register("photoURL" )}
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center py-3 ">Already have an account?<Link to='/login' className="text-red-500"> Login here!</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;