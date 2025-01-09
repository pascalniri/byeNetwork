import React from "react";
import { BiSolidConversation } from "react-icons/bi";
const ContactUs = () => {
  return (
    <div className="font-montserrat flex flex-col justify-center text-center mt-[5rem]">
   
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
          <button className="text-white flex text-[15px] items-center gap-2 mt-[3rem] bg-[#693e2d] rounded-full py-3 px-6 hover:bg-[#985b3c] duration-200">
            <p>Contact via e-mail</p>
            <BiSolidConversation />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
