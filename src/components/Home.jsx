import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ texts, delay = 3000, className }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, delay);
    return () => clearTimeout(timer);
  }, [currentIndex, delay, texts.length]);

  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`${className}`}
    >
      {texts[currentIndex]}
    </motion.div>
  );
};

const BackgroundSlideshow = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  // Array of background images - you can replace these with your actual image URLs
  const backgroundImages = [
    "/BYEN1.jpeg",
    "/BYEN2.jpeg",
    "/BYEN3.jpeg",
    "/BYEN4.jpeg",
    "/BYEN5.jpeg",
    "/BYEN6.jpeg",

   
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="absolute inset-0 w-full h-full z-[-2] pointer-events-none select-none overflow-hidden">
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.1,
            filter: index === currentSlide ? "blur(0px)" : "blur(2px)"
          }}
          transition={{ 
            duration: 1.5, 
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: index === currentSlide ? 0 : 0.2
          }}
        >
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      
      {/* Additional animated overlay for extra visual interest */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent"
        animate={{
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Slideshow indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentSlide(index)}
            style={{ pointerEvents: 'auto' }}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonItem = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-x-hidden">
      {/* Background slideshow */}
      <BackgroundSlideshow />

      {/* Decorative elements - Only show on larger screens */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none select-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-500/10"
            style={{
              width: `${Math.random() * 20 + 10}vw`,
              height: `${Math.random() * 20 + 10}vw`,
              maxWidth: '400px',
              maxHeight: '400px',
              left: `${Math.random() * 90}%`, // avoid overflow
              top: `${Math.random() * 90}%`, // avoid overflow
              filter: 'blur(40px)',
              willChange: 'transform'
            }}
            animate={{
              y: [0, Math.random() * 10 - 5, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="font-montserrat min-h-screen w-full flex flex-col justify-center items-center px-2 sm:px-4 py-16 sm:py-20 relative z-10 overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-2xl w-full text-center space-y-6 sm:space-y-8 px-2 sm:px-4 mx-auto"
          variants={item}
        >
          {/* Animated Text */}
          <div className="relative min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] flex items-center justify-center w-full">
            <AnimatedText
              texts={["BLACK YOUTH EMPOWERMENT NETWORK", "WELCOME TO BYEN"]}
              delay={4000}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight tracking-tight text-white drop-shadow-lg px-2 sm:px-4 break-words"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white max-w-xl mx-auto px-2 sm:px-4"
            variants={item}
          >
            Empowering the next generation through education, mentorship, and community building.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 w-full px-2 sm:px-0"
            variants={item}
          >
            <motion.a
              href="/membership"
              className="relative inline-block text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group flex items-center gap-2 mt-2 sm:mt-8 text-base sm:text-lg"
              variants={buttonItem}
            >
              <span className="relative z-10 flex items-center">
                BECOME A MEMBER
                <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </motion.a>

            <motion.a
              href="https://givebutter.com/4zAepQ"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group flex items-center gap-2 mt-2 sm:mt-8 text-base sm:text-lg"
              variants={buttonItem}
            >
              <span className="relative z-10 flex items-center">
                DONATE NOW
                <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </motion.a>
          </motion.div>

         
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;