import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import useParticipants from '../../../hooks/useParticipants';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ParticipantProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const { participants } = useParticipants();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    image: '',
    contact: ''
  });

  useEffect(() => {
    if (user) {
      const participant = participants.find(p => p.participantEmail === user.email);
      if (participant) {
        setProfile({
          name: participant.participantName,
          email: participant.participantEmail,
          image: user.photoURL,
          contact: participant.phone
        });
      }
    }
  }, [user, participants]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: profile.name,
      email: profile.email,
      image: profile.image,
      contact: profile.contact
    }
  });

  useEffect(() => {
    reset(profile); 
  }, [profile, reset]);

  const handleUpdate = async (data) => {
    try {
      await axiosSecure.put(`/participants/email/${profile.email}`, data);
      setProfile(data);
      setIsEditing(false);
      Swal.fire({
        title: 'Success!',
        text: 'Your profile has been updated successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update the profile!',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <h2 className="text-xl font-semibold">Participant Profile</h2>
          <table className="min-w-full bg-white border-collapse border border-gray-200">
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Name</td>
                <td className="px-4 py-2 border border-gray-200">{profile.name}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Email</td>
                <td className="px-4 py-2 border border-gray-200">{profile.email}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Image</td>
                <td className="px-4 py-2 border border-gray-200">
                  <img src={profile.image} alt={`${profile.name}'s profile`} />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Contact</td>
                <td className="px-4 py-2 border border-gray-200">{profile.contact}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary mt-4" onClick={() => setIsEditing(true)}>Update</button>
        </div>
      ) : (
        <div className="bg-base-100 w-full max-w-4xl shadow-2xl p-6">
          <form onSubmit={handleSubmit(handleUpdate)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
                required
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="input input-bordered w-full"
                required
                readOnly
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                {...register("image", { required: true })}
                className="input input-bordered w-full"
                required
              />
              {errors.image && <span>This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Contact</span>
              </label>
              <input
                type="text"
                placeholder="Contact"
                {...register("contact", { required: true })}
                className="input input-bordered w-full"
                required
              />
              {errors.contact && <span>This field is required</span>}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Submit</button>
              <button type="button" className="btn btn-secondary mt-4" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ParticipantProfile;
