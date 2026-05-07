import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../constant/nav";
import Footer from "../constant/footer";
import { useCart } from "../constant/CartContext";
import { supabase } from "../supabase";

export default function MenuCategory({ category }) {
  const { addToCart } = useCart();

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category);

    if (!error) {
      setMenuItems(data);
    }

    setLoading(false);
  };

  return (
    <>
      <Nav />

      <section className="bg-gray-50 py-16 px-6 md:px-12">
        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading menu...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {menuItems.map((item) => (
              <Link
                to={item.link || ""}
                key={item.id}
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
                    ₦{Number(item.price).toLocaleString()}
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
        )}
      </section>

      <Footer />
    </>
  );
}