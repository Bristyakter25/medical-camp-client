import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../error/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashBoard from "../components/dashboard/DashBoard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/dashBoard',
          element:<DashBoard></DashBoard>
        }
      ]
    },
  ]);