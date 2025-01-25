import React, { useState } from 'react';

const AdminProfile = ({ admin, onUpdate }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <img className="w-full" src={admin.photoURL} alt={admin.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{admin.name}</div>
        <p className="text-gray-700 text-base">{admin.email}</p>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" 
          onClick={() => onUpdate(admin)}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
