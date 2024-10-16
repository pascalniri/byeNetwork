import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import join from "../assets/join.jpg";
import mentor from "../assets/mentor.png";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
const Join = () => {
  return (
    <div className="font-outfit font-light text-center flex flex-col justify-center items-center mt-[80px] md:mt-[150px] mx-auto px-4  md:w-[80%] 2xl:w-[70%]">
      <Fade className="font-bold text-[50px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
        Want To Join The Network?
      </Fade>
      <p className="mt-[30px] text-[#474747] md:w-[70%]">
      Connect, collaborate, and lead with us as we empower each other to achieve our goals and create lasting impact in our communities.
      </p>

      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-[50px]">
        {/* first container of joining */}
        <Bounce triggerOnce className="bg-gray-100 rounded-[10px] shadow-lg">
          <div>
            <img
              src="/become.jpg"
              alt="mentor"
              className="rounded-t-[10px] w-full h-auto"
            />

            <div className="px-[10px] py-[20px] text-left">
              <h1 className="font-semibold text-[20px]">
                Want to become a mentor?
              </h1>
              <p className="text-[13px] text-[#474747]">
                Share your knowledge and experience to inspire the next
                generation of leaders, fostering growth and collaboration as we
                work together to create meaningful change in our communities.
              </p>
              <motion.button
                className="mt-[20px] font-light bg-black flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[5px] py-[5px] rounded-full"
                initial="hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-white">CLICK HERE</p>
                <span className="bg-white text-black px-[15px] py-[15px] rounded-full">
                  <FaArrowRight />
                </span>
              </motion.button>
            </div>
          </div>
        </Bounce>

        {/* second container of joining */}

        <Bounce triggerOnce>
          <div className="bg-gray-100 rounded-[10px] shadow-lg">
            <img
              src="/join.jpg"
              alt="Join"
              className="rounded-t-[10px] w-full h-auto"
            />

            <div className="px-[10px] py-[20px] text-left">
              <h1 className="font-semibold text-[20px]">
                Want to join the network?
              </h1>
              <p className="text-[13px] text-[#474747]">
                Inspire and guide our youth by becoming a mentor. Click below
                for more details on how you can make a positive impact.
              </p>
              <motion.button
                className="mt-[20px] font-light bg-black flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[5px] py-[5px] rounded-full"
                initial="hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-white">CLICK HERE</p>
                <span className="bg-white text-black px-[15px] py-[15px] rounded-full">
                  <FaArrowRight />
                </span>
              </motion.button>
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default Join;
