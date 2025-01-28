import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="font-montserrat flex flex-col lg:gap-[3rem] gap-y-[5rem] lg:flex-row justify-center items-start max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] lg:mt-[8rem] mt-[3rem]">
      <div className="md:w-[70%] w-full">
        <img src="/aboutImg.jpg" alt="" className="rounded-[20px]" />
      </div>
      <div className="w-full">
        <h1 className="lg:text-[44px] lg:leading-[44px] font-bold text-[30px] leading-[35px]">
          WELCOME <span className="text-[#693e2d]">TO BYEN</span>
        </h1>
        <h2 className="font-medium text-[20px] leading-[28px] mt-4">
          At the Black Youth Empowerment Network (BYEN), we are committed to
          uplifting and inspiring the next generation of young Black leaders,
          entrepreneurs, and creatives.
        </h2>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A]">
          Founded with a vision rooted in empowerment and opportunity, BYEN
          serves as a catalyst for change, fostering personal growth,
          leadership, and community impact.
        </p>

        <div className="flex flex-col md:flex-row md:items-center items-start gap-y-10 gap-x-10 mt-[4rem]">
          <div className="flex flex-row items-center gap-3">
            <img
              src="/Shun 1.svg"
              alt=""
              className="h-[70px] w-[70px] rounded-full border-[3px] border-[#9e6548]"
            />
            <span className="flex flex-col gap-y-1">
              <h1 className="font-medium text-[24px]">Jay'Shun Mathews</h1>
              <p className="text-[#6C6A6A] text-[16px]">
                Founder & Executive Director
              </p>
            </span>
          </div>

          <button className="flex flex-row text-[14px] items-center text-white gap-2 bg-[#693e2d] rounded-full py-4 px-10 hover:bg-[#985b3c] duration-200">
            <p>READ MORE</p>
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
