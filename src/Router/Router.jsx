import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../error/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashBoard from "../components/dashboard/DashBoard";
import AddCamp from "../components/dashboard/AddCamp";
import Home from "../pages/home/Home";
import AvailableCamps from "../pages/availableCamp/AvailableCamps";
import CampDetails from "../components/popularCamps/CampDetails";
import AvailableCampDetails from "../pages/availableCamp/AvailableCampDetails";
import ManageCamp from "../components/dashboard/ManageCamp/ManageCamp";
import Users from "../components/dashboard/profile/Users";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>

        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'availableCamps',
          element:<PrivateRoutes><AvailableCamps></AvailableCamps></PrivateRoutes>
        },
        {
          path:'popularCamps/:id',
          element:<CampDetails></CampDetails>
        },
        {
          path:'addCamp/:id',
          element:<AvailableCampDetails></AvailableCampDetails>
        },
        {
          path:'/dashboard',
          element:<DashBoard></DashBoard>,
          children:[
            {
              path:'addCamp',
              element:<AddCamp></AddCamp>
            },
            {
              path:'manageCamps',
              element:<ManageCamp></ManageCamp>
            },
            {
              path:'users',
              element:<Users></Users>
            }
            
          ]
        }
      ]
    },
  ]);