import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import grouppic from "../assets/grouppic.svg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${grouppic})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width:'100%'
      }}
      className="font-outfit relative overflow-hidden flex flex-col justify-center items-center text-center min-h-[100vh] mx-auto px-4 xl:w-[40%]"
    >
      {/* Content */}
      <h1 className="text-white font-thin text-[60px] md:text-[80px]">
        <span className="font-medium">Black</span> Youth <br />
        <span className="font-medium">
          <Typewriter
            words={["Empowerment", "Network"]}
            loop={0} // Set to 0 to loop indefinitely
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000} // Delay between words
          />
        </span>
      </h1>

      <a
        href="https://form.jotform.com/240665208958062"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          initial="hidden"
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="mt-[80px] font-normal bg-white flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[10px] rounded-full"
        >
          <p className="text-black">APPLY NOW</p>
          <span className="bg-black text-white px-[15px] py-[15px] rounded-full">
            <FaArrowRight />
          </span>
        </motion.button>
      </a>
    </div>
  );
};

export default Home;
