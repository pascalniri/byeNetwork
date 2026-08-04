"use client";

import { motion } from "framer-motion";

const fadeFromLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const fadeFromRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

const About = () => {
  return (
    <section className="relative bg-white py-20 sm:py-4 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            variants={fadeFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="hidden sm:block absolute -left-4 -top-4 w-24 h-24 bg-brand-yellow notch-sm rotate-6" />
            <div className="relative notch-lg overflow-hidden shadow-xl">
              <img
                src="/aboutImg.jpg"
                alt="BYEN members at a community event"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(1) contrast(1.1) brightness(0.95)" }}
              />
              <div className="absolute inset-0 bg-brand-brown mix-blend-multiply opacity-40" />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div variants={fadeFromRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <span className="notch-sm inline-block bg-brand-ocean text-white text-xs font-medium uppercase tracking-widest px-4 py-2">
              Who We Are
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-brand-brown mt-4">
              Welcome <span className="text-brand-chili">to BYEN</span>
            </h2>

            <p className="text-sm text-brand-brown/70 leading-relaxed mt-4 max-w-xl">
              BYEN is a community of advocates, changemakers, and trailblazers united not by status or title, but by
              a shared energy for change, growth, and leadership — a home for young Black people ready to build,
              lead, and push their communities forward.
            </p>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-brand-cream notch-md border-t-4 border-brand-chili p-5 shadow-sm">
                <span className="notch-sm inline-block bg-brand-chili text-white text-xs font-medium uppercase tracking-widest px-3 py-1 mb-3">
                  Mission
                </span>
                <p className="text-sm text-brand-brown/80 leading-relaxed">
                  BYEN connects Black youth to opportunities, resources, and a supportive community, strengthening
                  their personal and professional development and equipping them to create meaningful change.
                </p>
              </div>

              <div className="bg-brand-cream notch-md border-t-4 border-brand-ocean p-5 shadow-sm">
                <span className="notch-sm inline-block bg-brand-ocean text-white text-xs font-medium uppercase tracking-widest px-3 py-1 mb-3">
                  Vision
                </span>
                <p className="text-sm text-brand-brown/80 leading-relaxed">
                  A future where Black youth are fully supported in becoming leaders who thrive professionally,
                  socially, intellectually, and beyond.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
