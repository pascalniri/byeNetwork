"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AUTO_ADVANCE_MS = 5000;

// Verbatim from the brand guide, §2.2 Our Brand Pillars — BYEN's three
// official pillars (there is no "Empowerment" pillar in the guide).
const coreValues = [
  {
    title: "Impact",
    bg: "bg-brand-yellow",
    text: "text-brand-brown",
    description:
      "Impact is the difference between good intentions and real change — it's proof that effort translates into results people can see and feel. Without a clear, measurable impact, purpose risks becoming just a promise instead of a reality.",
  },
  {
    title: "Collaboration",
    bg: "bg-brand-green",
    text: "text-brand-brown",
    description:
      "No meaningful progress happens in isolation — collaboration is what transforms individual effort into collective impact. It builds trust across differences and ensures that solutions reflect the needs of everyone they're meant to serve.",
  },
  {
    title: "Leadership",
    bg: "bg-brand-chili",
    text: "text-white",
    description:
      "Leadership is the foundation for lasting change — without it, good ideas stall and communities lose momentum. It's what turns potential into direction, and individuals into people others can trust and follow.",
  },
];

const Offers = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % coreValues.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [active]);

  const current = coreValues[active];

  return (
    <section className="relative bg-brand-cream py-20 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 text-center">
        <span className="notch-sm inline-block bg-brand-brown text-white text-xs font-medium uppercase tracking-widest px-4 py-2">
          What Drives Us
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-brand-brown mt-4">
          Our Brand <span className="text-brand-chili">Pillars</span>
        </h2>

        <p className="text-sm text-brand-brown/70 leading-relaxed mt-4 max-w-2xl mx-auto">
          The Black Youth Empowerment Network is guided by three foundational pillars embedded into every program,
          partnership, and initiative we run.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 mt-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-3 lg:gap-10 items-stretch">
          {/* Selector list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {coreValues.map((value, index) => {
              const isActive = index === active;
              return (
                <button
                  key={value.title}
                  onClick={() => setActive(index)}
                  className={`relative flex-shrink-0 lg:flex-shrink text-left px-4 sm:px-5 py-4 notch-sm transition-colors duration-300 ${
                    isActive ? `${value.bg} ${value.text}` : "bg-white text-brand-brown/50 hover:text-brand-brown"
                  }`}
                >
                  <span className="block text-xs font-semibold uppercase tracking-widest opacity-70">
                    0{index + 1}
                  </span>
                  <span className="block font-bold uppercase text-sm sm:text-base mt-0.5 whitespace-nowrap">
                    {value.title}
                  </span>

                  {isActive && (
                    <motion.div
                      key={active}
                      className="absolute bottom-0 left-0 h-[3px] bg-brand-brown/40"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                      style={{ transformOrigin: "left", width: "100%" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Stage */}
          <div className="relative notch-lg overflow-hidden min-h-[340px] sm:min-h-[400px] shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute inset-0 ${current.bg} p-8 sm:p-14 flex flex-col justify-center`}
              >
                <div
                  className="absolute inset-0 opacity-[0.12] pointer-events-none"
                  style={{
                    backgroundImage: 'url("/branding/SVG/Pattern_DarkBrown.svg")',
                    backgroundRepeat: "repeat",
                    backgroundSize: "180px auto",
                  }}
                />

                <motion.img
                  initial={{ scale: 0.4, opacity: 0, rotate: -20 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 150, damping: 13 }}
                  src="/branding/02_ Logos/Primary_Logo/SVG/Primary_Logo_DarkBrown.svg"
                  alt=""
                  aria-hidden
                  className="relative w-14 sm:w-20 mb-6"
                />

                <h3 className={`relative font-bold uppercase text-2xl sm:text-3xl leading-tight mb-4 ${current.text}`}>
                  {current.title}
                </h3>

                <p className={`relative text-sm leading-relaxed max-w-xl ${current.text} opacity-90`}>
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
