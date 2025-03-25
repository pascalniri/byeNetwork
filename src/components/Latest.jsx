import React from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
const Latest = () => {
  const trends = [
    {
      id:1,
      image: "/latest jabari.svg",
      title: "Jabari Morrison",
      description:
        "An innovative leader, spearheaded the establishment of the Shiloh Student Athlete Association at Shiloh High School in Snellville, Georgia. In his capacity as founder, he orchestrated and moderated a thought-provoking panel discussion addressing the intricate balance between athletic pursuits and academic excellence.",
      link: "https://www.instagram.com/p/C5O10BjuhT4/?img_index=2",
    },
    {
      id:2,
      image: "/latest ammon.svg",
      title: "Ikarion Ammon",
      description:
        "An Ambassador for the Black Youth Empowerment Network, has made significant strides with the recent launch of his visionary clothing line, '5 Digit.' Demonstrating unwavering dedication to his academic journey, he has chosen to embark on a path of higher education at Kennesaw State University, where he will focus his studies on Environmental Engineering.",
      link: "https://www.instagram.com/p/C5O10BjuhT4/?img_index=3",
    },
    {
      id:3,
      image: "/latest coger.svg",
      title: "A'TEV Coger",
      description:
        "An accomplished athlete with a bold vision, has committed to joining Peru State's esteemed football program. Alongside his athletic endeavors, he is poised to unveil his cutting-edge clothing brand, 'Only Fear Fear,' showcasing his entrepreneurial spirit and drive for success.",
      link: "https://www.instagram.com/p/C5O10BjuhT4/?img_index=4",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.6,
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
    <div className="font-montserrat mx-auto max-w-screen-2xl px-4 md:px-[5rem] lg:px-[6rem] py-[10rem]">
      <Fade className="lg:w-[60%]">
        <h1 className="lg:text-[44px] lg:leading-[44px] font-bold md:w-[80%] text-[30px] leading-[35px]">
          DISCOVER THE LATEST NEWS, AND UPDATES{" "}
          <span className="text-[#693e2d]">FROM OUR WORLD</span>
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%]">
          Stay updated with the latest insights, stories, and announcements!
      Fadee into our blog to explore articles, news updates, and thought
          pieces that keep you informed and inspired. Whether it's breaking
          news, expert tips, or in-depth stories, this is your hub for staying
          connected with all the happenings.
        </p>
        <a href="https://www.instagram.com/wearebyen/" target="_blank" >
        <button className="bg-[#693e2d] text-[15px] mt-6 text-white rounded-full py-4 px-12 hover:bg-[#985b3c] duration-200">
          VIEW ALL TRENDS
        </button>
        </a>
      </Fade>

      <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[8rem]">
        {trends.map((trend, index) => (
          <motion.div
          variants={item3}
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
          key={index.id} className="bg-[#F0F0F0] shadow-xl rounded-[10px] p-2">
            <img src={trend.image} alt="" className="w-full rounded-[9px]" />
            <div className="flex flex-col items-start px-3 mb-3">
              <h2 className="text-[25px] font-medium mt-3">{trend.title}</h2>
              <p className="text-[15px] leading-[20px] mt-2 text-[#6C6A6A]">{trend.description}</p>
              <a href={trend.link} target="_blank">
              <button className="bg-[#693e2d] text-[15px] mt-5 text-white rounded-full py-4 px-12 hover:bg-[#985b3c] duration-200">
                LEARN MORE
              </button>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Latest;
