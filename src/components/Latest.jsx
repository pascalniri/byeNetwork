import React from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const Latest = () => {
  const news = [
    {
      id: 1,
      image: "/atlanta-news.png", // You'll need to create this image or use an existing one
      title: "Black Youth Empowerment Network Featured on Atlanta News First",
      description:
        "Founder Jay'Shun Mathews recently appeared on Atlanta News First to represent the Black Youth Empowerment Network, using his voice to shed light on the ongoing gun violence epidemic affecting communities across the country. During the segment, he spoke passionately about the importance of youth-led advocacy and raised awareness about a powerful event organized by the Network in partnership with Students Demand Action. The event served as both a call to action and a safe space for young people to unite, heal, and demand change. Jay'Shun's appearance underscores BYEN's unwavering commitment to empowering Black youth to lead movements that address urgent social issues and reimagine a safer, more just future.",
      link: "https://www.atlantanewsfirst.com/2025/03/29/local-leaders-address-gun-violence-awareness-morehouse-college-event/",
    },
    {
      id: 2,
      image: "/collegiate-chapters.jpg", // You'll need to create this image or use an existing one
      title: "Black Youth Empowerment Network Launches Collegiate Chapters",
      description:
        "BYEN is proud to announce the official launch of chapters at Morehouse College and the University of Georgia. This expansion marks a powerful next step in our mission to equip Black youth with the tools, community, and platform to lead with purpose and create lasting change. Each chapter will serve as a hub for leadership development, advocacy, and innovation and rooted in our core values of empowerment, collaboration, impact, and intentional leadership.",
      link: "https://www.instagram.com/wearebyen/",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="font-montserrat mx-auto max-w-screen-2xl px-4 md:px-[5rem] lg:px-[6rem] py-[8rem]">
      <Fade>
        <h1 className="lg:text-[44px] lg:leading-[44px] font-bold text-[30px] leading-[35px]">
          LATEST <span className="text-[#693e2d]">NEWS</span>
        </h1>
      </Fade>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[3rem]"
      >
        {news.map((item, index) => (
          <motion.div
            variants={item}
            key={index}
            className="bg-white shadow-xl rounded-[10px] overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="h-[240px] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="flex flex-col p-6">
              <h2 className="text-[22px] font-semibold text-[#693e2d]">{item.title}</h2>
              <p className="text-[15px] leading-[22px] mt-3 text-[#6C6A6A] line-clamp-4">
                {item.description}
              </p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-5 self-start">
                <button className="bg-[#693e2d] text-[15px] text-white rounded-full py-3 px-8 hover:bg-[#985b3c] transition-colors duration-300 shadow-md">
                  LEARN MORE
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="flex justify-center mt-8">
        <a href="https://www.instagram.com/wearebyen/" target="_blank" rel="noopener noreferrer">
          <button className="bg-white border-2 border-[#693e2d] text-[15px] text-[#693e2d] font-medium rounded-full py-3 px-8 hover:bg-[#693e2d] hover:text-white transition-colors duration-300">
            VIEW MORE
          </button>
        </a>
      </div>
    </div>
  );
};

export default Latest;
