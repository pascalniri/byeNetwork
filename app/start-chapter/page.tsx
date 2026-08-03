"use client";

import { motion } from "framer-motion";
import PhotoPageHero from "@/components/layout/PhotoPageHero";
import { FaUsers, FaLightbulb, FaHandshake, FaStar, FaBolt, FaMedal, FaTree } from "react-icons/fa";

const expressInterestHref = "mailto:startachapter@wearebyen.org";

const whatByenCouldBecome = [
  { icon: <FaUsers />, text: "A gathering place for ambitious and community-minded students" },
  { icon: <FaLightbulb />, text: "A platform for students to create programs around issues they care about" },
  { icon: <FaHandshake />, text: "A bridge between Black students, alumni, professionals, and community partners" },
  { icon: <FaStar />, text: "A source of leadership and collaboration across campus" },
  { icon: <FaBolt />, text: "A space where students turn conversations into action" },
  { icon: <FaMedal />, text: "An organization known for service, excellence, and meaningful impact" },
  { icon: <FaTree />, text: "A lasting institution that future students can continue to grow" },
];

const foundingLeadersEstablish = [
  "The chapter's culture and identity",
  "Its reputation across campus",
  "The programs and traditions it becomes known for",
  "The relationships it develops",
  "The expectations future leaders will inherit",
  "The impact it leaves behind",
];

const founderReadiness = [
  "Bring together a committed group of students",
  "Take initiative and follow through on ideas",
  "Build relationships across their campus",
  "Represent BYEN with maturity and professionalism",
  "Work collaboratively with students from different backgrounds and experiences",
  "Develop future leaders who can continue the chapter's work",
  "Build for long-term impact rather than short-term recognition",
];

export default function StartChapter() {
  return (
    <div>
      <PhotoPageHero
        image="/collegiate-chapters.jpg"
        eyebrow="Get Involved"
        title="Bring BYEN to Your Campus"
        description="Build What Your Campus Is Missing"
        accent="pink"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-4">
            Some students join organizations. Others build the organizations their campuses need.
          </p>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-4">
            Creating BYEN chapters at colleges and universities across the country is an extension of our
            commitment to <span className="font-semibold text-brand-brown">building America&apos;s network of young Black leaders</span>.
          </p>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-8">
            Starting a BYEN chapter gives students the opportunity to create a space where young Black leaders can
            connect, collaborate, serve, and shape the culture of their campus. It is a chance to build a strong
            student community, create meaningful experiences, and establish an organization that continues long
            after you graduate.
          </p>
          <a
            href={expressInterestHref}
            className="notch-md inline-flex items-center gap-2 bg-brand-chili hover:bg-brand-brown text-white font-semibold uppercase tracking-wide text-xs py-3 px-6 transition-colors duration-200"
          >
            Express Interest in Starting a Chapter
          </a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-4 border-b-2 border-brand-chili inline-block pb-2">
            More Than Another Campus Organization
          </h2>
          <div className="space-y-4 mt-6">
            <p className="text-sm text-brand-brown/70 leading-relaxed">
              A BYEN chapter should become a trusted space for Black leadership, collaboration, service, and
              action.
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed">
              Each chapter has the opportunity to understand what its campus needs, bring students together around
              a shared vision, and create experiences that strengthen both the campus and surrounding community.
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed">
              Every chapter develops its own identity while remaining connected to one national network.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 notch-lg bg-brand-cream p-8 sm:p-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6">
            What Could BYEN Become on Your Campus?
          </h2>
          <p className="text-sm text-brand-brown/70 mb-6">A BYEN chapter could become:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {whatByenCouldBecome.map((item) => (
              <div key={item.text} className="notch-md bg-white p-4 flex items-start gap-3 shadow-sm">
                <span className="text-brand-chili text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                <span className="text-sm text-brand-brown/70">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-brown/70">
            Every campus is different. Strong chapters understand their environment and build with intention.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-4 border-b-2 border-brand-chili inline-block pb-2">
            Founding a Chapter Means Building a Legacy
          </h2>
          <p className="text-sm text-brand-brown/70 leading-relaxed mt-6 mb-6">
            Founding a BYEN chapter gives students the opportunity to shape an organization from its beginning.
            Founding leaders help establish:
          </p>
          <ul className="space-y-2 mb-6">
            {foundingLeadersEstablish.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-brand-chili mr-2">•</span>
                <span className="text-sm text-brand-brown/70">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-brand-brown/70">
            This work requires more than a good idea. It takes consistency, collaboration, responsibility, and a
            willingness to turn a vision into something others believe in.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 notch-lg bg-brand-cream p-8 sm:p-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-4">
            Who Should Consider Starting a Chapter?
          </h2>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-6">
            BYEN is looking for students who are prepared to take ownership of building something meaningful.
            Prospective chapter founders should be ready to:
          </p>
          <ul className="space-y-2 mb-6">
            {founderReadiness.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-brand-chili mr-2">•</span>
                <span className="text-sm text-brand-brown/70">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-brand-brown/70 mb-2">You do not need to be the most well-known student on campus.</p>
          <p className="text-sm text-brand-brown/70">
            You should be someone who can earn trust, bring people together, and help build something greater than
            yourself.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6 border-b-2 border-brand-chili inline-block pb-2">
            Is Your Campus Ready?
          </h2>
          <p className="text-sm text-brand-brown/70 leading-relaxed mt-6 mb-4 text-left">
            A strong chapter begins with more than one interested student. It begins with a shared vision, a
            committed founding group, and a clear understanding of why BYEN belongs on your campus.
          </p>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-4 text-left">
            BYEN considers new chapter opportunities based on student interest, campus readiness, organizational
            capacity, and alignment with the national network.
          </p>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-8 text-left">
            Submitting an interest form allows you to introduce your campus, your prospective founding team, and
            your vision for a potential BYEN chapter.
          </p>

          <div className="notch-lg bg-brand-brown text-white p-8">
            <p className="text-sm mb-3">Questions about bringing BYEN to your campus?</p>
            <a href={expressInterestHref} className="text-brand-lime font-bold hover:underline text-sm">
              startachapter@wearebyen.org
            </a>
            <p className="text-xs text-brand-cream/70 italic mt-4">
              Chapter opportunities are limited and evaluated individually.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
