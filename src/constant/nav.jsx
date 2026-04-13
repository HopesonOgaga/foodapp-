import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Catering", path: "/catering" },
  { name: "Contact", path: "/contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const desktopLink = ({ isActive }) =>
    `text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
      isActive ? "text-red-600" : "text-neutral-500 hover:text-red-600"
    }`;

  const mobileLink = ({ isActive }) =>
    `block py-4 text-xs font-medium tracking-widest uppercase border-b border-neutral-100 transition-all duration-300 ${
      isActive ? "text-red-600 pl-2" : "text-neutral-500 hover:text-red-600 hover:pl-2"
    }`;

  return (
    <>
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-neutral-200 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/ella.jpg"
              alt="Ella"
              className="w-10 h-10 rounded-full object-cover border border-red-200"
            />
            <span className="font-serif text-2xl font-light tracking-wide text-neutral-800">
              Ella<span className="text-red-600">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-10 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className={desktopLink}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-red-600 border border-neutral-300 hover:border-red-400 px-4 py-2 rounded-sm transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-sm transition-all duration-300"
            >
              <ShoppingCart size={14} />
              Cart
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="lg:hidden text-neutral-500 hover:text-red-600 transition-colors p-1"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-[110] transition-all duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white border-l border-neutral-200 z-[120] flex flex-col p-7 transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-10">
          <span className="font-serif text-2xl font-light tracking-wide text-neutral-800">
            Ella<span className="text-red-600">.</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-neutral-400 hover:text-red-600 transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="flex flex-col flex-1 list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={mobileLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Drawer Footer */}
        <div className="flex flex-col gap-3 pt-8">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="w-full text-center text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-red-600 border border-neutral-300 hover:border-red-400 py-3 rounded-sm transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 text-xs font-medium tracking-widest uppercase bg-red-600 hover:bg-red-700 text-white py-3 rounded-sm transition-all duration-300"
          >
            <ShoppingCart size={15} />
            View Cart
          </Link>
        </div>
      </div>
    </>
  );
}