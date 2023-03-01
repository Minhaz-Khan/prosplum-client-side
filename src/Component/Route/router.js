import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Home from "../Pages/Home/Home";
import MyServices from "../Pages/MyServices/MyServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import Login from '../Pages/User/Login'
import SignUp from "../Pages/User/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://prosplum.vercel.app/services')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'services',
                element: <Services></Services>,
                loader: () => fetch('https://prosplum.vercel.app/allservice')
            },
            {
                path: 'serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://prosplum.vercel.app/service/${params.id}`)
            },
            {
                path: 'addService',
                element: <PrivetRoute><AddService></AddService></PrivetRoute>
            },
            {
                path: 'myServices',
                element: <PrivetRoute><MyServices></MyServices></PrivetRoute>
            }
        ]
    }
])

export default router