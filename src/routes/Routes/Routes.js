import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Catagory from "../../pages/Catagories/Catagory/Catagory";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/catagory/:id', element: <Catagory></Catagory>
            },
            {
                path: '/news/:id', element: <News></News>
            },
        ]

    }
])