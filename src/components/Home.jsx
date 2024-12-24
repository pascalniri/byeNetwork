import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className='md:relative bg-[url("/hero-bg.svg")] pb-3 bg-no-repeat w-full md:min-h-[100vh] h-full  flex flex-col justify-center gap-y-[5rem] items-start max-w-screen-2xl mx-auto'>
      <div className=" px-4 md:px-[5rem] lg:px-[6rem] mt-[10rem]">
        <div className="lg:w-[60%] w-full bg-white bg-opacity-20 text-white px-[20px] py-[40px]">
          <h1 className="font-teko lg:text-[85px] md:text-[70px] text-[45px] font-medium lg:leading-[6rem] md:leading-[5rem] leading-[3rem]">
            BLACK YOUTH EMPOWERMENT NETWORK
          </h1>
          <p className="font-poppins font-light text-[15px] md:w-[90%] w-full mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <div className="flex flex-row md:gap-3 gap-2 font-teko text-[22px] mt-[3rem]">
            <button className="bg-[#985B3C] md:px-[30px] px-4 py-[8px] hover:bg-[#9e6548] duration-200">
              Become Member
            </button>
            <button className="text-[#985B3C] bg-white md:px-[30px] px-4 py-[8px] duration-200 hover:bg-[#e2e2e2]">
              Donate Us
            </button>
          </div>
        </div>


        <div className='lg:hidden h-[400px] md:w-[500px] w-full right-[6rem] bg-[url("/contact2.svg")] flex flex-col justify-center items-start text-start mt-10 text-white px-[20px] py-[30px] font-poppins '>
          <h1 className="font-semibold text-[25px]">Have any questions?</h1>
          <h1 className="font-semibold text-[25px]">
            Feel free to reach out to us
          </h1>
          <p className="font-light text-[15px] mt-5">
            We're here to support you every step of the way on your journey with
            BYEN.
          </p>
          <button className="mt-10 font-teko border flex  items-center gap-2 text-[22px] text-white px-[30px] py-[8px] duration-300 hover:bg-[#985B3C]">
            <p>Contact via e-mail</p>
            <IoArrowForwardOutline />
          </button>
      </div>
      </div>

      <div className='hidden md:absolute -bottom-[19rem] h-[400px] w-[400px] right-[6rem] bg-[url("/contact.svg")] lg:flex justify-center items-center px-[20px] py-[30px] font-poppins '>
        <div className="relative z-10 text-white mt-10">
          <h1 className="font-semibold text-[25px]">Have any questions?</h1>
          <h1 className="font-semibold text-[25px]">
            Feel free to reach out to us
          </h1>
          <p className="font-light text-[15px] mt-5">
            We're here to support you every step of the way on your journey with
            BYEN.
          </p>
          <button className="mt-10 font-teko border flex  items-center gap-2 text-[22px] text-white px-[30px] py-[8px] duration-300 hover:bg-[#985B3C]">
            <p>Contact via e-mail</p>
            <IoArrowForwardOutline />
          </button>
        </div>
        <div className="absolute bg-[#985B3C] bg-opacity-90 inset-0 z-0"></div>
      </div>
    </div>
  );
};

export default Home;
