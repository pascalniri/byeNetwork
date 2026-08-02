"use client";

import { GiLevelEndFlag, GiReceiveMoney } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { FaGlobe, FaUniversity } from "react-icons/fa";
import Faq from "@/components/sections/Faq";
import PageHero from "@/components/layout/PageHero";
import { motion } from "framer-motion";

const whyUs = [
  {
    id: 1,
    icon: <GiLevelEndFlag />,
    h2: "Leadership Development",
    p: "Participate in workshops, mentorship programs, and exclusive events designed to help you grow as a leader.",
  },
  {
    id: 2,
    icon: <HiUserGroup />,
    h2: "Networking Opportunities",
    p: "Connect with like-minded peers, professionals, and mentors who are as passionate about change as you are.",
  },
  {
    id: 3,
    icon: <GiReceiveMoney />,
    h2: "Empowerment Resources",
    p: "Access tools, resources, and support to help you on your journey of personal and professional growth.",
  },
];

const comparison = [
  { label: "Location", national: "Open to all U.S. youth", chapter: "Campus/community-based (select locations only)" },
  { label: "Commitment Level", national: "Flexible and virtual", chapter: "High engagement and in-person" },
  { label: "Community", national: "Large, national network", chapter: "Intimate, local cohort (25 members/class)" },
  { label: "Leadership", national: "National project opportunities", chapter: "Chapter leadership roles and planning" },
  { label: "Programming", national: "Online workshops, events, and service opportunities", chapter: "In-person events, service projects, and peer sessions" },
  { label: "Eligibility", national: "Open to all Black youth", chapter: "Requires application and selection process" },
];

export default function Membership() {
  return (
    <div>
      <PageHero
        eyebrow="Get Involved"
        title="Membership"
        description="The Black Youth Empowerment Network (BYEN) is more than an organization—it's a coalition of young Black leaders, creators, and change-makers dedicated to uplifting and transforming communities. Join BYEN and become part of a network that values empowerment, collaboration, and positive impact."
        accent="pink"
      />

      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 md:px-16 lg:px-24 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="notch-lg bg-brand-cream p-8 sm:p-10 text-center mb-16 w-full"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-4">Ready to Join?</h2>
          <p className="text-brand-brown/70 mb-6 max-w-2xl mx-auto leading-relaxed text-sm">
            Join BYEN and become part of a network that values empowerment, collaboration, and positive impact.
          </p>
          <a
            href="https://form.jotform.com/251785009779067"
            target="_blank"
            rel="noopener noreferrer"
            className="notch-md inline-flex items-center gap-2 bg-brand-chili hover:bg-brand-brown text-white font-semibold uppercase tracking-wide text-xs sm:text-sm py-3 px-6"
          >
            Become a Member
          </a>

          <div className="notch-sm bg-brand-yellow/20 border-l-4 border-brand-yellow p-4 mt-8">
            <p className="text-sm text-brand-brown">
              <span className="font-semibold">Applications Are Closed.</span>
            </p>
          </div>
        </motion.div>

        <h2 className="text-xl sm:text-2xl text-brand-brown font-bold uppercase">Why Join BYEN?</h2>
        <p className="text-sm mt-3 text-brand-brown/70 mb-12">Becoming a member means you&apos;ll have access to:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {whyUs.map((us) => (
            <div
              key={us.id}
              className="notch-md flex flex-col justify-center items-center text-center bg-white border-t-4 border-brand-chili px-4 py-10 shadow-lg"
            >
              <p className="text-5xl text-brand-chili">{us.icon}</p>
              <h3 className="text-sm font-bold uppercase text-brand-brown mt-4">{us.h2}</h3>
              <p className="text-xs text-brand-brown/70 md:w-[85%] mx-auto mt-2 leading-relaxed">{us.p}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 md:px-16 lg:px-24 py-16 sm:py-20 bg-brand-cream">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase text-brand-brown text-center">
          Membership <span className="text-brand-chili">Overview</span>
        </h2>
        <p className="text-sm leading-relaxed mt-4 text-brand-brown/70 md:w-[80%] mx-auto text-center">
          The Black Youth Empowerment Network (BYEN) offers two levels of membership designed to engage, develop,
          and uplift Black youth across the nation: National Membership and Chapter Membership. While both
          pathways offer access to BYEN&apos;s mission and resources, each serves a different purpose in the
          growth and engagement of our members.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full">
          <div className="notch-lg bg-white shadow-lg overflow-hidden border-t-4 border-brand-ocean hover:shadow-xl transition-shadow duration-300">
            <div className="bg-brand-ocean/10 p-6 flex items-center">
              <div className="notch-sm bg-brand-ocean p-4 mr-4">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold uppercase text-brand-brown">National Membership</h3>
            </div>
            <div className="p-6">
              <div className="mb-4 pb-3 border-b border-brand-brown/10">
                <p className="text-xs font-medium text-brand-brown/60">
                  Open to Black youth across the country. Rolling admissions every semester.
                </p>
              </div>

              <h4 className="text-sm font-bold uppercase text-brand-brown mb-2">Overview</h4>
              <p className="text-sm leading-relaxed text-brand-brown/70 mb-4">
                National Membership provides access to BYEN&apos;s broader network, virtual programming, and
                collaborative opportunities. It is designed for individuals who want to stay connected with
                BYEN&apos;s national movement, receive resources, and engage in meaningful projects—regardless
                of their physical location or school affiliation.
              </p>

              <h4 className="text-sm font-bold uppercase text-brand-brown mb-2">Membership Benefits</h4>
              <ul className="list-disc pl-5 text-sm leading-relaxed text-brand-brown/70 mb-4 space-y-1">
                <li>Access to virtual events, leadership trainings, and workshops</li>
                <li>Invitations to national campaigns, advocacy initiatives, and service projects</li>
                <li>Networking opportunities with members from across the country</li>
                <li>Monthly newsletters featuring updates, resources, and member spotlights</li>
                <li>Consideration for national features, interviews, and media opportunities</li>
                <li>First access to certain fellowships, internships, and application cycles</li>
              </ul>

              <h4 className="text-sm font-bold uppercase text-brand-brown mb-2">Ideal For</h4>
              <p className="text-sm leading-relaxed text-brand-brown/70">
                Students, creatives, and young leaders who want to stay engaged with BYEN, expand their network,
                and participate in programming remotely.
              </p>

              <a
                href="https://form.jotform.com/251785009779067"
                target="_blank"
                rel="noopener noreferrer"
                className="notch-md inline-flex items-center gap-2 bg-brand-chili hover:bg-brand-brown text-white font-semibold uppercase tracking-wide text-xs py-3 px-6 mt-6"
              >
                Become a Member
              </a>
            </div>
          </div>

          <div className="notch-lg bg-white shadow-lg overflow-hidden border-t-4 border-brand-green hover:shadow-xl transition-shadow duration-300">
            <div className="bg-brand-green/10 p-6 flex items-center">
              <div className="notch-sm bg-brand-green p-4 mr-4">
                <FaUniversity className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold uppercase text-brand-brown">Chapter Membership</h3>
            </div>
            <div className="p-6">
              <div className="mb-4 pb-3 border-b border-brand-brown/10">
                <p className="text-xs font-medium text-brand-brown/60">
                  Selective membership. Limited to 25 students per chapter, per academic class.
                </p>
              </div>

              <h4 className="text-sm font-bold uppercase text-brand-brown mb-2">Overview</h4>
              <p className="text-sm leading-relaxed text-brand-brown/70 mb-4">
                Chapter Membership offers a high-impact, in-person experience through local BYEN chapters
                established at select campuses and communities. It allows members to lead on the ground, plan
                events, participate in community service, and work collaboratively with other student leaders.
              </p>

              <h4 className="text-sm font-bold uppercase text-brand-brown mb-2">Membership Benefits</h4>
              <ul className="list-disc pl-5 text-sm leading-relaxed text-brand-brown/70 mb-4 space-y-1">
                <li>Participation in in-person meetings, workshops, and leadership retreats</li>
                <li>Opportunities to organize and lead chapter-specific initiatives and events</li>
                <li>Deeper mentorship from chapter advisors and national leadership</li>
                <li>Access to exclusive funding opportunities, stipends, and leadership roles</li>
                <li>Priority consideration for travel, conferences, and special programming</li>
                <li>A close-knit, supportive peer environment rooted in local impact</li>
              </ul>

              <h4 className="text-sm font-bold uppercase text-brand-brown mb-2">Current Chapters</h4>
              <ul className="list-disc pl-5 text-sm leading-relaxed text-brand-brown/70 mb-4 space-y-1">
                <li>Morehouse College</li>
                <li>University of Georgia</li>
                <li>(More campuses launching soon)</li>
              </ul>

              <h4 className="text-sm font-bold uppercase text-brand-brown mb-2">Ideal For</h4>
              <p className="text-sm leading-relaxed text-brand-brown/70">
                Students who are ready to lead in-person, engage in chapter-based collaboration, and actively
                bring BYEN&apos;s mission to life within their campus and surrounding community.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full">
          <h3 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown text-center mb-8">
            Choosing Your <span className="text-brand-chili">Path</span>
          </h3>

          <div className="notch-lg overflow-x-auto bg-white shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-brown">
                  <th className="p-4 text-left text-white text-xs uppercase tracking-widest"></th>
                  <th className="p-4 text-center text-white font-semibold text-xs uppercase tracking-widest">National Membership</th>
                  <th className="p-4 text-center text-white font-semibold text-xs uppercase tracking-widest">Chapter Membership</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-brand-brown/10 hover:bg-brand-cream/50">
                    <td className="p-4 font-semibold text-sm text-brand-brown">{row.label}</td>
                    <td className="p-4 text-center text-sm text-brand-brown/70">{row.national}</td>
                    <td className="p-4 text-center text-sm text-brand-brown/70">{row.chapter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full mt-16">
          <Faq />
        </div>
      </div>
    </div>
  );
}
