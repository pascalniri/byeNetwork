import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white font-outfit text-center font-light py-[50px] overflow-hidden">


<footer class="flex flex-col space-y-10 justify-center m-10">

<nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <a class="hover:text-white" href="/">Home</a>
    <a class="hover:text-white" href="/membership">Membership</a>
    <a class="hover:text-white" href="/team">Our Team</a>
    <a class="hover:text-white" href="/resources">Resources</a>
    <a class="hover:text-white" href="/projects">Projects</a>
</nav>

<div class="flex justify-center space-x-5">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=blackyouthempowermentnetwork@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/email.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://www.instagram.com/blackyouthempowermentnet/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
</div>
<p class="text-center text-gray-700 font-medium">&copy; 2024 BYEN. All rights reservered.</p>
</footer>
      
      {/* <div className="mx-auto px-4 md:w-[80%] 2xl:w-[70%] flex flex-col justify-center items-center">
        <div className="mx-auto px-4 md:w-[80%] flex flex-col justify-center items-center">
        <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[40px] lg:text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-white">
        Contact Information
        </h1>
        </div>
        <span className="flex flex-col mt-[60px] text-center justify-center items-center gap-1 cursor-pointer">
          <BiSolidPhoneCall className="text-[30px]" />
          <p className="font-extralight text-[11px]">(478) 352-1080</p>
        </span>
        <div className="grid grid-col-1 justify-center items-center gap-y-[40px] md:grid-cols-2 lg:grid-cols-4 gap-x-[60px] mt-[40px]">
          <span className="flex flex-col  hover:scale-110 transition text-center justify-center items-center gap-1 cursor-pointer">
            <MdEmail className="text-[30px]" />
            <p className="font-extralight text-[11px]">
              blackyouthempowermentnetwork@gmail.com
            </p>
          </span>
          <Link to="https://www.instagram.com/blackyouthempowermentnet/"
            target="_blank"
            rel="noopener noreferrer"
          className="flex flex-col  hover:scale-110 transition text-center justify-center items-center gap-1 cursor-pointer">
            <FiInstagram className="text-[30px]" />
            <p className="font-extralight text-[11px]">
              blackyouthempowermentnet
            </p>
          </Link>
          <span className="flex flex-col  hover:scale-110 transition text-center justify-center items-center gap-1 cursor-pointer">
            <FaFacebook className="text-[30px]" />
            <p className="font-extralight text-[11px]">
              blackyouthempowermentnetwork
            </p>
          </span>
          <Link
            to="https://www.youtube.com/@BlackYouthEmpowermentNetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col  hover:scale-110 transition text-center justify-center items-center gap-1 cursor-pointer"
          >
            <FaYoutube className="text-[30px]" />
            <p className="font-extralight text-[11px]">
              Black Youth Empowerment Network
            </p>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
