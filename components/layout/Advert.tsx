"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Advert() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none flex justify-center"
        >
          <div className="notch-md bg-white border-t-4 sm:border-t-0 sm:border-l-4 border-brand-chili shadow-[0_0_40px_rgba(0,0,0,0.15)] p-4 sm:p-5 max-w-5xl w-full pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative">
            <div className="flex-1 text-xs sm:text-sm text-brand-brown/80 pr-6 sm:pr-0">
              <strong className="text-brand-chili block sm:inline mb-1 sm:mb-0">Exciting Updates Ahead: </strong>
              We&apos;re currently updating our website. Some information may be outdated as we work on
              improvements. Relaunching in Late Summer 2026. Questions? Contact{" "}
              <a href="mailto:info@wearebyen.org" className="text-brand-chili hover:underline font-semibold transition-colors">
                info@wearebyen.org
              </a>
              .
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end mt-2 sm:mt-0">
              <button
                onClick={closePopup}
                className="notch-sm bg-brand-brown hover:bg-brand-chili text-white px-6 py-2.5 sm:py-2 font-semibold uppercase tracking-wide text-xs transition-colors whitespace-nowrap shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                Got it
              </button>
            </div>
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 sm:hidden text-brand-brown/40 hover:text-brand-brown p-1 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
