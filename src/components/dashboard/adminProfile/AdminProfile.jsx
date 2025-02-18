import React, { useState } from 'react';

const AdminProfile = ({ admin, onUpdate }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <img className="w-full" src={admin.photoURL} alt={admin.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl dark:text-white mb-2">{admin.name}</div>
        <p className="text-gray-700 dark:text-white text-base">{admin.email}</p>
        <button 
          className="btn bg-[#C5BAFF] my-5 glass text-violet-500 w-full"
          onClick={() => onUpdate(admin)}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
