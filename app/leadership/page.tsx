"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
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
  FaQuoteLeft,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import leaders from "@/lib/leaders";
import type { Leader } from "@/types/leader";
import PageHero from "@/components/layout/PageHero";

const departments = [
  {
    id: "executive",
    name: "Executive Leadership",
    icon: <FaUserTie />,
    description: "The visionary leaders who guide BYEN's mission, strategy, and overall direction.",
  },
  {
    id: "finance",
    name: "Finance & Development",
    icon: <FaChartLine />,
    description:
      "Oversees financial planning, fundraising efforts, and resource development to sustain and grow BYEN.",
  },
  {
    id: "marketing",
    name: "Marketing & Branding",
    icon: <FaBullhorn />,
    description:
      "Creates and maintains BYEN's brand identity, manages communications, and promotes our mission and initiatives.",
  },
  {
    id: "communication",
    name: "Communication",
    icon: <FaPaintBrush />,
    description: "Drives visual strategy, design, and brand communication across all platforms.",
  },
  {
    id: "memberRelations",
    name: "Membership & Engagement",
    icon: <FaUsers />,
    description:
      "Responsible for member engagement, recruitment, and ensuring a positive experience for all BYEN members.",
  },
  {
    id: "programming",
    name: "Programming & Events",
    icon: <FaCalendarAlt />,
    description:
      "Plans and executes all BYEN events, workshops, and initiatives to fulfill our mission and engage our community.",
  },
  {
    id: "policy",
    name: "Policy & Advocacy",
    icon: <FaUniversity />,
    description:
      "Develops initiatives that empower youth through violence prevention, policy formulation, and strategic advocacy.",
  },
  {
    id: "chapter",
    name: "Chapter Development",
    icon: <FaStar />,
    description: "Supports local chapter growth, operational guidance, and leadership development.",
  },
];

const spotlightVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

function getTeamForDept(deptId: string): Leader[] {
  if (deptId === "executive") {
    return leaders.filter((leader) => leader.department.toLowerCase().includes("executive"));
  }
  const dept = departments.find((d) => d.id === deptId);
  if (!dept) return [];
  const deptNameNormalized = dept.name.toLowerCase().replace(/\s+/g, "");
  return leaders.filter((leader) => {
    const leaderDeptNormalized = leader.department.toLowerCase().replace(/\s+/g, "");
    return (
      leaderDeptNormalized.includes(deptNameNormalized) || deptNameNormalized.includes(leaderDeptNormalized)
    );
  });
}

export default function Leadership() {
  const [activeRole, setActiveRole] = useState("executive");
  const [activeLeaderId, setActiveLeaderId] = useState<string | null>(null);

  const currentTeam = getTeamForDept(activeRole);
  const spotlight = currentTeam.find((l) => l.id === activeLeaderId) ?? currentTeam[0] ?? null;
  const activeDept = departments.find((d) => d.id === activeRole)!;

  useEffect(() => {
    setActiveLeaderId(currentTeam[0]?.id ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRole]);

  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Our Leadership"
        description="Meet the dedicated team of leaders who guide the Black Youth Empowerment Network's mission and vision — organized by the departments that keep BYEN moving."
        accent="ocean"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">
          {/* Department rail */}
          <div className="lg:sticky lg:top-28">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveRole(dept.id)}
                  className={`flex-shrink-0 flex items-center gap-3 notch-md px-4 py-3 text-left text-xs font-bold uppercase tracking-wide transition-colors duration-200 whitespace-nowrap lg:whitespace-normal ${
                    activeRole === dept.id
                      ? "bg-brand-brown text-white shadow-md"
                      : "bg-white text-brand-brown/60 border border-brand-brown/10 hover:border-brand-brown/30 hover:text-brand-brown"
                  }`}
                >
                  <span className={activeRole === dept.id ? "text-brand-lime" : "text-brand-chili"}>{dept.icon}</span>
                  <span>{dept.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Spotlight + roster */}
          <div>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeRole + "-desc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-brand-brown/70 mb-8 max-w-2xl"
              >
                {activeDept.description}
              </motion.p>
            </AnimatePresence>

            {spotlight ? (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={spotlight.id}
                    variants={spotlightVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="notch-lg bg-brand-brown/10 p-0.5 shadow-xl"
                  >
                    <div className="notch-lg-inner bg-white overflow-hidden grid md:grid-cols-2">
                      <div className="relative h-[280px] md:h-full min-h-[320px] overflow-hidden">
                        <img
                          src={spotlight.image}
                          alt={spotlight.name}
                          className="w-full h-full object-cover"
                          style={{ filter: "grayscale(0.3) contrast(1.05)" }}
                        />
                        <div className="absolute inset-0 bg-brand-brown mix-blend-multiply opacity-20" />
                        <span className="notch-sm absolute bottom-4 left-4 bg-brand-lime text-brand-brown text-xs font-bold uppercase tracking-wide px-3 py-1">
                          {spotlight.status === "director" ? "National Director" : "Support Team"}
                        </span>
                      </div>

                      <div className="p-6 sm:p-8 flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown">{spotlight.name}</h3>
                        <p className="text-sm text-brand-chili font-semibold mt-1 mb-4">{spotlight.title}</p>

                        <p className="text-sm text-brand-brown/70 leading-relaxed line-clamp-5">{spotlight.longBio}</p>

                        {spotlight.empowermentQuote && (
                          <div className="mt-5 notch-md bg-brand-cream p-4 relative">
                            <FaQuoteLeft className="text-brand-chili/30 text-xl mb-1" />
                            <p className="text-sm italic text-brand-brown/80 line-clamp-3">
                              {spotlight.empowermentQuote}
                            </p>
                          </div>
                        )}

                        <div className="mt-auto pt-6 flex items-center justify-between flex-wrap gap-4">
                          <div className="flex space-x-3">
                            {spotlight.socialMedia.ig !== "None" && (
                              <a href={spotlight.socialMedia.ig} target="_blank" rel="noopener noreferrer" className="text-brand-brown/50 hover:text-brand-chili transition-colors">
                                <RiInstagramFill size={20} />
                              </a>
                            )}
                            {spotlight.socialMedia.x !== "None" && spotlight.socialMedia.x !== ".." && (
                              <a href={spotlight.socialMedia.x} target="_blank" rel="noopener noreferrer" className="text-brand-brown/50 hover:text-brand-chili transition-colors">
                                <BsTwitterX size={18} />
                              </a>
                            )}
                            {spotlight.socialMedia.linkedIn !== "None" && (
                              <a href={spotlight.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer" className="text-brand-brown/50 hover:text-brand-chili transition-colors">
                                <FaLinkedin size={18} />
                              </a>
                            )}
                            {spotlight.socialMedia.facebook !== "None" && (
                              <a href={spotlight.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-brown/50 hover:text-brand-chili transition-colors">
                                <BsFacebook size={18} />
                              </a>
                            )}
                            <a href={`mailto:${spotlight.socialMedia.email}`} className="text-brand-brown/50 hover:text-brand-chili transition-colors">
                              <MdMarkEmailUnread size={20} />
                            </a>
                          </div>

                          <Link
                            href={`/leadership/${spotlight.id}`}
                            className="notch-sm inline-flex items-center gap-2 bg-brand-chili hover:bg-brand-brown text-white text-xs font-semibold uppercase tracking-wide py-2.5 px-5 transition-colors"
                          >
                            View Full Profile
                            <FiArrowRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {currentTeam.length > 1 && (
                  <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                    {currentTeam.map((person) => (
                      <button
                        key={person.id}
                        onClick={() => setActiveLeaderId(person.id)}
                        className={`flex-shrink-0 w-20 sm:w-24 group ${person.id === spotlight.id ? "" : "opacity-60 hover:opacity-100"} transition-opacity`}
                      >
                        <div
                          className={`notch-sm p-0.5 w-20 h-20 sm:w-24 sm:h-24 transition-colors ${
                            person.id === spotlight.id ? "bg-brand-chili" : "bg-transparent"
                          }`}
                        >
                          <div className="notch-sm-inner w-full h-full overflow-hidden">
                            <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <p className="text-[11px] font-semibold text-brand-brown/70 mt-2 text-center leading-tight line-clamp-2">
                          {person.name}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="notch-lg bg-brand-cream text-center py-16">
                <p className="text-sm text-brand-brown/60">Leadership information coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
