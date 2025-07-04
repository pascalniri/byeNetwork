import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";

const Foundation = () => {
  const foundations = [
    {
      image: "/focusedminds.svg",
      title: "Foundation: Part 1. VISIONARIES",
      description:
        "Focused Minds Education Group provides profe“VISIONARIES” introduces you to some of BYEN's members. When watching you get a deeper dive into what these members do, their role in BYEN, and why joining BYEN was a good opportunity for them.ssional development to school districts and organizations globally. We also provide virtual learning support for educators and students.",
      link: "https://www.youtube.com/embed/1kGuNjF55NI",
    },
    {
      image: "/focusedminds.svg",
      title: "Part 2. IMPACT",
      description:
        "“IMPACT” dives deeper into what the organization means to the member and how BYEN can impact others the way it impacted them while also providing reasons as to why and how BYEN contributes to the community.",
      link: "https://www.youtube.com/embed/s4n4ZQDOQcA",
    },
    {
      image: "/focusedminds.svg",
      title: "Part 3. BYENGINNING",
      description:
        "“BYENGINNING” talks about the challenges that a young black entrepreneur or person in the Middle Georgia area may face and how one may feel. This part also talks about how BYEN works to uplift and be a better the Black Community.",
      link: "https://www.youtube.com/embed/YpZfC0xPMjQ",
    },
  ];

  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
        <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p>FOUNDATION</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
          Our foundation is built on a commitment to making a lasting impact.
          Through innovation, collaboration, and compassion, we strive to
          empower communities, drive positive change, and create opportunities
          for a brighter future. Together, we're building a legacy of hope and
          progress.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem]">
        <h1 className="lg:text-[44px] lg:leading-[44px] font-bold text-[30px] leading-[35px]">
          Empowering Voices,{" "}
          <span className="text-[#693e2d]">Inspiring Change</span>
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto mb-4">
          Empowering Voices, Change. At Black Youth Empowerment Network, we
          believe in the power of knowledge and community. Explore our curated
          videos, featuring stories, insights, and resources designed to uplift
          and inspire the next generation of leaders. Let these voices ignite
          your passion for progress and change.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {foundations.map((foundation, index) => (
            <div
              key={index}
              className="bg-[#F0F0F0] shadow-xl rounded-[10px] p-2"
            >
              <iframe
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-[10px]"
                src={foundation.link}
                title="Foundation: Part 1. VISIONARIES"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="flex flex-col items-start text-left px-3 mb-3">
                <h2 className="text-[24px] leading-[28px] mt-3 font-semibold">
                  {foundation.title}
                </h2>
                <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A]">
                  {foundation.description}
                </p>
                <button className="relative text-white bg-gradient-to-r from-[#985B3C] to-[#693e2d] rounded-full mt-[2rem] py-[15px] px-[30px] hover:from-[#693e2d] hover:to-[#985B3C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold overflow-hidden group">
                  <span className="relative z-10 text-[15px] uppercase">Learn More</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foundation;
