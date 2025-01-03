import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="font-poppins flex flex-col lg:gap-[3rem] gap-y-[5rem] lg:flex-row justify-center items-start max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] lg:mt-[30rem] mt-[10rem]">
      <div className="w-full">
        <img src="/about-pic.svg" alt="" />
      </div>
      <div className="w-full">
        <h1 className=" md:text-[50px] text-[30px] font-medium">
          WELCOME <span className="text-[#9e6548]">TO BYEN</span>
        </h1>
        <h2 className="font-medium text-[14px] md:w-[90%] mt-4">
          At the Black Youth Empowerment Network (BYEN), we are committed to
          uplifting and inspiring the next generation of young Black leaders,
          entrepreneurs, and creatives.
        </h2>
        <p className="text-[13px] mt-5 text-[#6C6A6A] md:w-[80%]">
          Founded with a vision rooted in empowerment and opportunity, BYEN
          serves as a catalyst for change, fostering personal growth,
          leadership, and community impact.
        </p>


        <div className="flex flex-col md:flex-row md:items-center items-start gap-y-10 gap-x-10 mt-[4rem]">
          <div className="flex flex-row items-center gap-3">
            <img
              src="/Shun 1.svg"
              alt=""
              className="h-[80px] w-[80px] rounded-full border-[3px] border-[#9e6548]"
            />
            <span className="flex flex-col gap-y-1">
              <h1 className="font-semibold text-[17px]">Jay'Shun Mathews</h1>
              <p className="text-[#6C6A6A] text-[12px]">
                Founder & Executive Director
              </p>
            </span>
          </div>

          <button className=" border flex  items-center gap-2 text-[14px] text-white px-[30px] py-[10px] duration-300 bg-[#985B3C] hover:bg-[#9e6548]">
            <p>Read More</p>
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
