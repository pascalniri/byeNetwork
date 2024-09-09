import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";

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
        <button className="hidden lg:flex lg:font-normal lg:text-black lg:bg-[#FFA700] lg:px-[30px] lg:py-[10px] lg:rounded-full">
          SHOP
        </button>

        {/* Small devices bar for toggling the links */}
        <FaBarsStaggered className="text-[25px] cursor-pointer flex lg:hidden " />
      </div>
      <hr className="border-t border-gray-300" />
    </div>
  );
};

export default Navbar;
