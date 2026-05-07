import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../constant/CartContext";
import { useAuth } from "../auth/authContext";
import { supabase } from "../supabase";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Catering", path: "/catering" },
  { name: "Contact", path: "/" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cartItems } = useCart();
  const { user } = useAuth();

  const navigate = useNavigate();

  // ✅ REAL-TIME CART COUNT
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ✅ LOGOUT FUNCTION
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    setIsOpen(false);
  };

  const linkBase =
    "text-xs font-medium tracking-widest uppercase transition";

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/ella.jpg"
              alt="Ella"
              className="w-10 h-10 rounded-full object-cover border border-red-200"
            />

            <span className="font-serif text-2xl text-neutral-800">
              Ella<span className="text-red-600">.</span>
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? "text-red-600"
                        : "text-neutral-500 hover:text-red-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">

            {/* ✅ SHOW LOGIN ONLY WHEN LOGGED OUT */}
            {!user ? (
              <Link
                to="/login"
                className="text-xs uppercase border px-4 py-2 text-neutral-500 hover:text-red-600 hover:border-red-400"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="text-xs uppercase border px-4 py-2 text-neutral-500 hover:text-red-600 hover:border-red-400"
              >
                Logout
              </button>
            )}

            {/* CART */}
            <Link
              to="/cart"
              className="relative flex items-center gap-2 bg-red-600 text-white px-4 py-2 text-xs uppercase"
            >
              <ShoppingCart size={14} />
              Cart

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-red-600 text-[10px] font-bold px-1.5 py-[1px] rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* MOBILE RIGHT SIDE */}
          <div className="lg:hidden flex items-center gap-3">

            {/* MOBILE CART */}
            <Link
              to="/cart"
              className="relative text-neutral-600 hover:text-red-600"
            >
              <ShoppingCart size={24} />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-[2px] rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* HAMBURGER */}
            <button onClick={() => setIsOpen(true)}>
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-[110] p-7 flex flex-col transition-all duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <span className="text-2xl font-serif">
            Ella<span className="text-red-600">.</span>
          </span>

          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* LINKS */}
        <ul className="flex flex-col gap-4 flex-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} block py-3 border-b ${
                    isActive
                      ? "text-red-600"
                      : "text-neutral-500 hover:text-red-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* FOOTER */}
        <div className="flex flex-col gap-3">

          {/* ✅ LOGIN / LOGOUT */}
          {!user ? (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="border py-3 text-center text-xs uppercase"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="border py-3 text-center text-xs uppercase"
            >
              Logout
            </button>
          )}

          {/* CART */}
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="bg-red-600 text-white py-3 text-center text-xs uppercase flex justify-center gap-2"
          >
            <ShoppingCart size={16} />
            View Cart ({totalItems})
          </Link>
        </div>
      </div>
    </>
  );
}