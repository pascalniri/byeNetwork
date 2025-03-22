import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const Offers = () => {
  const offers = [
    {
      icon: "/resource.svg",
      title: "Resources",
      description:
        "A comprehensive collection of tools, educational materials, and opportunities designed to equip you with the knowledge and skills needed to excel in your leadership, entrepreneurial, and creative pursuits.",
        link:"/"
    },
    {
      icon: "/resource.svg",
      title: "Events",
      description:
        "Immersive events that unite our community, offering powerful opportunities to connect, exchange ideas, and engage in meaningful dialogue through workshops, summits, and networking experiences tailored to inspire leadership and innovation.",
        link:"/events"
    },
    {
      icon: "/resource.svg",
      title: "Collaboration",
      description:
        "Collaborative opportunities with experienced professionals, fostering mutual growth and guidance to help you navigate challenges, unlock new possibilities, and accelerate your journey to success.",
        link:"/"
    },
    {
      icon: "/resource.svg",
      title: "Community",
      description:
        "A vibrant community of young Black leaders and changemakers, where collaboration, support, and shared experiences create a foundation for personal growth and collective empowerment.",
        link:"/"
    },
    {
      icon: "/resource.svg",
      title: "Community",
      description:
        "A vibrant community of young Black leaders and changemakers, where collaboration, support, and shared experiences create a foundation for personal growth and collective empowerment.",
        link:"/"
    },
    {
      icon: "/resource.svg",
      title: "Community",
      description:
        "A vibrant community of young Black leaders and changemakers, where collaboration, support, and shared experiences create a foundation for personal growth and collective empowerment.",
        link:"/"
    },
  ];
  return (
    <div className='font-montserrat bg-[#FAFAFA] flex flex-col justify-center items-center py-[4rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] lg:mt-[13rem] mt-[5rem] bg-[url("/transparent.svg")] bg-no-repeat h-full w-full'>
      <h1 className="lg:text-[45px] lg:leading-[44px] font-bold text-[30px] leading-[35px]">
        WHAT BYEN <span className="text-[#693e2d]">OFFERS</span>
      </h1>
      <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%]">
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
            className="group rounded-lg h-[300px] bg-white flex flex-col justify-center items-start text-start px-5 py-5 hover:bg-[#693e2d] duration-300 cursor-pointer shadow-lg"
          >
            <img
              src="/resource.svg"
              alt=""
              className="group-hover:hidden w-[60px]"
            />
            <h2 className="font-medium mt-5 text-[24px] group-hover:text-white group-hover:-translate-y-3 duration-700">
              {offer.title}
            </h2>
            <p className="w-full text-[15px] leading-[20px] text-[#6C6A6A] mt-1 group-hover:text-gray-200 group-hover:-translate-y-2 duration-700">
              {offer.description}
            </p>
            <a href={offer.link}>
            <button className="hidden items-center gap-2 rounded-full font-medium  text-[14px] group-hover:flex mt-5 text-[#693e2d] bg-white md:px-[30px] py-4 px-20 duration-200 hover:bg-[#ae8772] hover:text-white">
              <p>LEARN MORE</p>
              <IoArrowForwardOutline />
            </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
