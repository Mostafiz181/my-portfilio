import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Skill from "../Pages/Skill/Skill";
import Contact from "../Pages/Contact/Contact";


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
        },
        {
          path:"Portfolio",
          element:<Portfolio></Portfolio>
        },
        {
          path:"Skill",
          element:<Skill></Skill>,
        },
        {
          path:"Contact",
          element:<Contact></Contact>
        }
      ]
    },
  ]);