"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowLeft, BsX, BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import type { Leader } from "@/types/leader";

const isRealLink = (value: string) => value && value !== "None" && value !== "..";

export default function LeaderDetailView({ leader }: { leader: Leader | null }) {
  const [activeImage, setActiveImage] = useState(leader?.gallery?.[0] ?? leader?.image ?? "");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!leader) {
    return (
      <div className="pt-16 max-w-screen-2xl w-[90%] mx-auto pb-20 flex flex-col items-center min-h-[50vh]">
        <div className="text-brand-brown text-xl font-bold uppercase mb-4">Leader not found</div>
        <Link href="/leadership" className="notch-sm bg-brand-chili text-white text-xs font-semibold uppercase tracking-wide px-6 py-3 flex items-center">
          <BsArrowLeft className="mr-2" /> Back to Leadership
        </Link>
      </div>
    );
  }

  const gallery = leader.gallery?.length ? leader.gallery : [leader.image];

  return (
    <div className="lg:flex lg:min-h-screen">
      {/* Photo panel */}
      <div className="relative lg:w-2/5 lg:h-screen lg:sticky lg:top-0 h-[70vh] sm:h-[80vh]">
        <img
          src={activeImage}
          alt={leader.name}
          onClick={() => setIsModalOpen(true)}
          className="w-full h-full object-cover object-center cursor-zoom-in"
          style={{ filter: "grayscale(0.15) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-brand-brown/20 to-transparent" />

        <Link
          href="/leadership"
          className="absolute top-6 left-6 notch-sm inline-flex items-center gap-2 bg-white/90 backdrop-blur text-brand-brown text-xs font-semibold uppercase tracking-wide px-4 py-2 hover:bg-white transition-colors"
        >
          <BsArrowLeft /> Leadership
        </Link>

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
          <span className="notch-sm inline-block bg-brand-lime text-brand-brown text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4">
            {leader.department}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase leading-none mb-2">{leader.name}</h1>
          <p className="text-sm sm:text-base opacity-90 mb-6">{leader.title}</p>

          <div className="flex items-center gap-3 mb-6">
            {isRealLink(leader.socialMedia.ig) && (
              <a href={leader.socialMedia.ig} target="_blank" rel="noopener noreferrer" className="notch-sm bg-white/10 hover:bg-brand-chili p-2.5 transition-colors">
                <RiInstagramFill size={18} />
              </a>
            )}
            {isRealLink(leader.socialMedia.x) && (
              <a href={leader.socialMedia.x} target="_blank" rel="noopener noreferrer" className="notch-sm bg-white/10 hover:bg-brand-chili p-2.5 transition-colors">
                <BsTwitterX size={16} />
              </a>
            )}
            {isRealLink(leader.socialMedia.linkedIn) && (
              <a href={leader.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer" className="notch-sm bg-white/10 hover:bg-brand-chili p-2.5 transition-colors">
                <FaLinkedin size={16} />
              </a>
            )}
            {isRealLink(leader.socialMedia.facebook) && (
              <a href={leader.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="notch-sm bg-white/10 hover:bg-brand-chili p-2.5 transition-colors">
                <BsFacebook size={16} />
              </a>
            )}
            <a href={`mailto:${leader.socialMedia.email}`} className="notch-sm bg-white/10 hover:bg-brand-chili p-2.5 transition-colors">
              <MdMarkEmailUnread size={18} />
            </a>
          </div>

          {gallery.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-12 h-12 notch-sm p-0.5 transition-colors ${
                    img === activeImage ? "bg-brand-lime" : "bg-white/30 hover:bg-white/70"
                  }`}
                >
                  <div className="notch-sm-inner w-full h-full overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content column */}
      <div className="lg:w-3/5 px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          {leader.status === "director" && leader.empowermentQuote && (
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <FaQuoteLeft className="text-brand-chili/30 text-3xl mb-3" />
              <p className="text-lg sm:text-xl font-medium italic text-brand-brown leading-snug">
                {leader.empowermentQuote}
              </p>
              <span className="block mt-3 text-xs font-bold uppercase tracking-widest text-brand-chili">
                On empowering Black youth
              </span>
            </motion.blockquote>
          )}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-chili mb-4">Biography</h2>
            <div className="space-y-4">
              {leader.longBio.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-sm leading-relaxed text-brand-brown/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-chili mb-6">Key Achievements</h2>
            <ul className="space-y-4">
              {leader.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="notch-sm flex-shrink-0 w-8 h-8 bg-brand-cream text-brand-brown text-xs font-bold flex items-center justify-center">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-brand-brown/70 pt-1.5">{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="notch-lg bg-brand-cream p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          >
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-brown/50 mb-1">Role</h3>
              <p className="text-sm font-semibold text-brand-brown">{leader.title}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-brown/50 mb-1">Department</h3>
              <p className="text-sm font-semibold text-brand-brown">{leader.department}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-brown/50 mb-1">Education</h3>
              <p className="text-sm font-semibold text-brand-brown">{leader.education}</p>
            </div>
          </motion.div>

          <Link
            href="/leadership"
            className="notch-md inline-flex items-center gap-2 bg-brand-brown hover:bg-brand-chili text-white text-xs font-semibold uppercase tracking-wide py-3 px-6 transition-colors"
          >
            Meet the Rest of the Team
            <FiArrowRight />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-brown/95 z-[99999] flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt={`${leader.name} - Full View`}
                className="max-w-full max-h-full w-auto h-auto object-contain notch-lg shadow-2xl"
                style={{ maxWidth: "95vw", maxHeight: "95vh", width: "auto", height: "auto" }}
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="notch-sm absolute top-4 right-4 bg-white text-brand-brown p-2 shadow-lg hover:bg-brand-cream transition-colors duration-200 z-10"
              >
                <BsX size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
