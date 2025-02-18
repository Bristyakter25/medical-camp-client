import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Navbar/footer/Footer";



const MainLayout = () => {
    return (
        <div className="bg-white dark:bg-[#09122C] text-black dark:text-white min-h-screen">
            <Navbar />
            
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;