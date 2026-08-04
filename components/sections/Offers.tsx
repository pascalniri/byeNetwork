"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Verbatim from the brand guide, §2.2 Our Brand Pillars — BYEN's three
// official pillars (there is no "Empowerment" pillar in the guide).
const organizationPillars = [
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-brand-cream py-20 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 text-center">
        <span className="notch-sm inline-block bg-brand-brown text-white text-xs font-medium uppercase tracking-widest px-4 py-2">
          What Drives Us
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-brand-brown mt-4">
          Our Organization <span className="text-brand-chili">Pillars</span>
        </h2>

        <p className="text-sm text-brand-brown/70 leading-relaxed mt-4 max-w-2xl mx-auto">
          The Black Youth Empowerment Network is guided by three foundational pillars embedded into every program,
          partnership, and initiative we run.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 mt-12">
        <div className="flex flex-col lg:flex-row gap-3 lg:h-[420px]">
          {organizationPillars.map((pillar, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={pillar.title}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                animate={{ flexGrow: isActive ? 3 : 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`relative notch-lg lg:overflow-hidden cursor-pointer shadow-xl basis-auto lg:basis-0 min-h-[180px] lg:min-h-0 ${pillar.bg}`}
              >
                <div
                  className="absolute inset-0 opacity-[0.12] pointer-events-none"
                  style={{
                    backgroundImage: 'url("/branding/SVG/Pattern_DarkBrown.svg")',
                    backgroundRepeat: "repeat",
                    backgroundSize: "180px auto",
                  }}
                />

                <div className="relative h-full p-6 sm:p-8 flex flex-col justify-center lg:overflow-hidden">
                  <span className={`block text-xs font-semibold uppercase tracking-widest opacity-70 ${pillar.text}`}>
                    0{index + 1}
                  </span>
                  <h3 className={`font-bold uppercase text-xl sm:text-2xl mt-1 whitespace-nowrap ${pillar.text}`}>
                    {pillar.title}
                  </h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="mt-4"
                      >
                        <img
                          src="/branding/02_ Logos/Primary_Logo/SVG/Primary_Logo_DarkBrown.svg"
                          alt=""
                          aria-hidden
                          className="w-10 sm:w-12 mb-4 opacity-90"
                        />
                        <p className={`text-sm leading-relaxed max-w-md ${pillar.text} opacity-90`}>
                          {pillar.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
