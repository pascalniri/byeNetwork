import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const Join = () => {
  const joins = [
    {
      title: "WANT TO BECOME A MENTOR?",
      description:
        "Share your knowledge and experience to inspire the next generation of leaders, fostering growth and collaboration as we work together to create meaningful change in our communities.",
      link: "#",
    },
    {
      title: "WANT TO BECOME A MEMBER?",
      description:
        "Inspire and guide our youth by becoming a mentor. Click below for more details on how you can make a positive impact.",
      link: "#",
    },
  ];
  return (
    <div className="font-poppins flex flex-col justify-center items-center pt-[4rem]  text-center max-w-screen-2xl mx-auto lg:mt-[5rem] mt-[5rem]">
      <h1 className="font-teko md:text-[70px] text-[45px] font-medium">
        WANT TO JOIN <span className="text-[#9e6548]">THE NETWORK?</span>
      </h1>
      <p className="text-[15px] text-[#6C6A6A] md:w-[80%] lg:mb-[15rem] mb-[5rem]">
        Connect, collaborate, and lead with us as we empower each other to
        achieve our goals and create lasting impact in our communities.
      </p>

      <div className="relative flex justify-center">
        <img src="/join 1.svg" alt="" className="hidden lg:flex" />
        <div className="hidden absolute px-4 md:px-[5rem] lg:px-[10rem] -top-[8rem] lg:grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
          {joins.map((join, index) => (
            <div className="bg-white border-b-[10px] border-[#9e6548] shadow-2xl px-[2rem] py-[3rem] flex flex-col items-start text-left justify-center">
              <h2 className="font-teko text-[28px] font-semibold text-[#9e6548]">
                {join.title}
              </h2>
              <p className="text-[15px] text-[#6C6A6A]">
               {join.description}
              </p>
              <button className="font-teko border flex  items-center gap-2 mt-[2rem] text-[22px] text-white px-[30px] py-[8px] duration-300 bg-[#985B3C] hover:bg-[#9e6548]">
                <p>Just Click</p>
                <IoArrowForwardOutline />
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundImage: `url("/join 1.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            padding: "8rem 0px",
          }}
        >
          <div className='lg:hidden px-4 md:px-[5rem] lg:px-[10rem] grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center'>
            {joins.map((join, index) => (
                <div className="bg-white border-b-[10px] border-[#9e6548] shadow-2xl px-[2rem] py-[3rem] flex flex-col items-start text-left justify-center">
                <h2 className="font-teko text-[28px] font-semibold text-[#9e6548]">
                  {join.title}
                </h2>
                <p className="text-[15px] text-[#6C6A6A]">
                  {join.description}
                </p>
                <button className="font-teko border flex  items-center gap-2 mt-[2rem] text-[22px] text-white px-[30px] py-[8px] duration-300 bg-[#985B3C] hover:bg-[#9e6548]">
                  <p>Just Click</p>
                  <IoArrowForwardOutline />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
