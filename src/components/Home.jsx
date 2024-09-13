import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./Navbar";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="overflow-hidden bg-[#000000]">
      <div className="flex flex-col justify-center py-[100px] mx-auto px-4 sm:px-0 sm:w-[80%] lg:w-[80%] text-white font-poppins lg:min-h-[100vh] ">
        <div className="flex flex-col justify-center items-center py-[100px] text-center md:text-left md:items-start w-full md:w-2/3">
          <h1 className="font-thin text-[45px] md:text-[60px]">
            <span className="font-medium">Black</span> Youth Empowerment{" "}
            <span className="font-medium">Network</span>
          </h1>
          <p className="font-light mt-[30px] md:mt-auto">
            Platform dedicated to inspiring and empowering young Black
            individuals through mentorship, skills development, and community
            support. We aim to foster leadership and opportunities for growth.
          </p>

          <a
            href="https://form.jotform.com/240665208958062"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <motion.button
            initial="hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="mt-[80px] font-normal bg-[#FFA700] flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[10px] rounded-full">
              <p className="text-black">APPLY NOW</p>
              <span className="bg-black px-[15px] py-[15px] rounded-full">
                <FaArrowRight />
              </span>
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
