import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/Pages/About";
import Appointment from "../Components/Pages/Appointment/Appointment";
import Blog from "../Components/Pages/Blog";
import Contact from "../Components/Pages/Contact";
import Admin from "../Components/Pages/DashBoard/Admin";
import AllAppointments from "../Components/Pages/DashBoard/AllAppointments";
import AllUser from "../Components/Pages/DashBoard/AllUser";
import DashBoard from "../Components/Pages/DashBoard/DashBoard";
import Doctors from "../Components/Pages/DashBoard/Doctors";
import Login from "../Components/Pages/Login";
import MyAppointment from "../Components/Pages/MyAppointment/MyAppointment";
import Register from "../Components/Pages/Register";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRout";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path : '/myappointment' ,
                element : <MyAppointment></MyAppointment>
            },
           


            {
                path: '/dashboard',
                element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute> ,
                children: [
                  
                    {
                        path: '/dashboard/users',
                        element: <AdminRoute><AllUser></AllUser></AdminRoute>
                    },
                    {
                        path: '/dashboard/doctors',
                        element:<AdminRoute> <Doctors></Doctors></AdminRoute>
                    },
                    {
                        path: '/dashboard/admin',
                        element: <AdminRoute><Admin></Admin></AdminRoute>
                    },
                    {
                        path: '/dashboard/appointment',
                        element: <AdminRoute><AllAppointments></AllAppointments></AdminRoute>
                    },
                   


                ]
            }


        ]
    }
])

export default router;