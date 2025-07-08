import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ number, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const start = 0;
      const end = parseInt(number);
      const increment = Math.ceil(end / (duration / 16)); // 60fps
      
      let current = start;
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
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 20 
      }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#693e2d] to-[#985b3c] bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="mt-2 text-[15px] text-[#6C6A6A] text-center">{label}</span>
    </motion.div>
  );
};

export default function Stats() {
  const stats = [
    { number: 200, label: 'Black Youth Connected Nationally', suffix: '+' },
    { number: 25, label: 'States Reached', suffix: '+' },
    { number: 2500, label: 'Community Service Hours', suffix: '+' },
  ];

  return (
    <div className="py-16 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </div>
  );
}