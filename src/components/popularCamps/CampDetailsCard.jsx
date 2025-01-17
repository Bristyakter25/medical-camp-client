import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const CampDetailsCard = ({ detail}) => {
   
    const {user} = useContext(AuthContext);
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
       

          fetch("http://localhost:5000/joinCamp", {
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
    <div>
      <img className="w-full h-[400px]" src={image} alt="" />
      <h2>{name}</h2>
      <p>Camp Fees: {fees}</p>
      <p>Date: {date}</p>
      <p>Description: {description}</p>
      <p>Location: {location}</p>
      <p>Doctor Name: {healthcareName}</p>
      <p>Participants: {participantCount}</p>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
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
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CampDetailsCard;

// Camp Name (read-only)
// Camp Fees(read-only)
// Location(read-only)
// Healthcare Professional Name(read-only)
// Participant Name (from loggedIn info)
// Participant Email(from loggedIn info)
// Age
// Phone Number
// Gender
// Emergency Contact

