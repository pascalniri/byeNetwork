import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Home = () => {
  const videoRef = useRef(null);
  const [isReversing, setIsReversing] = useState(false);

  // Function to handle reverse playback
  const reverseVideo = () => {
    const video = videoRef.current;
    if (video && isReversing) {
      if (video.currentTime > 0) {
        // Decrease the currentTime smoothly
        video.currentTime -= 0.05; // Adjust the value for reverse speed
        requestAnimationFrame(reverseVideo); // Continue reversing
      } else {
        setIsReversing(false); // Reset to forward playback
        video.play(); // Start playing forward
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      setIsReversing(true); // Set reversing to true
      requestAnimationFrame(reverseVideo); // Start the reverse logic
    };

    if (video) {
      video.play(); // Start playing the video forward initially
      video.addEventListener("ended", handleVideoEnd); // Listen for when video ends to trigger reverse
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd); // Clean up the event listener
      }
    };
  }, [isReversing]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/StudioShodwe(1).mp4" // Path to video in public folder
        type="video/mp4"
        muted
        loop={false} // We handle looping manually
        playsInline // Avoid fullscreen on mobile
      />

      {/* Content */}
      <div className="flex flex-col justify-center py-[100px] mx-auto px-4 sm:px-0 sm:w-[80%] lg:w-[80%] text-white font-poppins lg:min-h-[100vh]">
        <div className="flex flex-col justify-center items-center py-[100px] text-center md:text-left md:items-start w-full md:w-2/3">
          <h1 className="font-thin text-[45px] md:text-[60px]">
            <span className="font-medium">Black</span> Youth Empowerment{" "}
            <span className="font-medium">Network</span>
          </h1>
          <p className="font-light mt-[30px] md:mt-auto">
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
