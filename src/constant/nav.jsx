import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Catering", path: "/catering" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyles = ({ isActive }) =>
    `cursor-pointer transition-colors duration-300 ${
      isActive ? "text-red-600" : "hover:text-red-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/ella.jpg"
              alt="Ella Restaurant Logo"
              className="w-28 h-14 object-cover rounded-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10 uppercase font-medium text-sm tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className={linkStyles}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login">
              <button className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-300">
                Login
              </button>
            </Link>
             <Link to="/cart">
              <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300">
                <ShoppingCart size={18} />
                Cart
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="lg:hidden text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-6 uppercase font-medium text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={linkStyles}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Actions */}
          <div className="mt-auto flex flex-col gap-4 pt-10">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-3 rounded-md border border-gray-300 hover:bg-gray-100 transition">
                Login
              </button>
            </Link>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-red-500 text-white hover:bg-red-600 transition">
                <ShoppingCart size={18} />
                Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}