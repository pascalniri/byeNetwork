"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaAward, FaStar } from "react-icons/fa";

const partners: { name: string; image?: string }[] = [
  { name: "Civics Unplugged", image: "/images/logo-1.png" },
  { name: "Everytown Community Safety Fund", image: "/images/logo-2.png" },
  { name: "ACLU", image: "/images/logo-3.png" },
  { name: "ONYX IMPACT", image: "/images/logo-4.png" },
  { name: "Center for Strong Public Schools", image: "/images/logo-5.png" },
];

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

      {/* Supported By — static partner logo row, overlapping the hero's bottom edge */}
      <div className="relative z-20 -mt-10 sm:-mt-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="notch-lg bg-white shadow-xl py-8 sm:py-10 px-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-brown/40 mb-6">
              Supported By
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
              {partners.map((partner) =>
                partner.image ? (
                  <img
                    key={partner.name}
                    src={partner.image}
                    alt={partner.name}
                    className="h-12 sm:h-16 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
                  />
                ) : (
                  <span
                    key={partner.name}
                    className="text-base sm:text-lg font-bold uppercase tracking-wide text-brand-brown/40 hover:text-brand-brown/70 transition-colors duration-200 whitespace-nowrap"
                  >
                    {partner.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Spotlight + Member Spotlight */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="notch-lg bg-brand-brown text-white overflow-hidden flex"
          >
            <div className="w-28 sm:w-36 flex-shrink-0 relative">
              <img
                src="/images/image7.jpg"
                alt="BYEN House at Morehouse College"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-center min-w-0">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-lime flex items-center gap-1.5">
                <FaAward className="text-sm" /> Chapter Spotlight
              </span>
              <h3 className="text-base sm:text-lg font-bold uppercase mt-1.5 mb-2 leading-snug">
                BYEN House at Morehouse College
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
                Recognized with a <span className="font-bold text-white">Lux Award for Best Registered Student
                Organization</span> for its leadership, campus presence, and commitment to empowering young Black
                leaders.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="notch-lg bg-brand-cream overflow-hidden flex"
          >
            <div className="w-28 sm:w-36 flex-shrink-0 relative">
              <img
                src="/ethan.jpeg"
                alt="Ethan Ipaye"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-center min-w-0">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-chili flex items-center gap-1.5">
                <FaStar className="text-sm" /> Member Spotlight
              </span>
              <h3 className="text-base sm:text-lg font-bold uppercase text-brand-brown mt-1.5 leading-snug">
                Ethan Ipaye
              </h3>
              <p className="text-xs font-semibold text-brand-brown/50 mb-2">University of Georgia</p>
              <p className="text-xs sm:text-sm text-brand-brown/70 leading-relaxed">
                Recognized on his initiation into{" "}
                <span className="font-bold text-brand-brown">Omega Psi Phi Fraternity, Inc.</span>, reflecting his
                commitment to brotherhood, leadership, and service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BYEN Community Safety Fellowship CTA */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="notch-lg bg-brand-chili text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">
              Now Accepting Applications
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase mt-1 mb-2">
              BYEN Community Safety Fellowship
            </h3>
            <p className="text-sm text-white/90 leading-relaxed max-w-xl">
              A four-week leadership development experience equipping emerging leaders to advance community
              safety, address gun violence, and explore community violence intervention strategies — with
              virtual learning and an in-person convening in Memphis, Tennessee.
            </p>
          </div>
          <a
            href="https://forms.gle/WHFqdcfXMNkBsJ5N6"
            target="_blank"
            rel="noopener noreferrer"
            className="notch-md flex-shrink-0 inline-flex items-center gap-2 bg-white text-brand-chili hover:bg-brand-brown hover:text-white font-semibold uppercase tracking-wide text-xs py-3 px-6 transition-colors duration-200"
          >
            Apply Now
            <FiArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
