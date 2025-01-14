import React from "react";

const Home = () => {
  return (
    <div className='font-montserrat bg-[url("/hero-bg.svg")] pb-3 bg-no-repeat w-full md:min-h-[100vh] h-full  flex flex-col justify-center gap-y-[5rem] items-start max-w-screen-2xl mx-auto'>
      <div className=" px-4 md:px-[5rem] lg:px-[6rem] mt-[10rem]">
        <div className="lg:w-[60%] w-full bg-white bg-opacity-20 text-white px-[20px] py-[40px]">
          <h1 className=" lg:text-[44px] lg:leading-[48px] font-bold text-[30px] leading-[35px]">
            BLACK YOUTH EMPOWERMENT NETWORK
          </h1>
          <p className="text-[15px] leading-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <div className="flex flex-row flex-wrap text-[15px] md:gap-3 gap-2 mt-[3rem]">
            <button className="bg-[#693e2d] rounded-full py-3 px-6 hover:bg-[#985b3c] duration-200">
              Become Member
            </button>
            <button className="text-[#693e2d] bg-white px-6 py-3 rounded-full duration-200 hover:bg-[#ae8772] hover:text-white">
              Donate Us
            </button>
          </div>
        </div>


      </div>

    </div>
  );
};

export default Home;
