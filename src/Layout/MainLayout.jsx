import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Navbar/footer/Footer";

const MainLayout = () => {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith("/dashboard"); // Check if it's a dashboard route

    return (
        <div className="bg-white w-full overflow-x-hidden dark:bg-[#09122C] text-black dark:text-white min-h-screen">
            <Navbar />

            <div className={`${isDashboard ? "w-full" : "lg:w-[1124px] w-[320px] mx-auto"}`}>
                <Outlet />
            </div>

            {!isDashboard && <Footer />}
        </div>
    );
};

export default MainLayout;
