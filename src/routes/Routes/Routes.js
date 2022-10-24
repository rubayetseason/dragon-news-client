import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Catagory from "../../pages/Catagories/Catagory/Catagory";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import News from "../../pages/News/News/News";
import TermsAndConditions from "../../pages/Shared/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>, loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`)
            },
            {
                path: '/news/:id', element: <PrivateRoute><News></News></PrivateRoute>, loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/terms', element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/register', element: <Register></Register>
            }
        ]

    }
])