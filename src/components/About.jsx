import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import Advert from "./Advert";
import { motion } from "framer-motion";
const About = () => {

  const item1 = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };
  const item2 = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };

  const item3 = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.3,
      },
    },
  };
  return (
    <div className="font-montserrat flex flex-col lg:gap-[3rem] gap-y-[5rem] lg:flex-row justify-center items-start max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] lg:my-[8rem] mt-[3rem]">
      <Advert />
      <motion.div
        variants={item1}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="md:w-[70%] w-full"
      >
        <img src="/aboutImg.jpg" alt="" className="rounded-[20px]" />
      </motion.div>
      <div className="w-full">
        <motion.div
          variants={item2}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <h1 className="lg:text-[44px] lg:leading-[44px] font-bold text-[30px] leading-[35px]">
            WELCOME <span className="text-[#693e2d]">TO BYEN</span>
          </h1>
          <h2 className="font-medium text-[20px] leading-[28px] mt-4">
          The Black Youth Empowerment Network (BYEN) is a youth-led organization dedicated to uplifting and empowering Black youth through leadership development, entrepreneurship, and creative expression.
          </h2>
          <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A]">
          BYEN provides a platform for collaboration, community building, and personal growth, fostering opportunities for young leaders to make a meaningful impact in their communities and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="mt-6 p-5 rounded-lg border-l-4  border-[#693e2d]"
        >
          <h3 className="text-[20px] font-semibold text-[#985b3c] mb-2">Our Mission</h3>
          <p className="text-[15px] leading-[22px] text-[#6C6A6A]">
            To empower Black youth through collaboration, leadership development, and opportunities for personal and professional growth.
          </p>

          <h3 className="text-[20px] font-semibold text-[#985b3c] mt-4 mb-2">Our Vision</h3>
          <p className="text-[15px] leading-[22px] text-[#6C6A6A]">
            To cultivate a network of confident, empowered Black leaders who are shaping their communities and making a global impact.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
