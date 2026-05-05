import React from "react";
import { Link } from "react-router-dom";
import Nav from "../constant/nav";
import Footer from "../constant/footer";

export default function Desert() {
  const menuItems = [
    {
      name: "Cappuccino",
      image: "/images/desert/dessert (1).jpg",
      link: "",
      price: "₦8,500",
      description: "A smooth blend of espresso, steamed milk, and rich foam.",
      button: "Add to Cart",
    },
    {
      name: "Chocolate Milkshake",
      image: "/images/desert/dessert (2).jpg",
      link: "",
      price: "₦8,500",
      description:
        "Thick and creamy chocolate shake topped with whipped cream.",
      button: "Add to Cart",
    },
    {
      name: "Fanta Orange",
      image: "/images/desert/dessert (3).jpg",
      link: "",
      price: "₦3,500",
      description: "Chilled citrus soda with a refreshing orange taste.",
      button: "Add to Cart",
    },
    {
      name: "Strawberry Smoothie",
      image: "/images/desert/dessert (4).jpg",
      link: "",
      price: "₦9,000",
      description:
        "Fresh strawberries blended into a naturally sweet smoothie.",
      button: "Add to Cart",
    },
    {
      name: "Iced Latte",
      image: "/images/desert/dessert (5).jpg",
      link: "",
      price: "₦7,500",
      description: "Cold espresso mixed with milk and served over ice.",
      button: "Add to Cart",
    },
    {
      name: "Vanilla Milkshake",
      image: "/images/desert/dessert (6).jpg",
      link: "",
      price: "₦8,000",
      description: "Classic vanilla shake with a smooth and creamy texture.",
      button: "Add to Cart",
    },
    {
      name: "Energy Drink",
      image: "/images/desert/dessert (7).jpg",
      link: "",
      price: "₦5,000",
      description: "A refreshing boost to keep you energized.",
      button: "Add to Cart",
    },
  ];

  return (
    <>
      <Nav />

      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={
                    item.image ||
                    "https://via.placeholder.com/400x300?text=Food+Coming+Soon"
                  }
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col text-center flex-grow">
                <h3 className="font-bold text-lg md:text-xl text-gray-800 group-hover:text-red-600 transition">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>

                <p className="mt-3 font-semibold text-red-600 text-lg">
                  {item.price}
                </p>

                {/* underline */}
                <div className="h-[2px] w-0 bg-red-600 mx-auto mt-2 rounded-full transition-all duration-300 group-hover:w-12"></div>

                {/* Button */}
                <button className="mt-5 bg-red-600 text-white text-sm font-semibold py-2 rounded-md hover:bg-black transition duration-300">
                  {item.button}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
