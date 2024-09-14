import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Typical from "react-typical";

const Home = () => {
  const videoRef = useRef(null);

  // Handle video reverse logic after it ends
  const reverseVideo = () => {
    const video = videoRef.current;
    if (video) {
      const reverseInterval = setInterval(() => {
        if (video.currentTime > 0) {
          video.currentTime -= 0.05; // Decrease the time to reverse the video
        } else {
          clearInterval(reverseInterval); // Stop the interval when it reaches the start
          video.play(); // Start playing forward again
        }
      }, 50); // Adjust the interval speed for smoother reversing
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play(); // Start video initially
      video.addEventListener("ended", reverseVideo); // Trigger reverse when the video ends
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", reverseVideo); // Clean up the event listener
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-black bg-opacity-70">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/byen.mp4"
        type="video/mp4"
        muted
        loop={false} // Custom loop handling for forward and reverse
      />

      {/* Content */}
      <div className="flex flex-col justify-center py-[100px] mx-auto px-4 sm:px-0 sm:w-[80%] lg:w-[80%] text-white font-poppins lg:min-h-[100vh]">
        <div className="flex flex-col justify-center items-center py-[100px] text-center md:text-left md:items-start w-full md:w-2/3">
          <h1 className="font-thin text-[45px] md:text-[60px]">
            <span className="font-medium">Black</span> Youth <br />
            <span className="font-medium">
            <Typical
                  steps={['Empowerment', 3000, 'Network', 3000]}
                  loop={Infinity}
                  wrapper="span"
                />
            </span>
          </h1>
          <p className="font-extralight mt-[30px] md:mt-auto">
            Platform dedicated to inspiring and empowering young Black
            individuals through mentorship, skills development, and community
            support. We aim to foster leadership and opportunities for growth.
          </p>

          <a
            href="https://form.jotform.com/240665208958062"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              initial="hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="mt-[80px] font-normal bg-[#FFA700] flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[10px] rounded-full"
            >
              <p className="text-black">APPLY NOW</p>
              <span className="bg-black px-[15px] py-[15px] rounded-full">
                <FaArrowRight />
              </span>
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
