import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { GiLevelEndFlag } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { GiReceiveMoney } from "react-icons/gi";
import Faq from "@/components/Faq";

const Membership = () => {
  const whyUs = [
    {
      id: 1,
      icon: <GiLevelEndFlag />,
      alt: "Leadership empowerment",
      h2: "LEADERSHIP DEVELOPMENT",
      p: "Participate in workshops, mentorship programs, and exclusive events designed to help you grow as a leader.",
    },
    {
      id: 2,
      icon: <HiUserGroup />,
      alt: "Networking Opportunities",
      h2: "NETWORKING OPPORTUNITIES",
      p: "Connect with like-minded peers, professionals, and mentors who are as passionate about change as you are.",
    },
    {
      id: 3,
      icon: <GiReceiveMoney />,
      alt: "Empowerment Resources",
      h2: "EMPOWERMENT RESOURCES",
      p: "Access tools, resources, and support to help you on your journey of personal and professional growth.",
    },
  ];

  const memberships = [
    {
      number: "1",
      title: "General Member",
      subTitle1: "Description",
      p1: "For those who want to connect, grow, and make a difference in their communities as part of BYEN.",
      subTitle2: "Benefits",
      p2: "Access to BYEN events, networking opportunities, and basic member resources.",
      subTitle3: "Availability",
      p3: "Open to all eligible applicants.",

    },
    {
      number: "2",
      title: "Executive Member",
      subTitle1: "Description",
      p1: "Our Executive Membership is designed for those ready to take a leading role within BYEN, engage in high-level training, and contribute to core BYEN initiatives.",
      subTitle2: "Benefits",
      p2: "Includes all General Member benefits, plus access to exclusive leadership training, executive-only events, and opportunities to shape BYEN's future. Executive Members receive special recognition within the organization.",
      subTitle3: "Limited Spots",
      p3: "Only 25 spots are available for Executive Members, making this a unique opportunity for those dedicated to making an impact.",

    },
  ];
  return (
    <div className="font-montserrat">
      <div className='bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url("/transparent.svg")] bg-no-repeat h-full w-full mt-[7rem]'>
        <h1 className=" flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p>MEMBERSHIP</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
          The Black Youth Empowerment Network (BYEN) is more than an
          organization—it's a coalition of young Black leaders, creators, and
          change-makers dedicated to uplifting and transforming communities.
          Join BYEN and become part of a network that values empowerment,
          collaboration, and positive impact.
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem]">
        <h1 className="text-[30px] leading-[35px] text-[#693e2d] font-semibold">
          <p>Why join BYEN?</p>
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] mb-[5rem]">
          Becoming a member means you'll have access to:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {whyUs.map((us) => (
            <div
              key={us.id}
              className="flex flex-col justify-center items-center text-center bg-white border-t-[6px] border-[#693e2d] px-3 py-10 shadow-lg"
            >
              <p className="text-[5rem] text-[#693e2d] ">{us.icon}</p>
              <h1 className="text-[15px] leading-[20px]">{us.h2}</h1>
              <p className="text-[13px] text-[#6C6A6A] md:w-[80%] mx-auto mt-2">
                {us.p}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem]">
        <h1 className="lg:text-[44px] lg:leading-[44px] font-bold text-[30px] leading-[35px]">
            Membership <span className="text-[#693e2d]">Tiers</span>
        </h1>
        <p className="text-[13px] mt-3 text-[#6C6A6A] mx-auto mb-[5rem]">
          Take the first step towards unlocking amazing possibilities—join us
          today for free!
        </p>

        {/* MEMBERSHIP TIERS CARDS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {memberships.map((membership, index)=> (
            <div key={index} className="bg-[#693e2d3c] md:px-10 px-4 py-5 rounded-2xl ">
            <div className="w-full bg-[#693e2d84] flex flex-row items-center justify-start gap-5 p-3 rounded-full">
              <div className="bg-[#693e2d] w-[60px] h-[60px] rounded-full flex items-center justify-center text-[25px]">
                {membership.number}
              </div>
              <p className="text-[20px] leading-[28px] font-medium">
                {membership.title}
              </p>
            </div>

            <div className="flex flex-col justify-start items-start md:px-10 px-5">
              <div className="flex flex-col mt-5">
                <h2 className="font-medium">{membership.subTitle1}</h2>
                <p className="text-[13px] text-[#6C6A6A] mx-auto">
                  {membership.p1}
                </p>
              </div>
              <div className="flex flex-col mt-5">
                <h2 className="font-medium">{membership.subTitle2}</h2>
                <p className="text-[13px] text-[#6C6A6A] mx-auto">
                {membership.p2}
                </p>
              </div>
              <div className="flex flex-col  mt-5">
                <h2 className="font-medium">{membership.subTitle3}</h2>
                <p className="text-[13px] text-[#6C6A6A] mx-auto">
                {membership.p3}
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>

        <Faq />
      </div>
    </div>
  );
};

export default Membership;
