import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import aboutPic from "../assets/aboutPic.jpeg";
import { FaArrowRight } from "react-icons/fa6";
import mission from "../assets/mission.svg";
import vision from "../assets/vision.svg";
const About = () => {
  return (
    <div className="mx-auto px-4 pt-[60px] font-light font-outfit md:px-0 md:w-[80%] flex flex-col justify-center items-start text-center">
      <div className="mb-[50px]">
        <h1 className="text-[30px]">
          <span className="font-bold text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
            About
          </span>
          <p className="mt-[50px]">Black Youth Empowerment Network (BYEN)</p>
        </h1>
        <p className="mt-[20px]">
          At the Black Youth Empowerment Network (BYEN), we are committed to
          uplifting and inspiring the next generation of young Black leaders,
          entrepreneurs, and creatives. Founded with a vision rooted in
          empowerment and opportunity, BYEN serves as a catalyst for change,
          fostering personal growth, leadership, and community impact.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px] gap-y-[50px]">
        <div className="bg-gray-500 px-[20px] py-[20px] text-left rounded-[10px] transform transition duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 cursor-pointer shadow-lg">
          <img src={mission} alt="Mission" className="w-[120px] mb-8" />{" "}
          <p className="">
            Our mission is to create a supportive, collaborative, and dynamic
            space where Black youth can thrive. We believe that through
            mentorship, access to resources, and a strong network, young people
            can harness their potential and rise as the change-makers of
            tomorrow. BYEN provides leadership development, campaign management
            training, and opportunities for creative expression that equip our
            members with the tools they need to succeed.
          </p>
        </div>
        <div className="bg-gray-500 px-[20px] py-[20px] text-left rounded-[10px] transform transition duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 cursor-pointer shadow-lg">
          <img src={vision} alt="Mission" className="w-[120px] mb-8" />{" "}
          <p className="">
            With our core values of excellence, collaboration, and innovation,
            we're not just building individuals—we're building a legacy. Whether
            you're a young leader looking for a community or a creative ready to
            take the next step, BYEN is here to support you on your.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
