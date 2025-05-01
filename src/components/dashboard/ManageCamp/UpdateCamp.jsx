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
        <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-gray-900 transition-colors">
            <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-xl rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-violet-600 dark:text-violet-300">Update Camp</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block mb-2 font-medium">Camp Name</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
                            defaultValue={name}
                        />
                        {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Date & Time</label>
                        <input
                            type="date"
                            {...register("date", { required: true })}
                            className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
                            defaultValue={date}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Location</label>
                        <input
                            type="text"
                            {...register("location", { required: true })}
                            className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
                            defaultValue={location}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Healthcare Professional Name</label>
                        <input
                            type="text"
                            {...register("healthcareName", { required: true })}
                            className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
                            defaultValue={healthcareName}
                        />
                    </div>

                    <div>
                        <button className="btn btn-primary w-full hover:shadow-lg transition">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCamp;
