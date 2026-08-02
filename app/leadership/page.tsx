"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdMarkEmailUnread, MdOutlineHorizontalRule } from "react-icons/md";
import {
  FaUsers,
  FaCalendarAlt,
  FaChartLine,
  FaUniversity,
  FaBullhorn,
  FaUserTie,
  FaPaintBrush,
  FaStar,
  FaLinkedin,
} from "react-icons/fa";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import leaders from "@/lib/leaders";
import type { Leader } from "@/types/leader";

const departments = [
  {
    id: "executive",
    name: "Executive Leadership",
    icon: <FaUserTie className="text-2xl" />,
    description: "The visionary leaders who guide BYEN's mission, strategy, and overall direction.",
  },
  {
    id: "finance",
    name: "Finance & Development",
    icon: <FaChartLine className="text-2xl" />,
    description:
      "Oversees financial planning, fundraising efforts, and resource development to sustain and grow BYEN.",
  },
  {
    id: "marketing",
    name: "Marketing & Branding",
    icon: <FaBullhorn className="text-2xl" />,
    description:
      "Creates and maintains BYEN's brand identity, manages communications, and promotes our mission and initiatives.",
  },
  {
    id: "communication",
    name: "Communication",
    icon: <FaPaintBrush className="text-2xl" />,
    description: "Drives visual strategy, design, and brand communication across all platforms.",
  },
  {
    id: "memberRelations",
    name: "Membership & Engagement",
    icon: <FaUsers className="text-2xl" />,
    description:
      "Responsible for member engagement, recruitment, and ensuring a positive experience for all BYEN members.",
  },
  {
    id: "programming",
    name: "Programming & Events",
    icon: <FaCalendarAlt className="text-2xl" />,
    description:
      "Plans and executes all BYEN events, workshops, and initiatives to fulfill our mission and engage our community.",
  },
  {
    id: "policy",
    name: "Policy & Advocacy",
    icon: <FaUniversity className="text-2xl" />,
    description:
      "Develops initiatives that empower youth through violence prevention, policy formulation, and strategic advocacy.",
  },
  {
    id: "chapter",
    name: "Chapter Development",
    icon: <FaStar className="text-2xl" />,
    description: "Supports local chapter growth, operational guidance, and leadership development.",
  },
];

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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const menuItemVariants: Variants = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { x: -20, opacity: 0, transition: { duration: 0.3 } },
  hover: { x: 5, transition: { duration: 0.2 } },
};

const personCardVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  exit: { scale: 0.95, opacity: 0, transition: { duration: 0.3 } },
};

export default function Leadership() {
  const [activeRole, setActiveRole] = useState("executive");
  const [selectedPerson, setSelectedPerson] = useState<Leader | null>(null);

  useEffect(() => {
    setSelectedPerson(null);
  }, [activeRole]);

  const handleRoleChange = (role: string) => {
    setActiveRole(role);
  };

  const getCurrentTeam = (): Leader[] => {
    if (activeRole === "executive") {
      return leaders.filter((leader) => leader.department.toLowerCase().includes("executive"));
    }

    const activeDept = departments.find((dept) => dept.id === activeRole);
    if (activeDept) {
      const deptNameNormalized = activeDept.name.toLowerCase().replace(/\s+/g, "");
      return leaders.filter((leader) => {
        const leaderDeptNormalized = leader.department.toLowerCase().replace(/\s+/g, "");
        return (
          leaderDeptNormalized.includes(deptNameNormalized) ||
          deptNameNormalized.includes(leaderDeptNormalized)
        );
      });
    }
    return [];
  };

  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[9rem]">
        <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p>OUR LEADERSHIP</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
          Meet the dedicated team of leaders who guide the Black Youth Empowerment Network's mission and vision.
          Our leadership team is committed to creating opportunities, fostering growth, and empowering the next generation of Black leaders.
        </p>
      </div>

      <div className="font-montserrat mt-[5rem] max-w-screen-2xl w-[90%] mx-auto pb-20">
        <div className="flex flex-col">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex flex-wrap justify-center gap-1">
              {departments.map((dept) => (
                <motion.div
                  key={dept.id}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover="hover"
                  variants={menuItemVariants}
                >
                  <button
                    onClick={() => handleRoleChange(dept.id)}
                    className={`flex items-center px-4 py-3 text-sm lg:text-base font-medium whitespace-nowrap transition-all duration-300 border-b-2 ${
                      activeRole === dept.id
                        ? "border-[#693e2d] text-[#693e2d]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <span
                        className={`mr-2 transition-colors duration-300 ${
                          activeRole === dept.id ? "text-[#693e2d]" : "text-gray-400"
                        }`}
                      >
                        {dept.icon}
                      </span>
                      <span>{dept.name}</span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8">
            <div className="mb-8 border-b border-gray-200 pb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {departments.map(
                    (dept) =>
                      activeRole === dept.id && (
                        <div key={dept.id}>
                          <h2 className="text-2xl font-bold text-[#693e2d] mb-2 flex items-center gap-2">
                            {dept.icon}
                            <span>{dept.name}</span>
                          </h2>
                          <p className="text-[#6C6A6A]">{dept.description}</p>
                        </div>
                      )
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mb-8">
              {["marketing", "programming", "executive", "memberRelations"].includes(activeRole) ? (
                <>
                  <h3 className="text-xl font-semibold mb-6">National Directors</h3>
                  <AnimatePresence>
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
                    >
                      {getCurrentTeam()
                        .filter((person) => person.status === "director")
                        .map((person, index) => (
                          <Link key={index} href={`/leadership/${person.id}`}>
                            <motion.div
                              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                            >
                              <div className="h-[240px] overflow-hidden">
                                <img
                                  src={person.image}
                                  alt={person.name}
                                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                                />
                              </div>
                              <div className="p-4">
                                <h4 className="font-semibold text-[#693e2d]">{person.name}</h4>
                                <p className="text-sm text-gray-600">{person.title}</p>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                    </motion.div>
                  </AnimatePresence>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-6">
                    {getCurrentTeam().some((leader) => leader.status === "director")
                      ? "National Directors"
                      : "Support Team"}
                  </h3>
                  <AnimatePresence>
                    {getCurrentTeam().length > 0 ? (
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {getCurrentTeam().map((person, index) => (
                          <Link key={index} href={`/leadership/${person.id}`}>
                            <motion.div
                              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                            >
                              <div className="h-[240px] overflow-hidden">
                                <img
                                  src={person.image}
                                  alt={person.name}
                                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                                />
                              </div>
                              <div className="p-4">
                                <h4 className="font-semibold text-[#693e2d]">{person.name}</h4>
                                <p className="text-sm text-gray-600">{person.title}</p>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 bg-gray-50 rounded-xl"
                      >
                        <p className="text-gray-500">Leadership information coming soon.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>

            <AnimatePresence>
              {selectedPerson && (
                <motion.div
                  key={selectedPerson.name}
                  variants={personCardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-[300px] md:h-auto">
                      <img
                        src={selectedPerson.image}
                        alt={selectedPerson.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-[#693e2d]">{selectedPerson.name}</h3>
                          <p className="text-gray-600 mb-4">{selectedPerson.title}</p>
                        </div>
                        <button
                          onClick={() => setSelectedPerson(null)}
                          className="text-gray-400 hover:text-gray-600 p-1"
                        >
                          ✕
                        </button>
                      </div>

                      <p className="text-[15px] leading-[22px] text-[#6C6A6A] mb-4">{selectedPerson.longBio}</p>

                      <div className="mt-4">
                        <h4 className="font-bold mb-2">What does empowering Black youth mean to you?</h4>
                        <p className="text-[15px] italic text-[#6C6A6A] mb-4">{selectedPerson.empowermentQuote}</p>

                        <Link
                          href={`/leadership/${selectedPerson.id}`}
                          className="inline-block mt-2 bg-[#693e2d] text-white py-2 px-4 rounded-md hover:bg-[#985b3c] transition-colors"
                        >
                          View Full Profile
                        </Link>
                      </div>

                      <div className="flex space-x-3 mt-6">
                        <a href={selectedPerson.socialMedia.ig} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
                          <RiInstagramFill size={22} />
                        </a>
                        <a href={selectedPerson.socialMedia.x} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
                          <BsTwitterX size={20} />
                        </a>
                        <a href={selectedPerson.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
                          <FaLinkedin size={20} />
                        </a>
                        <a href={selectedPerson.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
                          <BsFacebook size={20} />
                        </a>
                        <a href={`mailto:${selectedPerson.socialMedia.email}`} className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
                          <MdMarkEmailUnread size={22} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
