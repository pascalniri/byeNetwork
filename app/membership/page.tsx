"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PhotoPageHero from "@/components/layout/PhotoPageHero";
import { FaSeedling, FaHandshake, FaLightbulb, FaBullhorn, FaHandsHelping, FaMedal } from "react-icons/fa";

const becomeMemberHref = "https://form.jotform.com/251785009779067";

const memberCommitments = [
  { icon: <FaSeedling />, text: "Growing personally and professionally" },
  { icon: <FaHandshake />, text: "Building meaningful relationships with other young Black leaders" },
  { icon: <FaLightbulb />, text: "Creating solutions to challenges facing their communities" },
  { icon: <FaBullhorn />, text: "Using their talents, knowledge, and influence to make an impact" },
  { icon: <FaHandsHelping />, text: "Supporting the success and development of others" },
  { icon: <FaMedal />, text: "Leading with integrity, excellence, and purpose" },
];

const memberBenefits = [
  "Leadership development programs and workshops",
  "Internships, scholarships, fellowships, and career opportunities",
  "Mentorship and exposure to established professionals",
  "National conferences, convenings, and special experiences",
  "Community service and civic engagement initiatives",
  "National and chapter leadership opportunities",
  "A growing network of ambitious young Black leaders",
  "Platforms to share their ideas, work, and perspectives",
  "Collaborative opportunities with nonprofit, corporate, educational, and community partners",
];

const strongMembersDemonstrate = [
  "Ambition and a desire to improve",
  "Commitment to the Black community",
  "Interest in leadership and service",
  "Curiosity and openness to new perspectives",
  "Accountability and professionalism",
  "A willingness to contribute to the network",
  "A genuine desire to create positive change",
];

export default function Membership() {
  return (
    <div>
      <PhotoPageHero
        image="/become.jpg"
        eyebrow="Get Involved"
        title="Join the Network"
        description="Building America's Network of Young Black Leaders"
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
            The Black Youth Empowerment Network brings together some of the nation&apos;s most promising, driven,
            and community-minded young Black leaders.
          </p>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-4">
            BYEN members are not defined only by titles, r&eacute;sum&eacute;s, or past accomplishments. They are
            defined by their ambition, character, willingness to grow, and commitment to creating meaningful
            change.
          </p>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-8">
            Our members are students, organizers, advocates, entrepreneurs, creatives, professionals, and emerging
            leaders who believe their success should strengthen the communities around them.
          </p>
          <a
            href={becomeMemberHref}
            target="_blank"
            rel="noopener noreferrer"
            className="notch-md inline-flex items-center gap-2 bg-brand-chili hover:bg-brand-brown text-white font-semibold uppercase tracking-wide text-xs py-3 px-6 transition-colors duration-200"
          >
            Become a Member
          </a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 notch-lg bg-brand-cream p-8 sm:p-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-4 text-center">
            One Network. Two Membership Types.
          </h2>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            Every BYEN member belongs to one national network and gains access to a broader community of young
            Black leaders, opportunities, resources, relationships, and leadership experiences. Members engage
            with BYEN through one of two membership types:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="notch-md bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold uppercase text-brand-brown mb-3">At-Large Members</h3>
              <p className="text-sm text-brand-brown/70 leading-relaxed">
                At-Large Membership is designed for young Black leaders who want to participate in BYEN&apos;s
                national network but do not currently attend a school or live in a community with an established
                BYEN chapter. At-Large Members can engage in national programming, virtual experiences, leadership
                development, special initiatives, member opportunities, and connections with leaders from across
                the country.
              </p>
            </div>
            <div className="notch-md bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold uppercase text-brand-brown mb-3">Chapter Members</h3>
              <p className="text-sm text-brand-brown/70 leading-relaxed">
                Chapter Members belong to an officially recognized BYEN chapter on their college campus or within
                their local community. Chapter Members receive access to the broader national network while also
                participating in local meetings, programs, service projects, social experiences, and leadership
                opportunities led through their chapter.
              </p>
            </div>
          </div>

          <p className="text-sm text-brand-brown/70 mt-6 text-center">
            Regardless of membership type, every member is part of the same BYEN community.
          </p>
          <p className="text-sm font-bold text-brand-brown mt-2 text-center">
            One mission. One network. Multiple ways to engage.
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
            The BYEN Member
          </h2>
          <p className="text-sm text-brand-brown/70 leading-relaxed mt-6 mb-4">
            BYEN members represent the next generation of Black leadership.
          </p>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-6">
            They are ambitious enough to imagine something better, disciplined enough to develop themselves, and
            courageous enough to take action. Our members are committed to:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {memberCommitments.map((item) => (
              <div key={item.text} className="notch-md bg-brand-cream p-4 flex items-start gap-3">
                <span className="text-brand-chili text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                <span className="text-sm text-brand-brown/70">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-brand-brown">
            BYEN is not simply a network people join. It is a community members help build.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 notch-lg bg-brand-cream p-8 sm:p-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-4">Why Join BYEN?</h2>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-6">
            Membership connects young Black leaders to the people, experiences, and opportunities that can help
            them expand what they believe is possible. BYEN members may receive access to:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {memberBenefits.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-brand-chili mr-2">•</span>
                <span className="text-sm text-brand-brown/70">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-brand-brown/60 italic">
            Opportunities may vary based on availability, eligibility, location, and program requirements.
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
            What Makes BYEN Different?
          </h2>
          <div className="space-y-4 mt-6">
            <p className="text-sm text-brand-brown/70 leading-relaxed">
              BYEN is built by young Black leaders, for young Black leaders.
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed">
              We understand that talent is everywhere, but access, support, exposure, and opportunity are not
              always distributed equally.
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed">
              BYEN exists to help close that gap by creating a national community where ambitious young people can
              find support, strengthen their leadership, build authentic relationships, and gain access to
              experiences that move them forward.
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed">Our goal is not only to identify emerging leaders.</p>
            <p className="text-sm font-bold text-brand-brown">
              Our goal is to invest in them, connect them, and help position them to transform their campuses,
              careers, communities, and the country.
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
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-4">Who Belongs in BYEN?</h2>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-4">
            BYEN is for young Black leaders who are serious about their development and committed to something
            larger than themselves.
          </p>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-4">
            You do not need to have everything figured out. You do not need the perfect r&eacute;sum&eacute; or an
            impressive title.
          </p>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-6">
            You should be ready to learn, contribute, collaborate, and grow. Strong members demonstrate:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {strongMembersDemonstrate.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-brand-chili mr-2">•</span>
                <span className="text-sm text-brand-brown/70">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-brand-brown/70">
            Membership is selective because the strength of BYEN depends on the quality, commitment, and character
            of the people within it.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6 border-b-2 border-brand-chili inline-block pb-2">
            The Membership Experience
          </h2>
          <p className="text-sm text-brand-brown/70 leading-relaxed mt-6 mb-6">
            BYEN creates opportunities for members to grow across three core areas:
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="notch-md bg-white border-t-4 border-brand-chili p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-brand-brown mb-2">Member Development</h3>
              <p className="text-sm text-brand-brown/70">
                Strengthening the personal, professional, and leadership capacity of every member.
              </p>
            </div>
            <div className="notch-md bg-white border-t-4 border-brand-ocean p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-brand-brown mb-2">Civic Engagement</h3>
              <p className="text-sm text-brand-brown/70">
                Connecting members to the issues affecting their communities and creating opportunities to
                participate in advocacy, public service, civic action, and community decision-making.
              </p>
            </div>
            <div className="notch-md bg-white border-t-4 border-brand-green p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-brand-brown mb-2">Community Empowerment</h3>
              <p className="text-sm text-brand-brown/70">
                Equipping members to turn their ideas, talents, and leadership into meaningful local and national
                impact.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-4 border-b-2 border-brand-chili inline-block pb-2">
            More Than a Network
          </h2>
          <div className="space-y-4 mt-6">
            <p className="text-sm text-brand-brown/70 leading-relaxed">
              BYEN is a community of young Black leaders who challenge, support, encourage, and open doors for one
              another.
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed">
              Members do more than receive opportunities. They share resources, build relationships, develop
              ideas, lead initiatives, and contribute to the continued growth of the network.
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed">
              Whether participating as an At-Large Member or through a BYEN chapter, every member has a role in
              shaping what BYEN becomes.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="notch-lg bg-brand-brown text-white p-8 sm:p-10 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase mb-4">Ready to Join?</h2>
          <p className="text-sm text-brand-cream/80 leading-relaxed mb-2 max-w-2xl mx-auto">
            BYEN is building a powerful national community of young Black leaders who are prepared to grow, lead,
            and create change.
          </p>
          <p className="text-sm text-brand-cream/80 leading-relaxed mb-8">
            The next generation of leadership is already here. We are bringing it together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={becomeMemberHref}
              target="_blank"
              rel="noopener noreferrer"
              className="notch-md inline-flex items-center justify-center gap-2 bg-brand-chili hover:bg-white text-white hover:text-brand-brown font-semibold uppercase tracking-wide text-xs py-3 px-6 transition-colors duration-200"
            >
              Become a Member
            </a>
            <Link href="/chapters" className="notch-md group bg-white p-0.5 transition-colors duration-200">
              <span className="notch-md-inner flex items-center justify-center h-full gap-2 bg-brand-brown group-hover:bg-white text-white group-hover:text-brand-brown font-semibold uppercase tracking-wide text-xs py-3 px-6 transition-colors duration-200">
                Explore Our Chapters
              </span>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
