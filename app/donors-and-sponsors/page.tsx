"use client";

import { motion } from "framer-motion";
import PhotoPageHero from "@/components/layout/PhotoPageHero";
import { FaChalkboardTeacher, FaGraduationCap, FaUniversity, FaHandsHelping, FaCoins, FaUsers } from "react-icons/fa";

const donateHref = "https://givebutter.com/4zAepQ";
const givingEmail = "giving@wearebyen.org";

const supportMakesPossible = [
  { icon: <FaChalkboardTeacher />, text: "Provide leadership and professional development experiences" },
  { icon: <FaGraduationCap />, text: "Connect members to internships, fellowships, scholarships, and conferences" },
  { icon: <FaUniversity />, text: "Strengthen existing chapters and expand to new campuses" },
  { icon: <FaHandsHelping />, text: "Support civic engagement and community-based initiatives" },
  { icon: <FaCoins />, text: "Reduce financial barriers to meaningful opportunities" },
  { icon: <FaUsers />, text: "Build a stronger national network of young Black leaders" },
];

const otherWaysToSupport = [
  "Event space",
  "Travel and lodging",
  "Conference registrations",
  "Meals and hospitality",
  "Technology and equipment",
  "Professional services",
  "Mentorship and career opportunities",
  "Employee volunteers and speakers",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Donors() {
  return (
    <div>
      <PhotoPageHero
        image="/resources.jpg"
        imagePosition="center 30%"
        eyebrow="Get Involved"
        title="Invest in Black Leadership"
        description="The Black Youth Empowerment Network is building America's network of young Black leaders."
        accent="pink"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Intro/CTA + What Your Support Makes Possible */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
        >
          <div>
            <p className="text-sm text-brand-brown/70 leading-relaxed mb-8">
              Support from donors and sponsors helps BYEN create leadership experiences, expand access to
              opportunity, strengthen collegiate chapters, and equip young people to make an impact in their
              communities.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={donateHref}
                target="_blank"
                rel="noopener noreferrer"
                className="notch-md inline-flex items-center gap-2 bg-brand-chili hover:bg-brand-brown text-white font-semibold uppercase tracking-wide text-xs py-3 px-6 transition-colors duration-200"
              >
                Donate to BYEN
              </a>
              <p className="text-sm text-brand-brown">
                Become a Sponsor:{" "}
                <a href={`mailto:${givingEmail}`} className="font-bold text-brand-chili hover:underline">
                  {givingEmail}
                </a>
              </p>
            </div>
          </div>

          <div className="notch-lg bg-brand-cream p-6 sm:p-8">
            <h2 className="text-lg font-bold uppercase text-brand-brown mb-2">What Your Support Makes Possible</h2>
            <p className="text-sm text-brand-brown/70 mb-5">Your investment helps BYEN:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {supportMakesPossible.map((item) => (
                <div key={item.text} className="notch-md bg-white p-4 flex items-start gap-3 shadow-sm">
                  <span className="text-brand-chili text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                  <span className="text-sm text-brand-brown/70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Make a Donation + Become a Sponsor */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
        >
          <div className="notch-lg bg-white border-t-4 border-brand-chili p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold uppercase text-brand-brown mb-4">Make a Donation</h2>
            <p className="text-sm text-brand-brown/70 leading-relaxed mb-2">
              Every contribution helps BYEN continue investing in the growth, leadership, and success of its
              members.
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed mb-6">
              Supporters can make a one-time gift or become recurring donors to help sustain BYEN&apos;s work
              throughout the year.
            </p>
            <a
              href={donateHref}
              target="_blank"
              rel="noopener noreferrer"
              className="notch-sm inline-flex items-center bg-brand-chili hover:bg-brand-brown text-white text-xs font-semibold uppercase tracking-wide py-3 px-6 transition-colors duration-200"
            >
              Donate Today
            </a>
          </div>

          <div className="notch-lg bg-white border-t-4 border-brand-ocean p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold uppercase text-brand-brown mb-4">Become a Sponsor</h2>
            <p className="text-sm text-brand-brown/70 leading-relaxed mb-4">
              Companies, foundations, institutions, and community partners can sponsor BYEN programs, events,
              fellowships, chapter initiatives, and member experiences.
            </p>
            <p className="text-sm text-brand-brown/70">
              To discuss sponsorship opportunities or personalized giving, email:{" "}
              <a href={`mailto:${givingEmail}`} className="font-bold text-brand-chili hover:underline">
                {givingEmail}
              </a>
            </p>
          </div>
        </motion.section>

        {/* Other Ways to Support */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center mb-16 notch-lg bg-brand-cream p-6 sm:p-10"
        >
          <div>
            <h2 className="text-lg font-bold uppercase text-brand-brown mb-2">Other Ways to Support BYEN</h2>
            <p className="text-sm text-brand-brown/70 mb-4">Organizations may also support the network through:</p>
            <p className="text-sm text-brand-brown/70">
              To discuss an in-kind contribution, email{" "}
              <a href={`mailto:${givingEmail}`} className="font-bold text-brand-chili hover:underline">
                {givingEmail}
              </a>
              .
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {otherWaysToSupport.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-brand-chili mr-2">•</span>
                <span className="text-sm text-brand-brown/70">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="notch-lg bg-brand-brown text-white p-8 sm:p-10 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase mb-4">Invest in What Comes Next</h2>
          <p className="text-sm text-brand-cream/80 leading-relaxed mb-2 max-w-2xl mx-auto">
            Young Black leaders already have the ideas, ambition, and ability to create change.
          </p>
          <p className="text-sm text-brand-cream/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Your support helps ensure they also have access to the relationships, resources, and experiences
            needed to move those ideas forward.
          </p>
          <a
            href={donateHref}
            target="_blank"
            rel="noopener noreferrer"
            className="notch-md inline-flex items-center gap-2 bg-brand-chili hover:bg-white text-white hover:text-brand-brown font-semibold uppercase tracking-wide text-xs py-3 px-6 transition-colors duration-200"
          >
            Donate to BYEN
          </a>
          <p className="text-xs text-brand-cream/70 mt-4">
            For sponsorship opportunities or personalized giving, contact{" "}
            <a href={`mailto:${givingEmail}`} className="text-brand-lime hover:underline">
              {givingEmail}
            </a>
            .
          </p>
        </motion.section>
      </div>
    </div>
  );
}
