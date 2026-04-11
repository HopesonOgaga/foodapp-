import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Index from "./page";
import Nav from "./constant/nav";
import Menu from "./components/menu";
import Catering from "./components/cateering";

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
  }
]);
