"use client";

import { motion } from "framer-motion";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaUniversity, FaLightbulb, FaChalkboardTeacher, FaCalendarAlt } from "react-icons/fa";
import PhotoPageHero from "@/components/layout/PhotoPageHero";

const waysToPartner = [
  {
    title: "Host a Chapter",
    icon: <FaUniversity />,
    description:
      "We partner with schools and community organizations to help launch and sustain local BYEN chapters. Hosts provide meeting space, guidance, and local context, while BYEN provides structure, training, and national support.",
  },
  {
    title: "Co-Design Programs or Campaigns",
    icon: <FaLightbulb />,
    description:
      "From mental health initiatives to civic engagement drives, we welcome collaboration with organizations that want to align on mission and create innovative, youth-centered solutions.",
  },
  {
    title: "Provide Mentorship or Workshops",
    icon: <FaChalkboardTeacher />,
    description:
      "If your organization can offer coaching, technical assistance, or professional development to BYEN members, we would love to connect.",
  },
  {
    title: "Support Events or Retreats",
    icon: <FaCalendarAlt />,
    description:
      "We're always looking for partners to support our leadership retreats, youth summits, and training days through sponsorships, speakers, and in-kind support.",
  },
];

export default function WaysToPartner() {
  return (
    <div>
      <PhotoPageHero
        image="/events.jpg"
        eyebrow="Get Involved"
        title="Become a Partner!"
        description="Fuel the Movement. Invest in the Future of Black Youth."
        accent="pink"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="notch-lg bg-white p-6 shadow-lg">
              <h3 className="text-base sm:text-lg font-bold uppercase text-brand-brown mb-4 flex items-center">
                <MdOutlineHorizontalRule className="mr-2 text-xl text-brand-chili" />
                Why Partner With BYEN?
              </h3>
              <p className="mb-4 text-brand-brown/70 text-sm">
                BYEN is a national, youth-led organization committed to leadership development, community
                service, and advocacy.
              </p>
              <p className="font-medium mb-3 text-brand-brown/70 text-sm">We work with partners who:</p>
              <ul className="space-y-2 text-brand-brown/70 text-sm">
                {[
                  "Believe in youth-led change",
                  "Serve or support Black youth ages 16 to 24",
                  "Share our values of equity, collaboration, and cultural relevance",
                  "Want to co-create programs, campaigns, or events with lasting impact",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-brand-chili mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="notch-lg bg-white p-6 shadow-lg">
              <h3 className="text-base sm:text-lg font-bold uppercase text-brand-brown mb-4 flex items-center">
                <MdOutlineHorizontalRule className="mr-2 text-xl text-brand-chili" />
                Our Impact at a Glance
              </h3>
              <ul className="space-y-2 text-brand-brown/70 text-sm">
                {[
                  "200+ Black youth engaged nationally since Spring 2025",
                  "Active 10+ chapter network growing along the Southeast and East Coast",
                  "Programs led by youth, shaped by lived experience",
                  "Track record of organizing, advocacy, and community building",
                  "Partnerships with HBCUs, schools, and youth-led groups",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-brand-chili mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="notch-lg bg-brand-cream p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6 text-center">Ways to Partner</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {waysToPartner.map((item) => (
                <div key={item.title} className="notch-md bg-white p-6 shadow-sm">
                  <div className="text-brand-chili text-2xl mb-3">{item.icon}</div>
                  <h4 className="text-base font-bold uppercase text-brand-brown mb-2">{item.title}</h4>
                  <p className="text-brand-brown/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="notch-lg bg-brand-cream mt-8 text-center p-8 shadow-lg">
            <p className="text-sm sm:text-base text-brand-brown mb-6">
              If you&apos;re ready to partner with a national movement that centers youth leadership, local
              impact, and cultural power — we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://form.jotform.com/251690471333152"
                target="_blank"
                rel="noopener noreferrer"
                className="notch-md text-white bg-brand-chili hover:bg-brand-brown text-xs font-semibold uppercase tracking-wide py-3 px-6 transition-colors duration-200 text-center"
              >
                Become a Partner
              </a>
              <a href="mailto:info@wearebyen.org" className="notch-md group bg-brand-brown p-0.5 transition-colors duration-200">
                <span className="notch-md-inner flex items-center justify-center h-full bg-white group-hover:bg-brand-brown text-brand-brown group-hover:text-white text-xs font-semibold uppercase tracking-wide py-2.5 px-6 transition-colors duration-200 text-center">
                  Email Us
                </span>
              </a>
            </div>
            <p className="mt-4 text-sm text-brand-brown/70">
              Or email us at{" "}
              <a href="mailto:partners@wearebyen.org" className="underline hover:text-brand-chili">
                partners@wearebyen.org
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
