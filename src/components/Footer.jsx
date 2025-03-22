import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="font-montserrat bg-black w-full pt-[4rem] mx-auto max-w-screen-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-[5rem] lg:px-[6rem] mx-auto">
        <div>
          <img src="/logo.jpg" alt="logo" className="w-[100px]" />
          <p className="text-[15px] leading-[20px] text-[#8f8f8f] mt-5">
          The Black Youth Empowerment Network (BYEN) is a youth-led organization dedicated to uplifting and empowering Black youth through leadership development, entrepreneurship, and creative expression. BYEN provides a platform for collaboration, community building, and personal growth, fostering opportunities for young leaders to make a meaningful impact in their communities and beyond.
          </p>
          <span className="flex flex-row gap-3 mt-10">
            <a
              href="https://www.instagram.com/wearebyen/"
              target="_blank"
            >
              <RiInstagramFill className="text-[#693e2d] text-[30px] hover:text-white duration-200" />
            </a>
            {/* <a href="https://twitter.com" target="_blank">
              <BsTwitterX className="text-[#693e2d] text-[28px] hover:text-white duration-200" />
            </a> */}
            <a
              href="https://www.youtube.com/@BlackYouthEmpowermentNetwork"
              target="_blank"
            >
              <FaYoutube className="text-[#693e2d] text-[30px] hover:text-white duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/company/black-youth-empowerment-network/"
              target="_blank"
            >
              <SiLinkedin className="text-[#693e2d] text-[28px] hover:text-white duration-200" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554206687351"
            target="_blank">
              <BsFacebook className="text-[#693e2d] text-[29px] hover:text-white duration-200" />
            </a>
          </span>
        </div>

        <div>
          <h2 className="
           text-[24px] text-white">Quick Links</h2>
          <ul className="flex flex-col gap-1 mt-3">
            <li>
              <a
                href="#"
                className="text-[15px] text-[#8f8f8f] hover:text-[#693e2d] duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/membership"
                className="text-[15px] text-[#8f8f8f] hover:text-[#693e2d] duration-200"
              >
                Membership
              </a>
            </li>
            <li>
              <a
                href="/partners"
                className="text-[15px] text-[#8f8f8f] hover:text-[#693e2d] duration-200"
              >
                Our Partners
              </a>
            </li>
            <li>
              <a
                href="/mentorship"
                className="text-[15px] text-[#8f8f8f] hover:text-[#693e2d] duration-200"
              >
                Mentorship
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="text-[15px] text-[#8f8f8f] hover:text-[#693e2d] duration-200"
              >
                Events
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="
           text-[20px] text-white">Get In Touch</h2>
          <ul className="flex flex-col gap-3 mt-3">
            <li className="flex flex-row items-center gap-3">
              <MdOutlineMail className="text-[#693e2d] text-[30px]" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=blackyouthempowermentnetwork@gmail.com"
                target="_blank"
                className="text-[15px] text-[#8f8f8f] hover:text-[#693e2d] duration-200"
              >
                blackyouthempowermentnetwork@gmail.com
              </a>
            </li>
            <li className="flex flex-row items-center gap-3">
              <IoLocationOutline className="text-[#693e2d] text-[30px]" />
              <a
                href="#"
                className="text-[15px] text-[#8f8f8f] hover:text-[#693e2d] duration-200"
              >
                USA
              </a>
            </li>
            <li className="flex flex-row items-center gap-3">
              <LuPhoneCall className="text-[#693e2d] text-[28px]" />
              <a
                href="tel:+1 (478) 283-3665"
                target="_blank"
                className="text-[15px] text-[#8f8f8f] hover:text-[#693e2d] duration-200"
              >
                +1 (478) 283-3665
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 md:px-[5rem] lg:px-[6rem] mx-auto mt-[3rem] bg-[#693e2d] text-[15px] py-[1.4rem] text-white flex flex-col-reverse justify-center items-center gap-y-5 md:flex-row  md:justify-between">
        <p>© 2025 BYEN. All rights reservered.</p>
        <span className="flex gap-10">
          <a
            href="#"
            className="text-[15px] underline hover:text-black duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[15px] underline hover:text-black duration-200"
          >
            Terms & Conditions
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
