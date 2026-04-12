import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Index from "./page";
import Nav from "./constant/nav";
import Menu from "./components/menu";
import Catering from "./components/cateering";
import About from "./components/about";
import Signup from "./auth/signup";
import Login from "./auth/login";
import Cart from "./components/cart";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/nav",
    element: <Nav></Nav>,
  },
  {
    path: "/menu",
    element: <Menu></Menu>,
  },
  {
    path:"/catering",
    element:<Catering></Catering>
  },
  {
    path:"/about",
    element:<About></About>
  }
  ,{
    path:"/signup",
    element:<Signup></Signup>
  }
  ,{
    path:"/login",
    element:<Login></Login>
  }
  ,{
    path:"/cart",
    element:<Cart></Cart>
  }
]);
