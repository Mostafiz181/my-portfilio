import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>,

        },
        {
            path:"About",
            element: <About></About>
        },
        {
            path:"Service",
            element: <Service></Service>
        }
      ]
    },
  ]);