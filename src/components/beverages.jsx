import React from "react";
import { Link } from "react-router-dom";
import Nav from "../constant/nav";
import Footer from "../constant/footer";
import { useCart } from "../constant/CartContext";

export default function Bevarage() {
  const { addToCart } = useCart();
  const menuItems = [
    {
      id: "bev-1",
      name: "Cappuccino",
      image: "/images/beverages/beverae (1).jpg",
      link: "",
      price: 8500,
      description: "A smooth blend of espresso, steamed milk, and rich foam.",
      button: "Add to Cart",
    },
    {
      id: "bev-2",
      name: "Chocolate Milkshake",
      image: "/images/beverages/beverae (2).jpg",
      link: "",
      price: 8500,
      description:
        "Thick and creamy chocolate shake topped with whipped cream.",
      button: "Add to Cart",
    },
    {
      id: "bev-3",
      name: "Fanta Orange",
      image: "/images/beverages/beverae (3).jpg",
      link: "",
      price: 3500,
      description: "Chilled citrus soda with a refreshing orange taste.",
      button: "Add to Cart",
    },
    {
      id: "bev-4",
      name: "Strawberry Smoothie",
      image: "/images/beverages/beverae (4).jpg",
      link: "",
      price: 9000,
      description:
        "Fresh strawberries blended into a naturally sweet smoothie.",
      button: "Add to Cart",
    },
    {
      id: "bev-5",
      name: "Iced Latte",
      image: "/images/beverages/beverae (5).jpg",
      link: "",
      price: 7500,
      description: "Cold espresso mixed with milk and served over ice.",
      button: "Add to Cart",
    },
    {
      id: "bev-6",
      name: "Vanilla Milkshake",
      image: "/images/beverages/beverae (6).jpg",
      link: "",
      price: 8000,
      description: "Classic vanilla shake with a smooth and creamy texture.",
      button: "Add to Cart",
    },
    {
      id: "bev-7",
      name: "Energy Drink",
      image: "/images/beverages/beverae (7).jpg",
      link: "",
      price: 5000,
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
                    ₦{item.price.toLocaleString()}
                </p>

                {/* underline */}
                <div className="h-[2px] w-0 bg-red-600 mx-auto mt-2 rounded-full transition-all duration-300 group-hover:w-12"></div>

                {/* Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(item);
                  }}
                  className="mt-5 bg-red-600 text-white text-sm font-semibold py-2 rounded-md hover:bg-red-400 active:bg-red-800 transition duration-300"
                >
                  Add to Cart
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
