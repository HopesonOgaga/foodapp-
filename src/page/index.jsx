import React from "react";
import Nav from "../constant/nav";
import Footer from "../constant/footer";
import { Link } from "react-router-dom";

export default function Index() {
  const videoUrl =
    "https://res.cloudinary.com/dsiyqikl2/video/upload/f_auto,q_auto/foodvideo_logxdb.mp4";
  const posterUrl =
    "https://res.cloudinary.com/dsiyqikl2/video/upload/f_auto,q_auto,so_0/foodvideo_logxdb.jpg";

  return (
    <main className="font-roboto bg-gray-50">
      <Nav />

      {/* HERO */}
      <section className="relative w-full min-h-[70vh] md:min-h-[85vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[70vh] md:min-h-[85vh] gap-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold italic text-white drop-shadow-2xl">
            Fluid <span className="text-red-500">Meals</span>
          </h1>

          <Link to="/menu">
            <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base uppercase tracking-widest rounded-md text-white bg-red-600 hover:bg-red-500 transition-all duration-300 font-bold shadow-lg hover:-translate-y-1 active:scale-95">
              See Menu
            </button>
          </Link>
        </div>
      </section>

      {/* PROMO */}
      <section className="w-full mt-10 px-4 sm:px-6 md:px-12">
        <div className="relative min-h-[40vh] md:min-h-[60vh] w-full bg-[url('/images/landingimages/pizza.jpg')] bg-cover bg-center rounded-md overflow-hidden shadow-xl flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex flex-col items-center text-center gap-6 px-4 sm:px-6">
            <p className="text-lg sm:text-3xl md:text-5xl font-bold text-white leading-tight">
              The one and only <br className="hidden md:block" />
              <span className="uppercase text-red-400">
                place to satisfy your taste buds
              </span>
            </p>

            <button className="px-6 sm:px-8 py-3 text-sm sm:text-base uppercase rounded-md bg-white text-red-600 font-bold hover:bg-gray-100 transition-all duration-300 active:scale-95">
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="w-full mt-10 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row gap-6">
        {/* LEFT */}
        <div className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-[60vh] bg-[url('/images/landingimages/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')] bg-cover bg-center rounded-md shadow-xl overflow-hidden flex flex-col justify-between p-6 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>

          <p className="relative z-10 text-2xl sm:text-4xl lg:text-5xl text-white font-bold">
            Daily <span className="text-red-500">Deals</span>
          </p>

          <button className="relative z-10 self-start md:self-center px-6 py-3 text-sm uppercase tracking-widest rounded-md bg-white text-red-600 font-bold hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95">
            Order Now
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-[60vh] bg-[url('/images/landingimages/grilled-chicken-thighs-pita-bread-served-with-fresh-vegetables.jpg')] bg-cover bg-center rounded-md shadow-xl overflow-hidden flex flex-col justify-between p-6 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>

          <p className="relative z-10 text-2xl sm:text-4xl lg:text-5xl text-white font-bold">
            Happy <span className="text-red-500">Hours</span>
          </p>

          <button className="relative z-10 self-start md:self-center px-6 py-3 text-sm uppercase tracking-widest rounded-md bg-red-600 text-white font-bold hover:bg-red-500 transition-all duration-300 active:scale-95">
            Show Menu
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
