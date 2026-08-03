"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaAward, FaStar } from "react-icons/fa";

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

const stories = [
  {
    tag: "Advocacy",
    tagBg: "bg-brand-chili",
    tagText: "text-white",
    image: "/gun-violence-awareness.jpg",
    title: "Gun Violence Awareness Day at Morehouse College",
    href: "/events",
  },
  {
    tag: "Community",
    tagBg: "bg-brand-ocean",
    tagText: "text-white",
    image: "/feed-homeless.jpg",
    title: "BYEN Members Feed Atlanta's Homeless Community",
    href: "/events",
  },
  {
    tag: "Workshops",
    tagBg: "bg-brand-yellow",
    tagText: "text-brand-brown",
    image: "/financial-literacy.png",
    title: "Financial Literacy 101 Ft. Luvswallet",
    href: "/events",
  },
];

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

      {/* Story cards overlapping the hero's bottom edge */}
      <div className="relative z-20 -mt-16 sm:-mt-20 md:-mt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              >
                <Link
                  href={story.href}
                  className="group block bg-white shadow-xs overflow-hidden border border-black/10 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="h-36 sm:h-40 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <span
                      className={`notch-sm inline-block ${story.tagBg} ${story.tagText} text-xs font-medium uppercase tracking-widest px-3 py-1 mb-3`}
                    >
                      {story.tag}
                    </span>
                    <h3 className="text-sm font-semibold text-brand-brown leading-snug group-hover:text-brand-chili transition-colors duration-200">
                      {story.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Chapter Spotlight + Member Spotlight */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="notch-lg bg-brand-brown text-white p-8 sm:p-10"
          >
            <div className="notch-sm inline-flex items-center justify-center bg-brand-lime w-12 h-12 mb-5">
              <FaAward className="text-brand-brown text-xl" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">Chapter Spotlight</span>
            <h3 className="text-xl font-bold uppercase mt-2 mb-4">BYEN House at Morehouse College</h3>
            <p className="text-sm text-brand-cream/80 leading-relaxed mb-3">
              BYEN House at Morehouse College was recognized with a{" "}
              <span className="font-bold text-white">Lux Award for Best Registered Student Organization</span>,
              celebrating the chapter&apos;s leadership, campus presence, and commitment to developing and
              empowering young Black leaders.
            </p>
            <p className="text-sm text-brand-cream/80 leading-relaxed mb-4">
              Through meaningful programming, community building, and service, BYEN House continues to demonstrate
              what it looks like when members turn vision into impact.
            </p>
            <p className="text-sm font-semibold text-brand-lime">
              Congratulations to BYEN House for continuing to set the standard for chapter excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="notch-lg bg-brand-cream p-8 sm:p-10"
          >
            <div className="notch-sm inline-flex items-center justify-center bg-brand-chili w-12 h-12 mb-5">
              <FaStar className="text-white text-xl" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-chili">Member Spotlight</span>
            <h3 className="text-xl font-bold uppercase text-brand-brown mt-2 mb-1">Ethan Ipaye</h3>
            <p className="text-xs font-semibold text-brand-brown/60 mb-4">University of Georgia</p>
            <p className="text-sm text-brand-brown/70 leading-relaxed mb-3">
              BYEN proudly recognizes Ethan Ipaye on his initiation into{" "}
              <span className="font-bold text-brand-brown">Omega Psi Phi Fraternity, Inc.</span>, through the Beta
              Zeta Chapter at the University of Georgia.
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed mb-4">
              Ethan&apos;s achievement reflects his continued commitment to brotherhood, leadership, scholarship,
              and service — representing the driven, community-minded young Black leaders who make our national
              network exceptional.
            </p>
            <p className="text-sm font-semibold text-brand-chili">
              Congratulations, Ethan, on this meaningful achievement and the beginning of this new chapter.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
