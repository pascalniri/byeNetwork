import React from "react";
import { BiSolidConversation } from "react-icons/bi";
const ContactUs = () => {
  return (
    <div className="font-poppins flex flex-col justify-center text-center mt-[8rem]">
   
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
        <h1 className="font- md:text-[50px] text-black text-[45px] font-medium w-[90%]">
          LET'S CONNECT AND START <span className="text-[#985B3C]">A CONVERSATION TODAY!</span>
        </h1>
        <p className="text-[15px] text-[#6C6A6A] md:w-[80%]">
          We're here to support you every step of the way on your journey with
          BYEN.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=blackyouthempowermentnetwork@gmail.com"
          target="_blank"
        >
          <button className=" flex  items-center gap-2 mt-[3rem] text-[13px] text-white px-[30px] py-[10px] duration-300 bg-[#985B3C] hover:bg-[#9e6548]">
            <p>Contact via e-mail</p>
            <BiSolidConversation />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
