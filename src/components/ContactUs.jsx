import React from "react";
import { Fade } from "react-awesome-reveal";
import { BiSolidConversation } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <Fade triggerOnce={false} className="font-montserrat flex flex-col justify-center text-center mt-[5rem]">
   
      <div
        // style={{
        //   backgroundImage: `url("/contact-pic.svg")`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   height: "100%",
        //   width: "100%",
        // }}
        className="flex flex-col justify-center items-center text-center mb-[10rem] px-4 md:px-[5rem] lg:px-[10rem]"
      >
        <h1 className="lg:text-[44px] lg:leading-[44px] font-bold text-[26px] leading-[35px]">
          LET'S CONNECT AND START <span className="text-[#985B3C]">A CONVERSATION TODAY!</span>
        </h1>
        <p className="text-[15px] mt-4 text-[#6C6A6A] md:w-[80%]">
          We're here to support you every step of the way on your journey with
          BYEN.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=blackyouthempowermentnetwork@gmail.com"
          target="_blank"
        >
          <button className="relative text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-4 px-12 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold overflow-hidden group flex items-center gap-2 mt-[3rem]">
            <span className="relative z-10 flex items-center gap-2">
              CONTACT VIA E-MAIL
              <BiSolidConversation />
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
          </button>
        </a>
      </div>
    </Fade>
  );
};

export default ContactUs;
