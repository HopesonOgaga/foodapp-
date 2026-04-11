import React from "react";
import Nav from "../constant/nav";
import Footer from "../constant/footer"

export default function Index() {
  return (
    <main className="font-roboto max-h-max bg-gray-50 pb-10">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden group">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/video/foodvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/chicken.jpg"
        />
        {/* Smooth Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-700"></div>

        {/* Hero Content (Grouped text and button together) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-8">
          <h1 className="text-5xl md:text-7xl font-bold italic tracking-wide text-white drop-shadow-2xl">
            Fluid <span className="text-red-500">Meals</span>
          </h1>
          <button className="px-10 py-4 uppercase tracking-widest rounded-md shadow-[0_4px_14px_0_rgba(220,38,38,0.5)] text-white bg-red-600 hover:bg-red-500 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] transition-all duration-300 font-bold active:scale-95 cursor-pointer">
            See Menu
          </button>
        </div>
      </section>

      {/* SECTION 2: PROMO */}
      <section className="w-full mt-12 px-6 md:px-12">
        <div className="relative h-[50vh] md:h-[60vh] w-full bg-[url('/images/landingimages/pizza.jpg')] bg-cover bg-center rounded-sm  overflow-hidden shadow-2xl group flex items-center justify-center">
          {/* Dark Overlay that deepens on hover */}
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-8 px-6">
            <p className="w-full md:w-3/4 text-3xl md:text-5xl font-bold capitalize text-white tracking-wide leading-tight drop-shadow-lg">
              The one and only <br className="hidden md:block" />
              <span className="uppercase text-red-400">
                {" "}
                place to satisfy your taste buds
              </span>
            </p>

            <button className="px-10 py-3.5 uppercase rounded-md bg-white text-red-600 font-bold shadow-[0_4px_14px_0_rgba(255,255,255,0.3)] hover:bg-gray-100 hover:scale-105 transition-all duration-300 active:scale-95">
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPLIT IMAGES */}
      {/* Changed to flex-col on mobile, flex-row on desktop with a gap */}
      <section className="w-full mt-12 px-6 md:px-12 flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left Image */}
        <div className="h-[50vh] md:h-[60vh] w-full md:w-1/2 bg-[url('/images/landingimages/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')] bg-cover bg-center bg-no-repeat relative flex flex-col justify-between p-10 rounded-sm shadow-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 transition-opacity duration-500"></div>

          <div className="relative z-10 transform transition-transform duration-500 group-hover:translate-x-2">
            <p className="uppercase text-white text-4xl lg:text-5xl font-bold drop-shadow-lg tracking-tight">
              Daily <span className="text-red-500">Deals</span>
            </p>
          </div>

          <div className="relative z-10 flex justify-start md:justify-center w-full">
            <button className="px-8 py-3.5 uppercase tracking-widest text-sm rounded-md bg-white text-red-600 font-bold shadow-lg hover:bg-red-500 hover:-translate-y-1 transition-all duration-300 active:scale-95">
              order now 
            </button>
          </div>
        </div>
        {/* Right Image (Daily Deals) */}
        <div className="h-[50vh] md:h-[60vh] w-full md:w-1/2 bg-[url('/images/landingimages/grilled-chicken-thighs-pita-bread-served-with-fresh-vegetables.jpg')] bg-cover bg-center bg-no-repeat relative flex flex-col justify-between p-10 rounded-sm shadow-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 transition-opacity duration-500"></div>

          <div className="relative z-10 transform transition-transform duration-500 group-hover:translate-x-2">
            <p className="uppercase text-white text-4xl lg:text-5xl font-bold drop-shadow-lg tracking-tight">
              happy <span className="text-red-500">hours</span>
            </p>
          </div>

          <div className="relative z-10 flex justify-start md:justify-center w-full">
            <button className="px-8 py-3.5 uppercase tracking-widest text-sm rounded-md bg-red-600 text-white font-bold shadow-lg hover:bg-red-500 hover:-translate-y-1 transition-all duration-300 active:scale-95">
              Show Menu
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
