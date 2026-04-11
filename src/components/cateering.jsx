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
    button: "order now",
  },
  {
    name: "Host an Unforgettable Event with Group Dining",
    description:
      "Ready to truly treat yourself and your guests to a top notch event with all your seafood favorites? Check-out our NEW group dining menus available only when you book your party of 12+ guests. Whether it’s a corporate gathering or a family get-together, Red Lobster offers a range of chef-curated, multi-course menus with pricing designed to fit every budget. All group dining menus include unlimited fountain drinks, iced tea, and our freshly baked Cheddar Bay Biscuits®. Let us help you plan your next event!",
    notice:
      "Not available in all locations. Contact ezCater with questions related to your order.",
    link: "/contact",
    button: "contact use",
  },
];

export default function Catering() {
  return (
    <section className="font-roboto">
      <Nav />
      <section className="relative h-[45vh] w-full bg-[url('/images/landingimages/chicken.jpg')] bg-cover bg-cente bg-repeat-no-repeat overflow-hidden  ">
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* Text */}
        <p className="relative z-10 text-8xl uppercase text-white font-bold p-6 tracking-wide ">
          elevate your group's <span className="text-red-600">celebrations</span>
        </p>
      </section>
      {/* Catering Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {catering_information.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-8 space-y-4"
          >
            {/* Main Header */}
            <p className="lg:text-4xl text-2xl capitalize font-bold tracking-wide text-slate-900">
              {item.name}
            </p>

            {/* Description */}
            <p className="text-slate-600 text-base ">{item.description}</p>

            {/* Notice */}
            <p className="text-sm text-red-500 italic">{item.notice}</p>

            {/* Call to Action */}
            <Link
              to={item.link}
              className="inline-block mt-4 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 uppercase"
            >
              {item.button}
            </Link>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
