import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";


const AvailableCampDCard = ({detail}) => {
    const {user} =useContext(AuthContext);
    const {
        name,
        image,
        fees,
        date,
        location,
        healthcareName,
        description,
        participantCount,
      } = detail;

      const { register, handleSubmit, reset } = useForm();
            const onSubmit = (data) => {
              const participantData = {
                  campId:detail. _id,
                  participant: {
                      participantName: user?.displayName || "Guest",
                      participantEmail: user?.email || "N/A",
                      age: data.age,
                      phone: data.phone,
                      gender: data.gender,
                      emergencyContact: data.emergencyContact,
                  },
              };
             
      
                fetch("https://medical-camp-server-five.vercel.app/joinCamp", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(participantData),
              })
                  .then((res) => res.json())
                  .then((result) => {
                      if (result.message) {
                          alert(result.message);
                          reset();
                      }
                  })
                  .catch((error) => console.error("Error joining camp:", error));
          };
    return (
        <div className="lg:w-[900px] w-[380px] mx-auto my-5">
           
      <img className="w-full h-[450px] rounded-2xl" src={image} alt="" />
      <h2 className="text-black font-semibold h-[50px] text-xl text-center mt-5">{name}</h2>
      <p className="mb-2"><span className="text-black font-semibold "> Camp Fee:</span> {fees}</p>
      <p className="mb-2"><span className="text-black font-semibold "> Date:</span>{date}</p>
      <p className="mb-2"><span className="text-black font-semibold "> Description:</span>{description}</p>
      <p className="mb-2"><span className="text-black font-semibold ">Location:</span>{location}</p>
      <p className="mb-2"><span className="text-black font-semibold "> Healthcare Professional:</span> {healthcareName}</p>
      <p className="mb-2"><span className="text-black font-semibold "> Participants:</span>{participantCount}</p>
      
      <button
        className="btn w-full bg-[#C5BAFF] glass text-violet-500"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Join Camp
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
       
        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>Join Camp</h2>
                            <input type="text" value={name} readOnly className="input" />
                            <input type="number" value={fees} readOnly className="input" />
                            <input type="text" value={location} readOnly className="input" />
                            <input type="text" value={healthcareName} readOnly className="input" />
                            <input type="text" value={user?.displayName} readOnly className="input" />
                            <input type="email" value={user?.email} readOnly className="input" />
                            <input type="number" placeholder="Age" {...register("age", { required: "Age is required" })} className="input" />
                            
                            <input type="tel" placeholder="Phone Number" {...register("phone", { required: "Phone is required" })} className="input" />
                            
                            <select {...register("gender", { required: "Gender is required" })} className="input">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            
                            <input type="text" placeholder="Emergency Contact" {...register("emergencyContact", { required: "Emergency contact is required" })} className="input" />
                            
                            <button type="submit" className="btn btn-primary">Join Camp</button>
                        </form>
        
          <div className="modal-action">
            <form method="dialog">
             
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
        
    );
};

export default AvailableCampDCard;