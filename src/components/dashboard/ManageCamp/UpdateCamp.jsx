import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCamp = () => {
    const updateCamp = useLoaderData();
    const { _id, name, date, location, healthcareName } = updateCamp;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`https://medical-camp-server-five.vercel.app/addCamp/${_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
            console.log(result); 
    
            if (result.message === 'Camp updated successfully!') {
                Swal.fire({
                    title: "Success!",
                    text: "Your camp has been updated successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                });
                reset();
            } else if (result.message === 'No changes made.') {
                Swal.fire({
                    title: "No Changes!",
                    text: "No changes were made to the camp.",
                    icon: "info",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            console.error("Error updating camp:", error);
    
            Swal.fire({
                title: "Error!",
                text: "Failed to update the camp!",
                icon: "error",
                confirmButtonText: "Try Again",
            });
        }
    };
    

    return (
        <div>
            <div className="hero w-full">
                <div className="hero-content flex-col w-full">
                    <div className="bg-base-100 w-full max-w-4xl shadow-2xl p-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Camp Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Camp name"
                                    {...register("name", { required: true })}
                                    className="input input-bordered w-full"
                                    name="name"
                                    defaultValue={name}
                                    required
                                />
                                {errors.name && <span>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date & Time</span>
                                </label>
                                <input
                                    type="date"
                                    placeholder="Date"
                                    {...register("date", { required: true })}
                                    className="input input-bordered w-full"
                                    defaultValue={date}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    {...register("location", { required: true })}
                                    className="input input-bordered w-full"
                                    defaultValue={location}
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
                                    className="input input-bordered w-full"
                                    defaultValue={healthcareName}
                                    required
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCamp;
