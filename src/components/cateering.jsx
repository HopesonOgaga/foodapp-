import React from "react";
import { Link } from "react-router-dom";
import Footer from "../constant/footer";
import Nav from "../constant/nav";

const catering_information = [
  {
    name: "Level Up Your Next Event with Our Catering Options",
    description:
      "From claw-some seafood favorites to crowd-pleasing sides and desserts, our catering menu is designed to make every gathering delicious. Whether you’re hosting an event for the office, at home, or anywhere in between, we'll take care of the cooking so you can focus on enjoying the occasion. Available for Pick-up or delivery!",
    notice:
      "Not available in all locations. Contact ezCater with questions related to your order.",
    link: "/menu",
    button: "Order Now",
  },
  {
    name: "Host an Unforgettable Event with Group Dining",
    description:
      "Ready to truly treat yourself and your guests to a top notch event with all your seafood favorites? Check-out our NEW group dining menus available only when you book your party of 12+ guests. Whether it’s a corporate gathering or a family get-together, Red Lobster offers a range of chef-curated, multi-course menus with pricing designed to fit every budget.",
    notice:
      "Not available in all locations. Contact ezCater with questions related to your order.",
    link: "/contact",
    button: "Contact Us",
  },
];

export default function Catering() {
  return (
    <section className="font-roboto bg-gray-50">
      <Nav />

      {/* HERO */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] bg-[url('/images/chicken.jpg')] bg-cover bg-center bg-no-repeat flex items-center">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* Text */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl uppercase text-white font-bold tracking-wide leading-tight">
            Elevate your group's{" "}
            <span className="text-red-600">celebrations</span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-14 space-y-10">
        {catering_information.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 md:p-8 space-y-4 hover:shadow-xl transition duration-300"
          >
            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              {item.name}
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>

            {/* Notice */}
            <p className="text-xs sm:text-sm text-red-500 italic">
              {item.notice}
            </p>

            {/* CTA */}
            <Link
              to={item.link}
              className="inline-block mt-4 px-6 py-3 text-sm sm:text-base bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 uppercase font-semibold"
            >
              {item.button}
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </section>
  );
}