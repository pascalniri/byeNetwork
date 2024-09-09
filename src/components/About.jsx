import React from "react";
import aboutPic from "../assets/aboutPic.jpeg";
import { FaArrowRight } from "react-icons/fa6";
const About = () => {
  return (
    <div className="mx-auto px-4 mt-[60px] font-poppins md:px-0 md:w-[80%] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center md:w-[80%]">
        <h1 className="text-[40px] font-light">
          <span className="font-bold">Our</span> Mission
        </h1>
        <p className="mt-[30px] text-[#474747]">
          The Black Youth Empowerment Network (BYEN) is dedicated to empowering
          young black individuals by providing diverse opportunities for growth
          and fostering a supportive community where members can both receive
          and offer assistance, ensuring access to resources for all to achieve
          their aspirations.
        </p>
      </div>

      <div className="mt-[150px] flex flex-col lg:flex-row gap-[20px]">
        <div className="w-full">
          <h1 className="text-[35px] font-light">
            <span className="font-bold">Empower Your</span> Legacy Memorial
            Scholarship
          </h1>
          <p className="mt-[30px] text-[#474747] lg:pr-[60px]">
            The Empower Your Legacy Scholarship, initiated by the Black Youth
            Empowerment Network, serves as a tribute in memory of Adaisha L.
            Turner, beloved cousin of our organization's founders. This
            scholarship is committed to offering crucial financial assistance to
            college students, enhancing their access to essential resources for
            a more empowered college journey, thereby continuing Adaisha's
            lasting impact.
          </p>

          <div className="grid grid-cols-2 mt-[40px] gap-[40px]">
            <span className="font-light md:text-[25px] ">
              <span className="font-bold text-[30px] md:text-[50px]">00</span>
              Days
            </span>
            <span className="font-light md:text-[25px]">
              <span className="font-bold text-[30px] md:text-[50px] ">00</span>
              Hours
            </span>
            <span className="font-light md:text-[25px]">
              <span className="font-bold text-[30px] md:text-[50px] ">00</span>
              Minutes
            </span>
            <span className="font-light md:text-[25px]">
              <span className="font-bold text-[30px] md:text-[50px] ">00</span>
              Seconds
            </span>
          </div>

          <button className="mt-[80px] font-light bg-black flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[10px] rounded-full">
            <p className="text-white">ARE YOU INTERESTED !</p>
            <span className="bg-white px-[15px] py-[15px] rounded-full">
              <FaArrowRight />
            </span>
          </button>
        </div>

       <div className="w-full">
       <img
          src={aboutPic}
          alt="aboutPic"
          className="rounded-[20px] shadow-md w-full"
        />
       </div>
      </div>
    </div>
  );
};

export default About;
