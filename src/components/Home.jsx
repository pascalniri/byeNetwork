import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-[#000000]">
      <Navbar />
      <div className="flex flex-col justify-center py-[100px] mx-auto px-4 sm:px-0 sm:w-[80%] lg:w-[80%]  text-white font-poppins lg:min-h-[100vh] ">
        <div className="flex flex-col justify-center items-center text-center md:text-left md:items-start w-full md:w-2/3">
          <h1 className="font-thin text-[45px] md:text-[60px]">
            <span className="font-medium">Black</span> Youth Empowerment{" "}
            <span className="font-medium">Network</span>
          </h1>
          <p className="font-light mt-[30px] md:mt-auto">
            Platform dedicated to inspiring and empowering young Black
            individuals through mentorship, skills development, and community
            support. We aim to foster leadership and opportunities for growth.
          </p>
          <button className="mt-[80px] font-normal bg-[#FFA700] flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[10px] rounded-full">
            <p className="text-black">APPLY NOW</p>
            <span className="bg-black px-[15px] py-[15px] rounded-full">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
