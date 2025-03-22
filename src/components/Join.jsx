import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const Join = () => {
  const joins = [
    {
      title: "WANT TO BECOME A MENTOR?",
      description:
        "Share your knowledge and experience to inspire the next generation of leaders, fostering growth and collaboration as we work together to create meaningful change in our communities.",
      link: "/mentorship",
    },
    {
      title: "WANT TO BECOME A MEMBER?",
      description:
        "Inspire and guide our youth by becoming a mentor. Click below for more details on how you can make a positive impact.",
      link: "/membership",
    },
  ];
  return (
    <div className="font-montserrat flex flex-col justify-center items-center pt-[4rem]  text-center max-w-screen-2xl mx-auto lg:mt-[5rem] mt-[5rem]">
      <h1 className="lg:text-[44px] lg:leading-[44px] font-bold text-[30px] leading-[35px]">
        WANT TO JOIN <span className="text-[#693e2d]">THE NETWORK?</span>
      </h1>
      <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] lg:mb-[15rem] mb-[5rem]">
        Connect, collaborate, and lead with us as we empower each other to
        achieve our goals and create lasting impact in our communities.
      </p>

      <div className="relative flex justify-center">
        <img src="/join 1.svg" alt="" className="hidden lg:flex" />
        <div className="hidden absolute px-4 md:px-[5rem] lg:px-[10rem] -top-[8rem] lg:grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
          {joins.map((join, index) => (
            <div className="bg-white rounded-lg border-b-[10px] border-[#693e2d] shadow-2xl px-[2rem] py-[3rem] flex flex-col items-start text-left justify-center">
              <h2 className=" text-[24px] font-semibold text-[#693e2d]">
                {join.title}
              </h2>
              <p className="text-[14px] leading-[20px] mt-3 text-[#6C6A6A]">
                {join.description}
              </p>
              <a href={join.link}>
              <button className="flex flex-row mt-4 text-[14px] items-center text-white gap-2 bg-[#693e2d] rounded-full py-4 px-12 hover:bg-[#985b3c] duration-200">
                <p>JUST CLICK</p>
                <IoArrowForwardOutline />
              </button>
              </a>
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
          <div className="lg:hidden px-4 md:px-[5rem] lg:px-[10rem] grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
            {joins.map((join, index) => (
              <div className="bg-white border-b-[10px] border-[#693e2d] shadow-2xl px-[2rem] py-[3rem] flex flex-col items-start text-left justify-center">
                <h2 className=" md:text-[28px] text-[20px] font-semibold text-[#693e2d]">
                  {join.title}
                </h2>
                <p className="text-[15px] text-[#6C6A6A]">{join.description}</p>
                <a href={join.link}>
                <button className="flex flex-row mt-4 text-[14px] items-center text-white gap-2 bg-[#693e2d] rounded-full py-3 px-6 hover:bg-[#985b3c] duration-200">
                  <p>Just Click</p>
                  <IoArrowForwardOutline />
                </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
