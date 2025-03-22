import React from "react";

const Home = () => {
  return (
    <div className="relative mt-[2rem]">
      <img src="/hero-bg.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
      <div className="absolute inset-0 bg-black opacity-55 z-[-1]"></div>
      <div className='font-montserrat pb-3 bg-no-repeat w-full md:min-h-[100vh] h-full flex flex-col justify-center gap-y-[5rem] items-start max-w-screen-2xl mx-auto'>
        <div className="px-4 md:px-[5rem] lg:px-[6rem] mt-[10rem]">
          <div className="lg:w-[60%] w-full text-white  py-[40px]">
            <h1 className="lg:text-[44px] lg:leading-[48px] font-bold text-[30px] leading-[35px]">
              BLACK YOUTH EMPOWERMENT NETWORK
            </h1>
            <p className="text-[15px] leading-[20px]">
              The Black Youth Empowerment Network (BYEN) is a youth-led organization dedicated to uplifting and empowering Black youth through leadership development, entrepreneurship, and creative expression. BYEN provides a platform for collaboration, community building, and personal growth, fostering opportunities for young leaders to make a meaningful impact in their communities and beyond.
            </p>
            <div className="flex flex-row flex-wrap text-[15px] md:gap-3 gap-2 mt-[3rem]">
              <a href="/membership">
              <button className="bg-[#693e2d] rounded-full py-5 px-10 hover:bg-[#985b3c] duration-200">
                BECOME MEMBER
              </button>
              </a>
              <button className="text-[#693e2d] bg-white px-10 py-5 rounded-full duration-200 hover:bg-[#ae8772] hover:text-white">
                DONATE US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
