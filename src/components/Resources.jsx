import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaFacebook, FaYoutube } from "react-icons/fa6";
import mentor1 from "../assets/mentor1.svg";
import events from "../assets/events.jpg";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocation, IoTimerOutline } from "react-icons/io5";
import whole from "../assets/whole.svg";
const Projects = () => {
  const [activeTab, setActiveTab] = useState("videos"); // State to track active tab
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  return (
    <div
      style={{
        backgroundImage: `url(${whole})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:max-w-2xl lg:max-w-6xl mx-auto p-4 mt-[150px] font-outfit text-light">
        {/* Tab navigation */}
        <div className="flex justify-center items-start mb-10">
          <button
            className={`font-semibold text-[12px] sm:text-[16px] w-full rounded-l-[10px] py-[20px] border border-black ${
              activeTab === "videos" ? "bg-black text-white" : ""
            }`}
            onClick={() => setActiveTab("videos")}
          >
            MENTORSHIP
          </button>
          <button
            className={`font-semibold text-[12px] sm:text-[16px] w-full rounded-r-[10px] py-[20px] border border-black ${
              activeTab === "photos" ? " bg-black text-white" : ""
            }`}
            onClick={() => setActiveTab("photos")}
          >
            EVENTS
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "videos" ? (
          <div>
            {/* Word content */}
            <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[40px] lg:text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
              Mentorship Interest Form
            </h1>
            <p className="mt-[30px] text-[#474747]">
              To become a mentor, we invite individuals aged 21 and above to
              join our mentoring program. This is an opportunity to share your
              experiences, insights, and expertise with the next generation,
              helping them navigate the challenges and opportunities that lie
              ahead.
            </p>
            {/* <motion.button
              className="mt-[30px] mb-[50px] bg-black flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[10px] rounded-full"
              initial="hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-white">Click to apply</p>
              <span className="text-black bg-white px-[15px] py-[15px] rounded-full">
                <FaArrowRight />
              </span>
            </motion.button> */}
          </div>
        ) : (
          <div className="my-[100px]">
            <h1 className="font-bold text-[40px] md:text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
              Our Events
            </h1>
            <h1 className="text-[28px] md:text-[35px] font-light">
              <div className="mt-[50px]">
                <span className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[100px]">
                  <img
                    src={events}
                    alt="Keshawn Brown"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                  <p className="text-[13px] font-normal">
                    <h1 className="mb-[20px] font-bold text-[30px]">
                      Conscious Choices: Empowering Black Youth Through Mindful
                      Decision-Making
                    </h1>
                    <span className="text-[#474747]">
                      Hey everyone! We're excited to invite you to a special
                      webinar hosted by the Black Youth Empowerment Network
                      (BYEN). Next Monday, we'll be diving into important
                      conversations about the mental health challenges facing
                      black youth and how we can shape a brighter future
                      together. <br /> <br />
                      This is a fantastic opportunity to hear from professionals
                      and ask questions that matter to you. Let's come together
                      as a community to support each other and empower our
                      youth! Don't miss out—Register now and mark your
                      calendars. See you there!
                    </span>
                    <span className="flex flex-col gap-[10px] mt-[50px] mb-[40px]">
                      <span className="flex flex-row items-center gap-3">
                        <FaCalendarAlt className="text-[20px]" />
                        <p className="font-medium text-[15px]">2024-03-25</p>
                      </span>
                      <span className="flex flex-row items-center gap-3">
                        <IoTimerOutline className="text-[20px]" />
                        <p className="font-medium text-[15px]">
                          7:00 pm - 8:00 pm (EDT)
                        </p>
                      </span>
                      <span className="flex flex-row items-center gap-3">
                        <IoLocation className="text-[20px]" />
                        <p className="font-medium text-[15px]">
                          Zoom (Register NOW with the link below)
                        </p>
                      </span>
                    </span>
                    <span className="text-[#474747]">
                      😍 💕Join us for an insightful discussion on black youth
                      mental health and empowerment!
                    </span>
                  </p>
                </span>
              </div>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
