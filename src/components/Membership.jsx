import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FaHandPointRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Faq from "./Faq";
import ContactUs from "./ContactUs";

const Membership = () => {
  const whyUs = [
    {
      id: 1,
      icon: "/LD.svg",
      alt: "Leadership empowerment",
      h2: "LEADERSHIP DEVELOPMENT",
      p: "Participate in workshops, mentorship programs, and exclusive events designed to help you grow as a leader.",
    },
    {
      id: 2,
      icon: "/NO.svg",
      alt: "Networking Opportunities",
      h2: "NETWORKING OPPORTUNITIES",
      p: "Connect with like-minded peers, professionals, and mentors who are as passionate about change as you are.",
    },
    {
      id: 3,
      icon: "/ER.svg",
      alt: "Empowerment Resources",
      h2: "EMPOWERMENT RESOURCES",
      p: "Access tools, resources, and support to help you on your journey of personal and professional growth.",
    },
  ];
  return (
    <div className="md:max-w-2xl lg:max-w-6xl mx-auto p-4 mt-[150px] font-outfit text-light">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-[30px] lg:text-[40px]">
          Welcome to the BYEN Family
        </h1>
        <p className="mt-[30px] text-[#474747] md:w-[80%]">
          The Black Youth Empowerment Network (BYEN) is more than an
          organization—it's a coalition of young Black leaders, creators, and
          change-makers dedicated to uplifting and transforming communities.
          Join BYEN and become part of a network that values empowerment,
          collaboration, and positive impact.
        </p>
      </div>

      <div className="relative flex flex-col justify-start items-start md:flex-row gap-y-5 mt-[5rem]">
        <img src="/whyus.svg" alt="Askig person" className="w-[200px]" />
        <span className="absolute bottom-3 left-[8rem] flex flex-col text-start">
          <h2 className="font-semibold text-[25px]">Why Join BYEN?</h2>
          <p>Becoming a member means you'll have access to:</p>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4 mt-10">
        {whyUs.map((why) => (
          <div
            key={why.id}
            className="flex flex-col justify-center items-start px-3 py-5 bg-black rounded-lg font-extralight text-gray-300 hover:scale-105 duration-200"
          >
            <img src={why.icon} alt={why.alt} />
            <h2 className="mt-5 font-semibold">{why.h2}</h2>
            <p>{why.p}</p>
          </div>
        ))}
      </div>

      <div className="mt-[8rem]">
        <h1 className="font-bold text-[30px] lg:text-[40px]">
          Membership Tiers
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-[2rem]">
          <div className="border border-black px-[1rem] py-[2rem] rounded-lg">
            <div className="flex flex-row items-center gap-3">
              <span className="bg-black text-white w-[50px] text-center py-2 rounded-lg font-bold text-[20px]">
                1
              </span>
              <h2 className="font-semibold text-[22px]">GENERAL MEMBER</h2>
            </div>

            <div className="flex flex-row mt-8">
              <TbArrowBadgeRightFilled className="text-[30px] w-[5%]" />
              <span className="flex flex-col justify-start w-full">
                <p className="font-semibold mt-[3px]">Description</p>
                <p className="font-light text-[14px]">
                  For those who want to connect, grow, and make a difference in
                  their communities as part of BYEN.
                </p>
              </span>
            </div>

            <div className="flex flex-row">
              <TbArrowBadgeRightFilled className="text-[30px] w-[5%]" />
              <span className="flex flex-col justify-start w-full">
                <p className="font-semibold mt-[3px]">Benefits</p>
                <p className="font-light text-[14px]">
                  Access to BYEN events, networking opportunities, and basic
                  member resources.
                </p>
              </span>
            </div>

            <div className="flex flex-row">
              <TbArrowBadgeRightFilled className="text-[30px] w-[5%]" />
              <span className="flex flex-col justify-start w-full">
                <p className="font-semibold mt-[3px]">Availability</p>
                <p className="font-light text-[14px]">
                  Open to all eligible applicants.
                </p>
              </span>
            </div>
          </div>

          <div className="border border-black px-[1rem] py-[2rem] rounded-lg">
            <div className="flex flex-row items-center gap-3">
              <span className="bg-black text-white w-[50px] text-center py-2 rounded-lg font-bold text-[20px]">
                2
              </span>
              <h2 className="font-semibold text-[22px]">EXECUTIVE MEMBER</h2>
            </div>

            <div className="flex flex-row mt-8">
              <TbArrowBadgeRightFilled className="text-[30px] w-[5%]" />
              <span className="flex flex-col justify-start w-full">
                <p className="font-semibold mt-[3px]">Description</p>
                <p className="font-light text-[14px]">
                  Our Executive Membership is designed for those ready to take a
                  leading role within BYEN, engage in high-level training, and
                  contribute to core BYEN initiatives.
                </p>
              </span>
            </div>

            <div className="flex flex-row">
              <TbArrowBadgeRightFilled className="text-[30px] w-[5%]" />
              <span className="flex flex-col justify-start w-full">
                <p className="font-semibold mt-[3px]">Benefits</p>
                <p className="font-light text-[14px]">
                  Includes all General Member benefits, plus access to exclusive
                  leadership training, executive-only events, and opportunities
                  to shape BYEN's future. Executive Members receive special
                  recognition within the organization.
                </p>
              </span>
            </div>

            <div className="flex flex-row">
              <TbArrowBadgeRightFilled className="text-[30px] w-[5%]" />
              <span className="flex flex-col justify-start w-full">
                <p className="font-semibold mt-[3px]">Limited Spots</p>
                <p className="font-light text-[14px]">
                  Only 25 spots are available for Executive Members, making this
                  a unique opportunity for those dedicated to making an impact.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#000000] py-10 mt-[3rem] rounded-xl shadow-md">
        <div class="max-w-3xl mx-auto px-6">
          <h2 class="text-2xl font-bold text-gray-400 mb-4">How to Apply</h2>
          <p class="text-lg text-gray-400 mb-6">
            Application Deadline:{" "}
            <span class="font-semibold text-gray-300">December 15</span>
          </p>
          <ol class="list-decimal list-inside text-gray-600 space-y-3 mb-6">
            <li class="text-lg">
              <span class="font-semibold">Step 1:</span> Choose your membership
              level
            </li>
            <li class="text-lg">
              <span class="font-semibold">Step 2:</span> Complete the online
              application form
            </li>
            <li class="text-lg">
              <span class="font-semibold">Step 3:</span> Receive your welcome
              email with all the information you need to get started
            </li>
          </ol>
          <p class="text-gray-300 mb-10 flex items-center gap-3">
            <FaHandPointRight className="text-[30px]" />
            Membership is completely free—there are no costs to join BYEN at any
            level.
          </p>
          <a href="https://forms.gle/ixTMNSwMieidpv7T7" target="_blanck">
            <motion.button
              className="font-light flex bg-white flex-row items-center justify-center gap-[20px] pl-[30px] pr-[6px] py-[6px] rounded-full"
              initial="hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-black text-[14px]">Apply Now</p>
              <span className="bg-black px-[10px] py-[10px] rounded-full">
                <FaArrowRight className="text-white" />
              </span>
            </motion.button>
          </a>
        </div>
      </div>

      <Faq />
      <ContactUs />
    </div>
  );
};

export default Membership;
