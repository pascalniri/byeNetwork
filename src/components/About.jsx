import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import aboutPic from "../assets/aboutPic.jpeg";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(60);
  const [startCountdown, setStartCountdown] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCountdown(true); // Start countdown when section is in view
        }
      },
      { threshold: 0.1 } // Adjusted threshold for small devices
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (startCountdown) {
      const totalDuration = 3000; // 3 seconds
      const intervalTime = 100; // How often to update (ms)

      const daysStep = days / (totalDuration / intervalTime);
      const hoursStep = hours / (totalDuration / intervalTime);
      const minutesStep = minutes / (totalDuration / intervalTime);
      const secondsStep = seconds / (totalDuration / intervalTime);

      const interval = setInterval(() => {
        setSeconds((prev) => Math.max(0, prev - secondsStep));
        setMinutes((prev) => Math.max(0, prev - minutesStep));
        setHours((prev) => Math.max(0, prev - hoursStep));
        setDays((prev) => Math.max(0, prev - daysStep));
      }, intervalTime);

      setTimeout(() => {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }, totalDuration);

      return () => clearInterval(interval);
    }
  }, [startCountdown]);

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2 },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2 },
    },
  };

  const loadAnimation = {
    opacity: [0, 1],
    transition: { duration: 1.2 },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2 },
    },
  };

  return (
    <div ref={sectionRef} className="mx-auto px-4 mt-[60px] font-poppins md:px-0 md:w-[80%] flex flex-col justify-center items-center">
      <motion.div
        className="flex flex-col justify-center items-center text-center md:w-[80%]"
        initial="hidden"
        animate={startCountdown ? "visible" : "hidden"}
        variants={textAnimation}
      >
        <h1 className="text-[40px] font-light">
          <span className="font-bold">Our</span> Mission
        </h1>
        <p className="mt-[30px] text-[#474747]">
          The Black Youth Empowerment Network (BYEN) is dedicated to empowering
          young black individuals by providing diverse opportunities for growth
          and fostering a supportive community where members can both receive
          and offer assistance, ensuring access to resources for all to achieve
          their aspirations.
        </p>
      </motion.div>

      <div className="mt-[150px] flex flex-col lg:flex-row gap-[20px]">
        <motion.div
          className="w-full"
          initial="hidden"
          animate={startCountdown ? "visible" : "hidden"}
          variants={textAnimation}
        >
          <h1 className="text-[35px] font-light">
            <span className="font-bold">Empower Your</span> Legacy Memorial
            Scholarship
          </h1>
          <p className="mt-[30px] text-[#474747] lg:pr-[60px]">
            The Empower Your Legacy Scholarship, initiated by the Black Youth
            Empowerment Network, serves as a tribute in memory of Adaisha L.
            Turner, beloved cousin of our organization's founders. This
            scholarship is committed to offering crucial financial assistance to
            college students, enhancing their access to essential resources for
            a more empowered college journey, thereby continuing Adaisha's
            lasting impact.
          </p>

          <div className="grid grid-cols-2 mt-[40px] gap-[40px]">
            <span className="font-light md:text-[25px]">
              <motion.span
                className="font-bold text-[30px] md:text-[50px]"
                animate={loadAnimation}
              >
                {Math.floor(days)}
              </motion.span>
              Days
            </span>
            <span className="font-light md:text-[25px]">
              <motion.span
                className="font-bold text-[30px] md:text-[50px]"
                animate={loadAnimation}
              >
                {Math.floor(hours)}
              </motion.span>
              Hours
            </span>
            <span className="font-light md:text-[25px]">
              <motion.span
                className="font-bold text-[30px] md:text-[50px]"
                animate={loadAnimation}
              >
                {Math.floor(minutes)}
              </motion.span>
              Minutes
            </span>
            <span className="font-light md:text-[25px]">
              <motion.span
                className="font-bold text-[30px] md:text-[50px]"
                animate={loadAnimation}
              >
                {Math.floor(seconds)}
              </motion.span>
              Seconds
            </span>
          </div>

          <motion.button
            className="mt-[80px] font-light bg-black flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[10px] rounded-full"
            initial="hidden"
            animate={startCountdown ? "visible" : "hidden"}
            variants={buttonAnimation}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-white">ARE YOU INTERESTED !</p>
            <span className="bg-white px-[15px] py-[15px] rounded-full">
              <FaArrowRight />
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="w-full"
          initial="hidden"
          animate={startCountdown ? "visible" : "hidden"}
          variants={imageAnimation}
        >
          <img
            src={aboutPic}
            alt="aboutPic"
            className="rounded-[20px] shadow-md w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
