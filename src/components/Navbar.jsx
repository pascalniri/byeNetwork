import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div className=" top-5 fixed w-full z-10 mx-auto px-4 md:px-0">
      <div className="font-poppins px-4 mx-auto md:w-[80%] backdrop-blur-lg bg-black bg-opacity-30 rounded-2xl">
        <div className=" font-light flex flex-row justify-between items-center py-[20px] text-white font-poppins">
            <Link to ="/">
            <img src={logo} alt="logo" className="w-[100px] h-full" />
            </Link>
          <ul className="font-poppins hidden lg:flex lg:flex-row md:gap-[50px]">
            <li className="hover:text-[#FFA700]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#FFA700]">
              <Link to="https://black-youth-empowerment-network.mn.co/landing?space_id=13081273"
               target="_blank"
                rel="noopener noreferrer"
              >
                Membership
              </Link>
            </li>
            <li className="hover:text-[#FFA700]">
              <Link to="#">Resources</Link>
            </li>
            <li className="hover:text-[#FFA700]">
              <Link to="/projects">Projects</Link>
              
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
        {/* <hr className="border-t border-gray-300" /> */}
      </div>
      {showNav && (
        <div className="lg:hidden z-10 fixed h-[400px] mt-[100px] py-[20px] inset-0 backdrop-blur-lg bg-black bg-opacity-30 mx-4 md:mx-auto rounded-2xl md:w-[80%] text-white flex items-center justify-center text-center px-4 ">
          <ul className="font-poppins flex flex-col gap-7">
            <li className="hover:text-[#FFA700]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#FFA700]">
              <Link
                to="https://black-youth-empowerment-network.mn.co/landing?space_id=13081273"
                target="_blank"
                rel="noopener noreferrer"
              >
                Membership
              </Link>
            </li>
            <li className="hover:text-[#FFA700]">
              <Link to="#">Resources</Link>
            </li>
            <li className="hover:text-[#FFA700]">
              <Link to="/projects">Projects</Link>
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
