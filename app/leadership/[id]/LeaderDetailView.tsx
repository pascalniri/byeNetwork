"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowLeft, BsX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import type { Leader } from "@/types/leader";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function LeaderDetailView({ leader }: { leader: Leader | null }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (!leader) {
    return (
      <div className="font-montserrat mt-[13rem] max-w-screen-2xl w-[90%] mx-auto pb-20 flex flex-col items-center min-h-[50vh]">
        <div className="text-[#693e2d] text-2xl mb-4">Leader not found</div>
        <Link href="/leadership" className="bg-[#693e2d] text-white px-6 py-3 rounded-full flex items-center">
          <BsArrowLeft className="mr-2" /> Back to Leadership
        </Link>
      </div>
    );
  }

  return (
    <div className="font-montserrat mt-[13rem] max-w-screen-2xl w-[90%] mx-auto pb-20">
      <Link href="/leadership" className="inline-flex items-center text-[#693e2d] hover:text-[#985b3c] mb-8 transition-colors">
        <BsArrowLeft className="mr-2" /> Back to Leadership
      </Link>

      <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
        <div className="relative h-[300px] md:h-[400px]">
          <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <div className="text-sm uppercase tracking-wider mb-2">{leader.department}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{leader.name}</h1>
            <p className="text-xl opacity-90">{leader.title}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <motion.section variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#693e2d] mb-6 pb-2 border-b border-gray-200">Biography</h2>
            <div className="space-y-4">
              {leader.longBio.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-[15px] leading-[24px] text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {leader.status === "director" && (
            <motion.section variants={fadeIn} initial="hidden" animate="visible" className="bg-[#693e2d] bg-opacity-10 rounded-xl p-6 md:p-8 border-l-4 border-[#693e2d]">
              <h2 className="text-xl font-bold text-[#693e2d] mb-4">What does empowering Black youth mean to you?</h2>
              <p className="text-[16px] italic text-gray-700">{leader.empowermentQuote}</p>
            </motion.section>
          )}

          <motion.section variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#693e2d] mb-6 pb-2 border-b border-gray-200">Key Achievements</h2>
            <ul className="space-y-3">
              {leader.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#693e2d] mr-2 mt-1">•</span>
                  <span className="text-[15px] leading-[24px] text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {leader.gallery && leader.gallery.length > 0 && (
            <motion.section variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#693e2d] mb-6 pb-2 border-b border-gray-200">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {leader.gallery.map((image, idx) => (
                  <div key={idx} className="relative h-[180px] rounded-lg overflow-hidden cursor-pointer group">
                    <img
                      src={image}
                      alt={`${leader.name} - Gallery ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 group-hover:scale-110"
                      onClick={() => openImageModal(image)}
                    />
                    <div
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center cursor-pointer"
                      onClick={() => openImageModal(image)}
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                        Click to view
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        <div className="space-y-8">
          <motion.section variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-[#693e2d] mb-4 pb-2 border-b border-gray-200">Connect</h2>
            <div className="flex space-x-4 mt-4">
              <a href={leader.socialMedia.ig} target="_blank" rel="noopener noreferrer" className="bg-[#693e2d] text-white p-3 rounded-full hover:bg-[#985b3c] transition-colors">
                <RiInstagramFill size={20} />
              </a>
              <a href={leader.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer" className="bg-[#693e2d] text-white p-3 rounded-full hover:bg-[#985b3c] transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href={`mailto:${leader.socialMedia.email}`} className="bg-[#693e2d] text-white p-3 rounded-full hover:bg-[#985b3c] transition-colors">
                <MdMarkEmailUnread size={20} />
              </a>
            </div>
          </motion.section>

          <motion.section variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-[#693e2d] mb-4 pb-2 border-b border-gray-200">Quick Facts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Role</h3>
                <p className="text-[#693e2d]">{leader.title}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Department</h3>
                <p className="text-[#693e2d]">{leader.department}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Education</h3>
                <p className="text-[#693e2d]">{leader.education}</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-[99999] flex items-center justify-center p-4"
            onClick={closeImageModal}
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
                src={selectedImage}
                alt={`${leader.name} - Full View`}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                style={{
                  maxWidth: "95vw",
                  maxHeight: "95vh",
                  width: "auto",
                  height: "auto",
                }}
              />
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
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
