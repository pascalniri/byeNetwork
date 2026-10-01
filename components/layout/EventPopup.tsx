"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";

const REGISTER_URL = "https://forms.gle/ojdxbQBpZkVGjiLA6";

export default function EventPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-brand-brown/80 z-[9997] flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="notch-lg bg-brand-chili p-0.5 shadow-2xl max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="notch-lg-inner bg-white p-6 sm:p-10 text-center">
              <button
                onClick={close}
                className="absolute top-4 right-4 text-brand-brown/40 hover:text-brand-brown transition-colors"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              <span className="notch-sm inline-block bg-brand-lime text-brand-brown text-xs font-bold uppercase tracking-widest px-3 py-1 mb-5">
                478 to SpelHouse
              </span>

              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-3">
                The College Exposure Experience
              </h2>

              <p className="text-sm text-brand-brown/70 leading-relaxed mb-8">
                Join Black Youth Empowerment Network &amp; Overcame &amp; Overcoming on October 15 for a college
                exposure experience at Morehouse College and Spelman College. Explore campus life, connect with
                current students, and discover new possibilities for your future.
              </p>

              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="notch-md inline-flex items-center gap-2 bg-brand-chili hover:bg-brand-brown text-white text-xs font-semibold uppercase tracking-wide py-3 px-8 transition-colors duration-200"
              >
                Learn More &amp; Register
                <FiArrowRight />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
