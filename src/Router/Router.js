import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/Pages/About";
import Appointment from "../Components/Pages/Appointment/Appointment";
import Blog from "../Components/Pages/Blog";
import Contact from "../Components/Pages/Contact";
import Login from "../Components/Pages/Login";
import MyAppointment from "../Components/Pages/MyAppointment/MyAppointment";
import Register from "../Components/Pages/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRout";

export const router = createBrowserRouter([

    {
        path : '/' ,
        element : <Main></Main> ,
        children : [
            {
                path : '/' ,
                element : <Home></Home> 
            } ,
            {
                path : '/about' ,
                element : <About></About>
            },
            {
                path : '/contact' ,
                element : <Contact></Contact>
            },
            {
                path : '/blog' ,
                element : <Blog></Blog>
            },
            {
                path : '/appointment' ,
                element : <Appointment></Appointment>
            },
            {
                path : '/login' ,
                element : <Login></Login>
            },
            {
                path : '/register' ,
                element : <Register></Register>
            },
            {
                path : '/myappointment' ,
                element : <PrivateRoute><MyAppointment></MyAppointment></PrivateRoute>
            }
            
        ]
    }
])

export default router ;