"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const news = [
  {
    tag: "TV Feature",
    image: "/atlanta-news.png",
    title: "Black Youth Empowerment Network Featured on Atlanta News First",
    description:
      "Founder Jay'Shun Mathews appeared on Atlanta News First to shed light on the ongoing gun violence epidemic affecting communities across the country, spotlighting a powerful youth-led advocacy event held in partnership with Students Demand Action.",
    link: "https://www.atlantanewsfirst.com/2025/03/29/local-leaders-address-gun-violence-awareness-morehouse-college-event/",
  },
  {
    tag: "Expansion",
    image: "/collegiate-chapters.jpg",
    title: "BYEN Launches Collegiate Chapters at Morehouse & UGA",
    description:
      "A powerful next step in equipping Black youth with the tools, community, and platform to lead with purpose — each chapter a local hub for leadership development, advocacy, and innovation.",
    link: "https://www.instagram.com/wearebyen/",
  },
];

const tickerText =
  "BYEN FEATURED ON ATLANTA NEWS FIRST     •     NEW COLLEGIATE CHAPTERS AT MOREHOUSE & UGA     •     JOIN THE MOVEMENT     •     ";

const Latest = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Ticker */}
      <div className="relative bg-brand-brown text-brand-cream py-2.5 overflow-hidden whitespace-nowrap border-b-4 border-brand-chili">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-xs font-semibold uppercase tracking-widest mx-4">
              {tickerText}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="notch-sm inline-block bg-brand-ocean text-white text-xs font-medium uppercase tracking-widest px-4 py-2">
              Newsroom
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-brand-brown mt-4">
              BYEN <span className="text-brand-chili">In The News</span>
            </h2>
          </div>

          <Link
            href="/in-the-press"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-brown border-b-2 border-brand-brown/30 pb-1 hover:border-brand-chili hover:text-brand-chili transition-colors duration-200"
          >
            All press coverage
            <FiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured story — big cover tile */}
          <motion.a
            href={news[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group relative lg:col-span-3 notch-lg overflow-hidden shadow-xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-end"
          >
            <img
              src={news[0].image}
              alt={news[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-brand-brown/60 to-transparent" />

            <div className="relative p-6 sm:p-9">
              <span className="notch-sm inline-block bg-brand-chili text-white text-xs font-medium uppercase tracking-widest px-3 py-1.5 mb-4">
                {news[0].tag}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight text-white mb-3 max-w-2xl">
                {news[0].title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-none">
                {news[0].description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white mt-5 border-b border-white/40 pb-1 group-hover:border-white transition-colors duration-200">
                Read the story
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </div>
          </motion.a>

          {/* Secondary story — clean editorial card */}
          <motion.a
            href={news[1].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative lg:col-span-2 notch-lg overflow-hidden shadow-xl bg-brand-cream flex flex-col"
          >
            <div className="h-44 sm:h-48 overflow-hidden">
              <img
                src={news[1].image}
                alt={news[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <span className="notch-sm inline-block bg-brand-green text-white text-xs font-medium uppercase tracking-widest px-3 py-1.5 mb-3 w-fit">
                {news[1].tag}
              </span>
              <h3 className="text-lg sm:text-xl font-bold uppercase leading-tight text-brand-brown mb-2">
                {news[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-brown/70 leading-relaxed">{news[1].description}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-brown mt-auto pt-5 border-t border-brand-brown/15 group-hover:text-brand-chili transition-colors duration-200">
                Read the story
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </div>
          </motion.a>
        </div>

        <div className="flex sm:hidden justify-center mt-8">
          <Link
            href="/in-the-press"
            className="notch-sm inline-flex items-center gap-2 bg-brand-brown text-white text-xs font-semibold uppercase tracking-widest px-5 py-3"
          >
            All press coverage
            <FiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Latest;
