"use client";

import { motion, type Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/layout/PageHero";

const news = [
  {
    id: 1,
    image: "/atlanta-news.png",
    title: "Black Youth Empowerment Network Featured on Atlanta News First",
    description:
      "Founder Jay'Shun Mathews recently appeared on Atlanta News First to represent the Black Youth Empowerment Network, using his voice to shed light on the ongoing gun violence epidemic affecting communities across the country. During the segment, he spoke passionately about the importance of youth-led advocacy and raised awareness about a powerful event organized by the Network in partnership with Students Demand Action. The event served as both a call to action and a safe space for young people to unite, heal, and demand change. Jay'Shun's appearance underscores BYEN's unwavering commitment to empowering Black youth to lead movements that address urgent social issues and reimagine a safer, more just future.",
    link: "https://www.atlantanewsfirst.com/2025/03/29/local-leaders-address-gun-violence-awareness-morehouse-college-event/",
  },
  {
    id: 2,
    image: "/collegiate-chapters.jpg",
    title: "Black Youth Empowerment Network Launches Collegiate Chapters",
    description:
      "BYEN is proud to announce the official launch of chapters at Morehouse College and the University of Georgia. This expansion marks a powerful next step in our mission to equip Black youth with the tools, community, and platform to lead with purpose and create lasting change. Each chapter will serve as a hub for leadership development, advocacy, and innovation and rooted in our core values of empowerment, collaboration, impact, and intentional leadership.",
    link: "https://www.instagram.com/wearebyen/",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function InThePress() {
  return (
    <div>
      <PageHero
        eyebrow="News & Blog"
        title="In the Press"
        description="Latest news coverage and press features highlighting BYEN's impact and initiatives."
        accent="green"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {news.map((newsItem) => (
            <motion.div
              variants={item}
              key={newsItem.id}
              className="notch-lg bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              <div className="h-[240px] overflow-hidden flex-shrink-0">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col p-6 flex-grow">
                <h2 className="text-lg font-bold text-brand-brown mb-3 group-hover:text-brand-chili transition-colors duration-300">
                  {newsItem.title}
                </h2>
                <p className="text-sm text-brand-brown/70 line-clamp-4 mb-5">{newsItem.description}</p>
                <a
                  href={newsItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notch-sm mt-auto self-start inline-flex items-center bg-brand-chili hover:bg-brand-brown text-white text-xs font-semibold uppercase tracking-wide py-3 px-6 transition-colors duration-200"
                >
                  Read More
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <a
            href="https://www.instagram.com/wearebyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="notch-md group bg-brand-brown p-0.5 transition-colors duration-200"
          >
            <span className="notch-md-inner flex items-center justify-center h-full gap-2 bg-white group-hover:bg-brand-brown text-brand-brown group-hover:text-white text-xs font-semibold uppercase tracking-wide py-3 px-8 transition-colors duration-200">
              View More Press
              <FiArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
