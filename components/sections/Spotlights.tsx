"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaStar } from "react-icons/fa";

const Spotlights = () => {
  return (
    <div className="relative w-full py-20 sm:py-24">
      {/* Chapter Spotlight + Member Spotlight */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="notch-lg bg-brand-brown text-white overflow-hidden flex"
          >
            <div className="w-28 sm:w-36 flex-shrink-0 relative">
              <Image
                src="/images/image7.jpg"
                alt="BYEN House at Morehouse College"
                fill
                sizes="144px"
                className="object-cover"
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
              <Image
                src="/ethan.jpeg"
                alt="Ethan Ipaye"
                fill
                sizes="144px"
                className="object-cover"
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
    </div>
  );
};

export default Spotlights;
