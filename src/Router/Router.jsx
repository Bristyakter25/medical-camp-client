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
import UpdateCamp from "../components/dashboard/ManageCamp/UpdateCamp";
import RegisteredCamps from "../components/dashboard/registeredCamps/RegisteredCamps";
import Pay from "../components/dashboard/registeredCamps/Pay";
import TotalFees from "../components/dashboard/registeredCamps/TotalFees";
import PaymentHistory from "../components/dashboard/paymentHistory/PaymentHistory";
import CampChart from "../components/dashboard/chart/CampChart";
import ParticipantProfile from "../components/dashboard/participantProfile/ParticipantProfile";
import ManageRegisteredCamps from "../components/dashboard/manageRegisteredCamps/ManageRegisteredCamps";
import AdminList from "../components/dashboard/adminProfile/AdminList";
import Feedback from "../components/dashboard/registeredCamps/Feedback";


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
            // Participants Route
            {
              path: 'registeredCamps',
              element:<RegisteredCamps></RegisteredCamps>
            },
            {
              path:'pay',
              element:<Pay></Pay>
            },
            {
              path:'totalFees',
              element:<TotalFees></TotalFees>
            },
            {
              path:'payments',
              element:<PaymentHistory></PaymentHistory>
            },
            {
              path:'campChart',
              element:<CampChart></CampChart>

            },
            {
              path:'participantProfile',
              element:<ParticipantProfile></ParticipantProfile>
            },
            {
              path:'feedBack',
              element:<Feedback></Feedback>
            },

            // Admin / Organizers Route
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
            },
            
            {
              path: 'updateCamp/:id', 
              element: <PrivateRoutes><UpdateCamp /></PrivateRoutes>,
              loader: ({ params }) => fetch(`http://localhost:5000/addCamp/${params.id}`) 
            },
            {
              path: 'registeredCamps',
              element:<RegisteredCamps></RegisteredCamps>
            },
            {
              path:'manageRegisteredCamps',
              element:<ManageRegisteredCamps></ManageRegisteredCamps>
            },
            {
              path:'adminProfile',
              element:<AdminList></AdminList>
            }
            
            
          ]
        }
      ]
    },
  ]);