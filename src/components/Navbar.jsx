import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="mx-auto px-4 md:w-[80%] lg:w-[80%]">
      <div className=" font-light flex flex-row justify-between items-center py-[20px] text-white font-poppins">
        <div>
          <p>LOGO</p>
        </div>
        <ul className="hidden lg:flex lg:flex-row md:gap-[50px]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Membership</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
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
        <FaBarsStaggered className="text-[25px] cursor-pointer flex lg:hidden " />
      </div>
      <hr className="border-t border-gray-300" />
    </div>
  );
};

export default Navbar;
