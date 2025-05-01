import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddCamp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm ();

      const onSubmit = async (data) => {
        try {
          const response = await fetch("https://medical-camp-server-five.vercel.app/addCamp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
    
          const result = await response.json();
          if (result.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: "You Added the Camp!",
              icon: "success"
            });
            reset(); // Clear the form
          }
        } catch (error) {
          console.error("Error adding camp:", error);
        }
      };
  return ( 
      <div>
      <h1 className="text-center w-full my-5 text-3xl text-[#A294F9] font-bold">Add a Camp!</h1>
      <div className="hero w-full">
        <div className="hero-content flex-col w-full">
          <div className="bg-white 	dark:bg-[#0D1117] w-full max-w-4xl shadow-2xl p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Camp Name</span>
                </label>
                <input
                  type="text"
                  placeholder="camp name"
                  {...register("name", { required: true })}
                  className="input dark:text-white 	dark:bg-[#0D1117] bg-white input-bordered w-full"
                  name="name"
                  required
                />
                 {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="url"
                  placeholder="image"
                  {...register("image", { required: true })}
                  className="input dark:text-white 	dark:bg-[#0D1117] bg-white  input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Camp Fees</span>
                </label>
                <input
                  type="number"
                  placeholder="camp fees"
                  {...register("fees", { required: true })}
                  className="input dark:text-white 	dark:bg-[#0D1117] bg-white  input-bordered w-full"
                  required
                />
                {errors.fees && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date & Time</span>
                </label>
                <input
                  type="date"
                  placeholder="date"
                  {...register("date", { required: true })}
                  className="input 	dark:bg-[#0D1117] bg-white  dark:text-white input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="location"
                  {...register("location", { required: true })}
                  className="input 	dark:bg-[#0D1117] bg-white  dark:text-white input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Healthcare Professional Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Healthcare Professional Name"
                  {...register("healthcareName", { required: true })}
                  className="input 	dark:bg-[#0D1117] bg-white  dark:text-white input-bordered w-full"
                  required
                />
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  {...register("description", { required: true })}
                  className="input 	dark:bg-[#0D1117] bg-white  dark:text-white input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#C5BAFF] text-xl glass text-violet-500 w-full">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AddCamp;


