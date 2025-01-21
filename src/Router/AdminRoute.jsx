import React, { useContext } from 'react';
import UseAdmin from '../hooks/UseAdmin';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin, loading] = UseAdmin();
    const location = useLocation();
    if(loading ){
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;