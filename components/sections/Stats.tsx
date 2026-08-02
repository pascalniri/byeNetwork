"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 500, label: "Black Youth Connected Nationally", suffix: "+" },
  { number: 30, label: "States Reached", suffix: "+" },
  { number: 100, label: "Community Service Hours", suffix: "k" },
];

const StatRow = ({
  number,
  label,
  suffix = "",
}: {
  number: number;
  label: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const end = number;
      const increment = Math.ceil(end / (duration / 16));

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      className="flex items-baseline justify-between gap-6 py-5 border-b border-white/10 last:border-none"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-4xl sm:text-5xl font-bold text-brand-lime">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-sm text-brand-cream/80 text-right max-w-[10rem]">{label}</span>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="relative bg-brand-brown overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Photo side */}
        <div className="relative h-64 sm:h-80 lg:h-auto min-h-[320px]">
          <img
            src="/collaboration.jpg"
            alt="BYEN members collaborating"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "grayscale(1) contrast(1.1) brightness(0.9)" }}
          />
          <div className="absolute inset-0 bg-brand-brown mix-blend-multiply opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent lg:to-brand-brown/90 to-brand-brown/40" />
        </div>

        {/* Stats side */}
        <div className="relative px-6 sm:px-10 lg:px-16 py-14 sm:py-16 flex flex-col justify-center">
          <span className="notch-sm inline-block bg-brand-lime text-brand-brown text-xs font-medium uppercase tracking-widest px-4 py-2 w-fit">
            Our Impact
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold uppercase leading-tight text-white mt-4">
            Since <span className="text-brand-lime">Fall 2025</span>
          </h2>

          <div className="mt-6">
            {stats.map((stat, index) => (
              <StatRow key={index} number={stat.number} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
