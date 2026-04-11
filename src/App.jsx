import React from "react";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";



export default function App (){
  return <RouterProvider router={router} />;
}