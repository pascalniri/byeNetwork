import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  const item1 = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const item3 = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="relative mt-[2rem]">
      <img
        src="/hero-bg.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-black opacity-55 z-[-1]"></div>
      <div className="font-montserrat pb-3 bg-no-repeat w-full md:min-h-[100vh] h-full flex flex-col justify-center gap-y-[5rem] items-start max-w-screen-2xl mx-auto">
        <div className="px-4 md:px-[5rem] lg:px-[6rem] mt-[10rem]">
          <div className="lg:w-[60%] w-full text-white  py-[40px]">
            <span className="lg:text-[44px] lg:leading-[48px] font-bold text-[30px] leading-[35px]">
              <Typewriter
                words={["BLACK YOUTH EMPOWERMENT", "WE ARE BYEN"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <motion.div
              variants={item3}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="text-[15px] leading-[20px] mt-5"
            >
              The Black Youth Empowerment Network (BYEN) is a youth-led
              organization dedicated to uplifting and empowering Black youth
              through leadership development, entrepreneurship, and creative
              expression. BYEN provides a platform for collaboration, community
              building, and personal growth, fostering opportunities for young
              leaders to make a meaningful impact in their communities and
              beyond.
            </motion.div>
            <motion.div
              variants={item3}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="flex flex-row flex-wrap text-[15px] md:gap-3 gap-2 mt-[3rem]"
            >
              <a href="/membership">
                <button className="bg-[#693e2d] rounded-full py-5 px-10 hover:bg-[#985b3c] duration-200">
                  BECOME MEMBER
                </button>
              </a>
              <button className="text-[#693e2d] bg-white px-10 py-5 rounded-full duration-200 hover:bg-[#ae8772] hover:text-white">
                DONATE US
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
