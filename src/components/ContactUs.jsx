import React from "react";
import { BiSolidConversation } from "react-icons/bi";
const ContactUs = () => {
  return (
    <div className="font-poppins flex flex-col justify-center text-center my-[8rem]">
      <h1 className="font-teko md:text-[70px] text-[45px] font-medium">
        REACH OUT <span className="text-[#9e6548]">TO US!</span>
      </h1>
      <p className="text-[15px] text-[#6C6A6A] md:w-[60%] mx-auto mb-[5rem]">
        Whether you have a query, a suggestion, or just want to say hello, we'd love to hear from you. Let's connect and start a conversation today!
      </p>
      <div
        style={{
          backgroundImage: `url("/contact-pic.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
        className="mb-[10rem] flex flex-col justify-center items-center text-center py-[3rem] px-4 md:px-[5rem] lg:px-[10rem]"
      >
        <h1 className="font-teko md:text-[70px] text-white text-[45px] font-medium w-[90%]">
          LET'S CONNECT AND START A CONVERSATION TODAY!
        </h1>
        <p className="text-[15px] text-[#d7d7d7] md:w-[80%]">
          We're here to support you every step of the way on your journey with
          BYEN.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=blackyouthempowermentnetwork@gmail.com"
          target="_blank"
        >
          <button className="font-teko flex  items-center gap-2 mt-[3rem] text-[22px] text-white px-[30px] py-[8px] duration-300 bg-[#985B3C] hover:bg-[#9e6548]">
            <p>Contact via e-mail</p>
            <BiSolidConversation />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
