import React, { useState } from "react";
import { FaBarsStaggered, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation
import byen_logo from "../assets/byen_logo.png";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { pathname } = useLocation(); // Get the current path

  const toggleMenu = () => {
    setShowNav((prev) => !prev);
  };

  // Helper function to check if the link is active
  const isActive = (href) => pathname === href;

  return (
    <div className="font-outfit top-5 fixed w-full z-10 mx-auto px-4">
      <div className="px-4 mx-auto md:max-w-2xl lg:max-w-6xl backdrop-blur-lg bg-black bg-opacity-60 rounded-2xl">
        <div className="font-light flex flex-row justify-between items-center py-[10px] text-white">
          <a href="/">
            <img src={byen_logo} alt="logo" className="w-[100px]" />
          </a>
          <ul className="hidden lg:flex lg:flex-row md:gap-[50px]">
            {[
              { href: "/", label: "Home" },
              { href: "/membership", label: "Membership" },
              { href: "/team", label: "Our Team" },
              { href: "/resources", label: "Resources" },
              { href: "/projects", label: "Projects" },
            ].map((link) => (
              <li
                key={link.href}
                className={`hover:scale-105 transition ${
                  isActive(link.href) ? "text-white underline font-semibold" : ""
                }`}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <motion.button
            className="hidden lg:flex font-light bg-white flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[8px] rounded-full"
            initial="hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-black">Shop</p>
            <span className="bg-black px-[10px] py-[10px] rounded-full">
              <FaArrowRight />
            </span>
          </motion.button>

          {/* Small devices bar for toggling the links */}
          <button className="flex lg:hidden" onClick={toggleMenu}>
            {showNav ? (
              <FaTimes className="text-[25px] cursor-pointer" />
            ) : (
              <FaBarsStaggered className="text-[25px] cursor-pointer" />
            )}
          </button>
        </div>
      </div>
      {showNav && (
        <div className="lg:hidden z-10 fixed h-[400px] mt-[120px] py-[20px] inset-0 backdrop-blur-lg bg-black bg-opacity-60 mx-4 md:mx-auto rounded-2xl md:w-[80%] text-white flex items-center justify-center text-center px-4">
          <ul className="flex flex-col gap-7">
            {[
              { href: "/", label: "Home" },
              { href: "/membership", label: "Membership" },
              { href: "/team", label: "Our Team" },
              { href: "/resources", label: "Resources" },
              { href: "/projects", label: "Projects" },
            ].map((link) => (
              <li
                key={link.href}
                className={`hover:scale-105 transition ${
                  isActive(link.href) ? "text-white underline font-semibold" : ""
                }`}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <motion.button
              className="font-light flex bg-white flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[8px] rounded-full"
              initial="hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-black">Shop</p>
              <span className="bg-black px-[10px] py-[10px] rounded-full">
                <FaArrowRight />
              </span>
            </motion.button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
