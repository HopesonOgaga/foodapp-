import React from "react"; // Optional for React 17+, but correct if used
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="p-8">
      {/* Desktop View */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-8  items-center w-full">
        <Link to="/">  <img
            src="/images/ella.jpg"
            alt="Ella Restaurant Logo"
            className="border rounded-sm  w-32  h-16 object-cover"
          /> </Link>
          <ul className="flex gap-12 w-full uppercase  font-medium text-xl ">
         <Link to="/">   <li className="cursor-pointer hover:text-red-600">Home</li> </Link>
            <li className="cursor-pointer hover:text-red-600">About</li>
        <Link to="/menu">    <li className="cursor-pointer hover:text-red-600">Menu</li> </Link>
         <Link to={"/catering"} >  <li className="cursor-pointer hover:text-red-600">Catering</li> </Link>
            <li className="cursor-pointer hover:text-red-600">Order Now</li>
            <li className="cursor-pointer hover:text-red-600">Contact</li>
          </ul>
        </div>

        {/* Navigation Links and Actions */}
        <div className="">
          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-md border hover:bg-gray-100 transition">
              Login
            </button>
            <button className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-800 transition">
              Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
