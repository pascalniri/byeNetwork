import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { div, p } from "framer-motion/client";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div>
      <div className="font-poppins mx-auto px-4 md:w-[80%] lg:w-[80%]">
        <div className=" font-light flex flex-row justify-between items-center py-[20px] text-white font-poppins">
          <div>
            <p>LOGO</p>
          </div>
          <ul className="font-poppins hidden lg:flex lg:flex-row md:gap-[50px]">
            <li className="hover:text-[#FFA700]">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#FFA700]">
              <a href="https://black-youth-empowerment-network.mn.co/landing?space_id=13081273"
               target="_blank"
                rel="noopener noreferrer"
              >
                Membership
              </a>
            </li>
            <li className="hover:text-[#FFA700]">
              <a href="#">Resources</a>
            </li>
            <li className="hover:text-[#FFA700]">
              <a href="#">Projects</a>
            </li>
          </ul>
          <motion.button
            className="hidden lg:flex font-light bg-yellow-500 flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[8px] rounded-full"
            initial="hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-black">SHOP</p>
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
        <hr className="border-t border-gray-300" />
      </div>
      {showNav && (
        <div className="lg:hidden z-10 fixed h-1/2 mt-[50px] py-[20px] inset-0 bg-black text-white flex items-center justify-center text-center mx-auto px-4 ">
          <ul className="font-poppins flex flex-col gap-7">
            <li className="hover:text-[#FFA700]">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#FFA700]">
              <a
                href="https://black-youth-empowerment-network.mn.co/landing?space_id=13081273"
                target="_blank"
                rel="noopener noreferrer"
              >
                Membership
              </a>
            </li>
            <li className="hover:text-[#FFA700]">
              <a href="#">Resources</a>
            </li>
            <li className="hover:text-[#FFA700]">
              <a href="#">Projects</a>
            </li>
            <motion.button
              className="font-light flex bg-[#FFA700] flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[8px] rounded-full"
              initial="hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-black">SHOP</p>
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
