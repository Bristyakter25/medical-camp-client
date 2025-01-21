import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = UseAxiosSecure();

    useEffect(() => {
        const checkAdminStatus = async () => {
            try {
                const res = await axiosSecure.get(`/users/admin/${user.email}`);

                console.log(res.data);
                setIsAdmin(res.data?.admin);
            } catch (error) {
                console.error("Error fetching admin status:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.email) {
            checkAdminStatus();
        }
    }, [user?.email, axiosSecure]);

    return [isAdmin, loading];
};

export default UseAdmin;