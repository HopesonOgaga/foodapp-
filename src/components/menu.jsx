import React from "react";
import { Link } from "react-router-dom";
import Nav from "../constant/nav";
import Footer from "../constant/footer";

export default function Menu() {
  const menuItems = [
    {
      name: "beverages",
      image: "/images/menu/Berry lemonade mocktails.jpg",
      link: "/menu/beverages",
    },
    {
      name: "dessert",
      image: "/images/landingimages/pizza.jpg", // Added a fallback placeholder
      link: "/menu/dessert",
    },
    {
      name: "family meals",
      image: "/images/menu/jollofe.jpg",
      link: "/menu/family-meals",
    },
    {
      name: "kids meals",
      image: "/images/menu/bite.jpg",
      link: "/menu/kids-meals",
    },
  ];

  return (
    <>
    <Nav></Nav>
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {menuItems.map((item, index) => (
          <Link 
            to={item.link} 
            key={index}
            className="group relative bg-white rounded-md shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={item.image || "https://via.placeholder.com/400x300?text=Food+Coming+Soon"}
                alt={item.name}
              />
              {/* Subtle Overlay on hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
            </div>

            {/* Text Content */}
            <div className="p-8 flex flex-col items-center text-center">
              <h3 className="font-extrabold uppercase text-lg md:text-xl tracking-widest text-gray-800 transition-colors duration-300 group-hover:text-red-600">
                {item.name}
              </h3>
              
              {/* Animated Underline */}
              <div className="h-1 w-0 bg-red-600 mt-2 rounded-full transition-all duration-300 group-hover:w-16"></div>
              
              <span className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">
                View Details
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>\
    <Footer></Footer>
    </>
  );

}