import React from "react";

export default function Footer() {
  return (
    <footer className=" text-black py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-black font-semibold mb-4 uppercase tracking-wide">
              About Red Lobster
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-600 cursor-pointer">
                Seafood with Standards
              </li>
              <li className="hover:text-red-600 cursor-pointer">FAQ</li>
              <li className="hover:text-red-600 cursor-pointer">
                Allergy Guide
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Nutritional Information
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Red Lobster at Home
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-black font-semibold mb-4 uppercase tracking-wide">
              Careers
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-600 cursor-pointer">
                Work With Us
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Hourly Opportunities
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Management Opportunities
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Corporate Opportunities
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-black font-semibold mb-4 uppercase tracking-wide">
              Company Info
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-600 cursor-pointer">
                News & Press
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                US Locations
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Franchise & International Locations
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Become a Supplier
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-black font-semibold mb-4 uppercase tracking-wide">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
              <li className="hover:text-red-600 cursor-pointer">
                Support Center
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-black font-semibold mb-4 uppercase tracking-wide">
              Let’s Be Friends
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-black p-2 rounded-full hover:bg-red-500 transition"
                aria-label="Facebook"
              >
                {/* Facebook Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.63 9.87v-6.99H7.9V12h2.47V9.8c0-2.44 1.45-3.79 3.67-3.79 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.57.74-1.57 1.5V12h2.67l-.43 2.88h-2.24v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              <a
                href="#"
                className="bg-black p-2 rounded-full hover:bg-red-500 transition"
                aria-label="Instagram"
              >
                {/* Instagram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm4.25 5.5A4.75 4.75 0 1 1 7.25 12 4.76 4.76 0 0 1 12 7.5zm5.5-.88a1.12 1.12 0 1 1-1.12-1.12A1.12 1.12 0 0 1 17.5 6.62zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" />
                </svg>
              </a>

              <a
                href="#"
                className="bg-black p-2 rounded-full hover:bg-red-500 transition"
                aria-label="Twitter"
              >
                {/* Twitter/X Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.9 3H21l-6.5 7.4L22 21h-6.9l-4.3-5.4L5.7 21H3.6l6.9-7.9L2 3h7l3.8 4.8L18.9 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Fluid Meals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}