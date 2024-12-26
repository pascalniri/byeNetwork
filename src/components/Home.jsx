import React from "react";

const Home = () => {
  return (
    <div className='font-poppins bg-[url("/hero-bg.svg")] pb-3 bg-no-repeat w-full md:min-h-[100vh] h-full  flex flex-col justify-center gap-y-[5rem] items-start max-w-screen-2xl mx-auto'>
      <div className=" px-4 md:px-[5rem] lg:px-[6rem] mt-[10rem]">
        <div className="lg:w-[60%] w-full bg-white bg-opacity-20 text-white px-[20px] py-[40px]">
          <h1 className=" lg:text-[50px] md:text-[70px] text-[30px] font-medium lg:leading-[6rem] md:leading-[5rem] leading-[3rem]">
            BLACK YOUTH EMPOWERMENT NETWORK
          </h1>
          <p className=" font-light text-[13px] md:w-[90%] w-full mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <div className="flex flex-row flex-wrap md:gap-3 gap-2  text-[14px] mt-[3rem]">
            <button className="bg-[#985B3C] md:px-[30px] px-4 py-[10px] hover:bg-[#9e6548] duration-200">
              Become Member
            </button>
            <button className="text-[#985B3C] bg-white md:px-[30px] px-4 py-[10px] duration-200 hover:bg-[#e2e2e2]">
              Donate Us
            </button>
          </div>
        </div>


      </div>

    </div>
  );
};

export default Home;
