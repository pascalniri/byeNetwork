import React from "react";
import { motion } from "framer-motion";


const AnimatedText = ({ text, className }) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const containerRef = React.useRef();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % text.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <div className="relative h-20 overflow-hidden">
      {text.map((t, index) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{
            opacity: currentTextIndex === index ? 1 : 0,
            y: currentTextIndex === index ? 0 : 50,
            scale: currentTextIndex === index ? 1 : 0.8,
          }}
          exit={{ opacity: 0, y: -50, scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.5
          }}
          className={`absolute left-0 right-0 mx-auto ${className}`}
        >
          {t}
        </motion.div>
      ))}
    </div>
  );
};

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
      <div className="w-full text-white py-[30px] flex flex-col justify-center items-center gap-y-[2rem] w-full mx-auto text-center">
            <span className="lg:text-[80px] lg:leading-[80px] font-bold text-[50px] leading-[55px] text-center w-full">
              <AnimatedText
                text={["BLACK YOUTH EMPOWERMENT", "WELCOME TO BYEN"]}
                className="inline-block"
              />
            </span>
            
            
            
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
              <a href="https://givebutter.com/4zAepQ" target="_blank" className="relative text-[#693e2d] bg-white px-10 py-5 rounded-full hover:bg-gradient-to-r hover:from-[#ae8772] hover:to-[#985b3c] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold overflow-hidden group">
                <span className="relative z-10">DONATE NOW</span>
                <div className="absolute inset-0 bg-[#693e2d]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              </a>
            </motion.div>
          </div>
      </div>
    </div>
  );
};

export default Home;
