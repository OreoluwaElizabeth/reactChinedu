//import { Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

const ROUTES = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'home',
                element: <Home/>
            }
        ]
    },
    {
        path: "/signup",
        element: <SignUp/>
    }
]