import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaFacebook, FaYoutube } from "react-icons/fa6";
import mentor1 from "../assets/mentor1.svg";
import events from "../assets/events.jpg";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocation, IoTimerOutline } from "react-icons/io5";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("videos"); // State to track active tab
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  return (
    <div className="w-full md:w-[80%] mx-auto p-4 mt-[150px] font-poppins">
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
          <h1 className="text-[28px] md:text-[35px] font-light">
            Mentorship<span className="font-bold"> Interest</span> Form
          </h1>
          <p className="mt-[30px] text-[#474747]">
            To become a mentor, we invite individuals aged 21 and above to join
            our mentoring program. This is an opportunity to share your
            experiences, insights, and expertise with the next generation,
            helping them navigate the challenges and opportunities that lie
            ahead.
          </p>
          <motion.button
            className="mt-[30px] font-light bg-black flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[10px] rounded-full"
            initial="hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-white">CLICK TO APPLY</p>
            <span className="text-black bg-white px-[15px] py-[15px] rounded-full">
              <FaArrowRight />
            </span>
          </motion.button>

          {/* YouTube Video */}
          <div className="mt-[100px]">
            <h1 className="text-[28px] md:text-[35px] font-light">
              Our<span className="font-bold"> Mentors</span>
              <div className="mt-[50px]">
                <span className="flex flex-col md:flex-row gap-x-[100px] gap-[10px]">
                  <img
                    src={mentor1}
                    alt="Keshawn Brown"
                    className="md:w-[600px] md:h-[400px]"
                  />
                  <p className="text-[16px] font-normal">
                    <span className="text-[#474747]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce volutpat quam nec sapien blandit, et volutpat sem
                      ullamcorper. Nullam luctus ac tellus quis scelerisque.
                      Maecenas leo ligula, condimentum nec dolor at, ornare
                      scelerisque velit. Nunc gravida tortor nisl, at
                      ullamcorper tellus fermentum eu. Cras rhoncus varius enim
                      pellentesque suscipit. Morbi a imperdiet tellus. Duis
                      posuere, nisl non cursus tempor,
                    </span>
                    <span className="flex flex-row gap-[30px] mt-[50px]">
                      <MdEmail className="text-[30px]  hover:scale-150 transition cursor-pointer" />
                      <FiInstagram className="text-[30px]  hover:scale-150 transition cursor-pointer" />
                      <FaFacebook className="text-[30px]  hover:scale-150 transition cursor-pointer" />
                      <FaYoutube className="text-[30px]  hover:scale-150 transition cursor-pointer" />
                    </span>
                  </p>
                </span>
              </div>
            </h1>
          </div>
        </div>
      ) : (
        <div className="mt-[100px]">
          <h1 className="text-[28px] md:text-[35px] font-light">
            Our<span className="font-bold"> Events</span>
            <div className="mt-[50px]">
              <span className="flex flex-col md:flex-row gap-y-[30px] gap-x-[100px]">
                <img
                  src={events}
                  alt="Keshawn Brown"
                  className="md:w-[600px] md:h-[400px] rounded-2xl shadow-xl"
                />
                <p className="text-[13px] font-normal">
                    <h1 className="mb-[20px] font-semibold text-[20px]">Conscious Choices: Empowering Black Youth Through Mindful Decision-Making</h1>
                  <span className="text-[#474747]">
                    Hey everyone! We're excited to invite you to a special
                    webinar hosted by the Black Youth Empowerment Network
                    (BYEN). Next Monday, we'll be diving into important
                    conversations about the mental health challenges facing
                    black youth and how we can shape a brighter future together.{" "}
                    <br /> <br />
                    This is a fantastic opportunity to hear from professionals
                    and ask questions that matter to you. Let's come together as
                    a community to support each other and empower our youth!
                    Don't miss out—Register now and mark your calendars. See you
                    there!
                  </span>
                  <span className="flex flex-col gap-[10px] mt-[50px] mb-[40px]">
                    <span className="flex flex-row items-center gap-3">
                      <FaCalendarAlt className="text-[20px]" />
                      <p className="font-medium text-[15px]">2024-03-25</p>
                    </span>
                    <span className="flex flex-row items-center gap-3">
                      <IoTimerOutline className="text-[20px]" />
                      <p className="font-medium text-[15px]">7:00 pm - 8:00 pm (EDT)</p>
                    </span>
                    <span className="flex flex-row items-center gap-3">
                      <IoLocation className="text-[20px]" />
                      <p className="font-medium text-[15px]">Zoom (Register NOW with the link below)</p>
                    </span>
                  </span>
                  <span className="text-[#474747]">
                  😍 💕Join us for an insightful discussion on black youth mental health and empowerment!
                  </span>
                </p>
              </span>
            </div>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Projects;
