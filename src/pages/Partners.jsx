import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdOutlineHorizontalRule } from "react-icons/md";

const Partners = () => {
  const partners = [
    {
      image: "/focusedminds.svg",
      title: "Focused Minds Education Group",
      description:
        "Focused Minds Education Group provides professional development to school districts and organizations globally. We also provide virtual learning support for educators and students.",
      link: "https://focusedmindsedugroup.com/",
    },
    {
      image: "/civicunplugged.svg",
      title: "Civics Unplugged",
      description:
        "Civics Unplugged(CU) is a 501(c)(3) non-profit that empowers high school leaders with the training, funding, and community they need to become civic innovators. We do this by running a world-class fellowship program for high schoolers seeking to become social entrepreneurs, supporting them as they enter their professional careers, and building new initiatives that push the boundaries of civic education for youth.",
      link: "https://www.civicsunplugged.org/",
    },
    {
      image: "/rileysway.svg",
      title: "Riley's Way Foundation",
      description:
        "Riley's Way invests in and supports the next generation of kind leaders. We provide young people with the programs, support and inclusive community they need to thrive as changemakers. Riley's Way is committed to supporting these young leaders to build a better world that values kindness, empathy, connection and the voices of all youth.",
      link: "https://www.rileysway.org/",
    },
  ];

  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
        <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p>OUR PARTNERS</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
          Our success is built on strong collaborations with our trusted
          partners. Together, we work towards shared goals, driving impact and
          innovation. These partnerships empower us to expand our reach, create
          meaningful change, and deliver exceptional value to the communities we
          serve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem]">
        {partners.map((partner, index) => (
          <div className="bg-[#F0F0F0] shadow-xl rounded-[10px] p-2">
            <img src={partner.image} alt="" className="w-full rounded-[9px]" />
            <div className="flex flex-col items-start px-3 mb-3">
              <h2 className=" text-[24px] leading-[28px] mt-3 font-semibold">
                {partner.title}
              </h2>
              <p className="text-[15px] leading-[20px] mt-2 text-[#6C6A6A]">
                {partner.description}
              </p>
              <a href={partner.link} target="_blank">
                <button
          className="relative inline-block text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group flex items-center gap-2 mt-8"
          >
                  <span className="relative z-10 flex items-center gap-2">
                    VISIT THEM
                    <IoArrowForwardOutline />
                  </span>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
