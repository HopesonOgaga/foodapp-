import React from "react";
import { Link } from "react-router-dom";
import Nav from "../constant/nav";
import Footer from "../constant/footer";

export default function About() {
  return (
    <main className="font-roboto bg-white text-slate-800">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative h-[55vh] w-full bg-[url('/images/landingimages/anna.jpg')] bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6 md:px-24 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white capitalize leading-tight">
            About <span className="text-red-500">Fluid Meals</span>
          </h1>
          <div className="h-2 w-24 bg-red-600 my-6"></div>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
            We are a culinary collective dedicated to high-quality ingredients
            and exceptional service. Our goal is to make every meal a standard
            for excellence.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="border-l-8 border-red-600 pl-8 md:pl-12">
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tight text-slate-900">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded on the principle of "Quality over Everything," Fluid Meals
              started as a small catering initiative. We believed that food
              delivery shouldn't compromise the integrity of a chef-prepared
              meal.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we serve hundreds of clients daily, maintaining the same
              attention to detail that we had on day one. Every recipe is tested
              until it is perfect.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/landingimages/pizza.jpg"
              alt="Our Story"
              className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20 px-6 md:px-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center uppercase tracking-widest">
            The Fluid <span className="text-red-600">Standard</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Quality",
                desc: "Only the freshest local ingredients.",
              },
              {
                title: "Community",
                desc: "Supporting local farmers and vendors.",
              },
              {
                title: "Innovation",
                desc: "Modern twists on classic comfort food.",
              },
              {
                title: "Integrity",
                desc: "Honest pricing and clean cooking.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm text-center"
              >
                {/* Decorative Element Instead of Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-lg">
                    {item.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/images/landingimages/grilled-chicken-thighs-pita-bread-served-with-fresh-vegetables.jpg"
              alt="Service"
              className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-black mb-8 uppercase text-slate-900">
              Why Fluid Meals?
            </h2>
            <div className="space-y-6">
              {[
                "Exceptional taste and artistic presentation",
                "Professional catering for bespoke events",
                "Reliable, timely, and contactless service",
                "Customizable menus for every dietary need",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  {/* Text-based checkmark */}
                  <span className="text-red-600 text-xl font-bold">✓</span>
                  <span className="text-gray-700 text-lg font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
            Ready to taste the difference?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Browse our menu and experience premium dining from the comfort of
            your home.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-red-600 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors"
          >
            SEE OUR MENU
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}