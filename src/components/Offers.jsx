import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaUsers, FaChartLine, FaUserTie } from "react-icons/fa";

const Offers = () => {
  const coreValues = [
    {
      icon: <FaHandHoldingHeart className="text-[#693e2d] text-5xl group-hover:text-white transition-colors duration-300" />,
      title: "Empowerment",
      description:
        "We are committed to equipping Black youth with the tools, resources, and support necessary to thrive. Empowerment is at the core of our mission—ensuring that young leaders have access to opportunities that foster self-confidence, critical thinking, and personal growth. Our programs are intentionally designed to elevate voices, affirm identities, and inspire purpose.",
      link: "/",
    },
    {
      icon: <FaUsers className="text-[#693e2d] text-5xl group-hover:text-white transition-colors duration-300" />,
      title: "Collaboration",
      description:
        "We believe in the power of collective effort. Collaboration fosters mutual respect, shared knowledge, and a culture of unity. Through cross-sector partnerships, peer-to-peer engagement, and community-based initiatives, we cultivate environments where meaningful relationships drive innovation and strengthen outcomes.",
      link: "/",
    },
    {
      icon: <FaUserTie className="text-[#693e2d] text-5xl group-hover:text-white transition-colors duration-300" />,
      title: "Leadership",
      description:
        "We nurture principled, service-oriented leadership that extends beyond titles and positions. Our approach emphasizes accountability, integrity, and intentional action. By offering leadership development opportunities, capacity-building experiences, and mentorship, we prepare youth to lead with vision, empathy, and impact.",
      link: "/",
    },
    {
      icon: <FaChartLine className="text-[#693e2d] text-5xl group-hover:text-white transition-colors duration-300" />,
      title: "Impact",
      description:
        "We measure success through the tangible and lasting outcomes of our work. Every initiative is designed with a results-oriented focus that prioritizes community advancement, educational access, and personal achievement. We strive to ensure that our programs not only inspire—but create real and sustainable change.",
      link: "/",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className='font-montserrat bg-[#FAFAFA] flex flex-col justify-center items-center py-[5rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] lg:mt-[10rem] mt-[5rem] bg-[url("/transparent.svg")] bg-no-repeat h-full w-full'
    >
      <h1 className="lg:text-[45px] lg:leading-[44px] font-bold text-[30px] leading-[35px]">
        BYEN <span className="text-[#693e2d]">CORE VALUES</span>
      </h1>
      <p className="text-[15px] leading-[22px] mt-6 text-[#6C6A6A] md:w-[80%]">
        The Black Youth Empowerment Network is guided by four foundational values that inform every aspect of our work: 
        Empowerment, Collaboration, Leadership, and Impact. These values are deeply embedded into the structure of our programs, 
        partnerships, and initiatives, serving as the framework through which we cultivate meaningful experiences and measurable change.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[3rem] w-full">
        {coreValues.map((value, index) => (
          <motion.div
            variants={item}
            key={index}
            className="group rounded-lg bg-white flex flex-col justify-start items-center text-center p-8 hover:bg-[#693e2d] duration-300 cursor-pointer shadow-lg h-full"
          >
            <div className="mb-4 mt-2">
              {value.icon}
            </div>
            <h2 className="font-semibold text-[28px] text-[#693e2d] group-hover:text-white transition-colors duration-300 mb-4">
              {value.title}
            </h2>
            <p className="w-full text-[15px] leading-[22px] text-[#6C6A6A] group-hover:text-gray-200 transition-colors duration-300">
              {value.description}
            </p>
           
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Offers;
