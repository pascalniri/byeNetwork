"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const AnimatedText = ({
  texts,
  delay = 3000,
  className,
}: {
  texts: string[];
  delay?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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
    <div className="grid">
      {texts.map((text, index) => (
        <motion.div
          key={text}
          animate={{
            opacity: index === currentIndex && isVisible ? 1 : 0,
            y: index === currentIndex ? (isVisible ? 0 : -20) : 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          aria-hidden={index !== currentIndex}
          className={`col-start-1 row-start-1 ${className}`}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

const backgroundImages = ["/BYEN1.jpeg", "/BYEN2.jpeg", "/BYEN3.jpeg", "/BYEN4.jpeg", "/BYEN5.jpeg", "/BYEN6.jpeg"];

const BackgroundSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-[-2] pointer-events-none select-none overflow-hidden">
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Brand photography direction: high-contrast duotone, not full color */}
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(1) contrast(1.15) brightness(0.85)" }}
            draggable={false}
          />
        </motion.div>
      ))}

      {/* Brown duotone wash over the grayscale photos, heavier on the left where the headline sits */}
      <div className="absolute inset-0 bg-brand-brown mix-blend-multiply opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-brown via-brand-brown/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/95 via-transparent to-transparent" />


    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Home = () => {
  return (
    <div className="relative w-full">
      <section className="relative w-full h-[62vh] sm:h-[70vh] md:h-[78vh] min-h-[420px] sm:min-h-[480px] md:min-h-[560px] overflow-hidden">
        <BackgroundSlideshow />

        <div className="relative z-10 h-full flex items-center">
          <motion.div
            className="font-nunito container mx-auto px-4 sm:px-6 md:px-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-2xl">
            

              <AnimatedText
                texts={["BLACK YOUTH EMPOWERMENT NETWORK", "WELCOME TO BYEN"]}
                delay={4000}
                className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight uppercase tracking-tight text-white break-words"
              />

              <motion.p variants={item} className="text-sm sm:text-base font-semibold text-brand-lime uppercase tracking-wide mt-4">
                Building America&apos;s Network of Young Black Leaders
              </motion.p>

              <motion.p variants={item} className="text-sm text-brand-cream/90 max-w-lg mt-3">
                Empowering the next generation through education, mentorship, and community building.
              </motion.p>

              <motion.div variants={item} className="mt-6">
                <Link
                  href="/membership"
                  className="notch-md group inline-flex items-center gap-2 bg-brand-chili hover:bg-white text-white hover:text-brand-brown font-medium uppercase tracking-wide text-xs py-3 px-6 transition-colors duration-200"
                >
                  Become a Member
                  <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
