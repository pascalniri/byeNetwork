import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const Offers = () => {
  const offers = [
    {
      icon: "/resource.svg",
      title: "Resources",
      description:
        "A comprehensive collection of tools, educational materials, and opportunities designed to equip you with the knowledge and skills needed to excel in your leadership, entrepreneurial, and creative pursuits.",
    },
    {
      icon: "/resource.svg",
      title: "Events",
      description:
        "Immersive events that unite our community, offering powerful opportunities to connect, exchange ideas, and engage in meaningful dialogue through workshops, summits, and networking experiences tailored to inspire leadership and innovation.",
    },
    {
      icon: "/resource.svg",
      title: "Collaboration",
      description:
        "Collaborative opportunities with experienced professionals, fostering mutual growth and guidance to help you navigate challenges, unlock new possibilities, and accelerate your journey to success.",
    },
    {
      icon: "/resource.svg",
      title: "Community",
      description:
        "A vibrant community of young Black leaders and changemakers, where collaboration, support, and shared experiences create a foundation for personal growth and collective empowerment.",
    },
    {
      icon: "/resource.svg",
      title: "Community",
      description:
        "A vibrant community of young Black leaders and changemakers, where collaboration, support, and shared experiences create a foundation for personal growth and collective empowerment.",
    },
    {
      icon: "/resource.svg",
      title: "Community",
      description:
        "A vibrant community of young Black leaders and changemakers, where collaboration, support, and shared experiences create a foundation for personal growth and collective empowerment.",
    },
  ];
  return (
    <div className='font-poppins bg-[#FAFAFA] flex flex-col justify-center items-center py-[4rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] lg:mt-[13rem] mt-[5rem] bg-[url("/transparent.svg")] bg-no-repeat h-full w-full'>
      <h1 className="font-teko md:text-[70px] text-[45px] font-medium">
        WHAT BYEN <span className="text-[#9e6548]">OFFERS</span>
      </h1>
      <p className="text-[15px] text-[#6C6A6A] md:w-[80%]">
        Black Youth Empowerment Network (BYEN) provides mentorship, leadership
        training, and resources to help young Black individuals excel personally
        and professionally. Through educational workshops, community projects,
        and networking opportunities, BYEN fosters growth, confidence, and
        empowerment for the next generation of leaders.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[2rem]">
        {offers.map((offer, index) => (
          <div
            id={index}
            className="group h-[300px] bg-white flex flex-col justify-center items-start text-start px-5 py-5 hover:bg-[#9e6548] duration-300 cursor-pointer shadow-lg"
          >
            <img
              src="/resource.svg"
              alt=""
              className="group-hover:hidden w-[60px]"
            />
            <h2 className="font-medium mt-5 group-hover:text-white group-hover:-translate-y-3 duration-700">
              {offer.title}
            </h2>
            <p className="w-full text-[13px] text-[#6C6A6A] mt-1 group-hover:text-gray-200 group-hover:-translate-y-2 duration-700">
              {offer.description}
            </p>
            <button className="hidden items-center gap-2  font-teko text-[20px] group-hover:flex mt-5 text-[#985B3C] bg-white md:px-[30px] px-4 py-[8px] duration-200 hover:bg-[#f1f1f1]">
              <p>Learn More</p>
              <IoArrowForwardOutline />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
