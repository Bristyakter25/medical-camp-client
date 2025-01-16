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
          element:<AvailableCamps></AvailableCamps>
        },
        {
          path:'popularCamps/:id',
          element:<CampDetails></CampDetails>
        },
        {
          path:'/dashboard',
          element:<DashBoard></DashBoard>,
          children:[
            {
              path:'addCamp',
              element:<AddCamp></AddCamp>
            }
            
          ]
        }
      ]
    },
  ]);