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
    <div className="relative">
      <img
        src="/hero-bg.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-black opacity-55 z-[-1]"></div>
      <div className="font-montserrat pb-3 bg-no-repeat w-full md:min-h-[100vh] h-full flex flex-col justify-center gap-y-[3rem] items-start max-w-screen-2xl mx-auto">
        <div className="px-4 md:px-[5rem] lg:px-[6rem] mt-[8rem]">
          <div className="lg:w-[70%] w-full text-white py-[30px]">
            <span className="lg:text-[44px] lg:leading-[48px] font-bold text-[30px] leading-[35px]">
              <Typewriter
                words={["BLACK YOUTH EMPOWERMENT", "WELCOME TO BYEN"]}
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
              className="text-[15px] leading-[22px] mt-5"
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
              className="flex flex-row flex-wrap text-[15px] md:gap-3 gap-2 mt-[2rem]"
            >
              <a href="/membership">
                <button className="relative text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-5 px-10 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold overflow-hidden group">
                  <span className="relative z-10">BECOME MEMBER</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </button>
              </a>
              <button className="relative text-[#693e2d] bg-white px-10 py-5 rounded-full hover:bg-gradient-to-r hover:from-[#ae8772] hover:to-[#985b3c] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold overflow-hidden group">
                <span className="relative z-10">DONATE NOW</span>
                <div className="absolute inset-0 bg-[#693e2d]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
