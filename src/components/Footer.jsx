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
          <a class="hover:text-white" href="/">
            Home
          </a>
          <a class="hover:text-white" href="/membership">
            Membership
          </a>
          <a class="hover:text-white" href="/team">
            Our Team
          </a>
          <a class="hover:text-white" href="/resources">
            Resources
          </a>
          <a class="hover:text-white" href="/projects">
            Projects
          </a>
        </nav>

        <div class="flex justify-center space-x-5">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=blackyouthempowermentnetwork@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/email.png" />
          </a>
          <a
            href="https://www.linkedin.com/company/black-youth-empowerment-network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a
            href="https://www.instagram.com/blackyouthempowermentnet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61554206687351"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
        </div>
        <p class="text-center text-gray-700 font-medium">
          &copy; 2024 BYEN. All rights reservered.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
