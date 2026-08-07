"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
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
      <div className="container mx-auto px-4 sm:px-6 md:px-10 mt-5 sm:mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
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

export default Spotlights;
