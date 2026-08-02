"use client";

import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import PageHero from "@/components/layout/PageHero";

export default function Donors() {
  return (
    <div>
      <PageHero
        eyebrow="Get Involved"
        title="Become a Donor or Sponsor"
        description="Fuel the Movement. Invest in the Future of Black Youth."
        accent="pink"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="notch-lg bg-brand-cream p-8 shadow-lg border-l-4 border-brand-chili"
          >
            <h2 className="text-base sm:text-lg font-bold text-brand-brown mb-6">
              BYEN is one of the few national organizations led entirely by Black youth, for Black youth. With
              over 200 members across 25 states and growing, our chapters on campuses and in communities provide
              the foundation for connection, leadership, and meaningful action.
            </h2>

            <p className="text-brand-brown/70 mb-4 font-medium text-sm">Through your donation, you help us:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Grow to more campuses and communities",
                "Provide tools, training, and travel for young leaders",
                "Sustain culturally rooted programs that build pride and purpose",
                "Expand a national network of youth leadership that is powerful, intentional, and grounded in community",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-brand-chili mr-2">•</span>
                  <span className="text-brand-brown/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-base sm:text-lg mt-10 font-bold text-brand-brown mb-6">What We Offer</h2>
            <ul className="space-y-3">
              {[
                "Leadership training grounded in culture, purpose, and service",
                "High-impact events centered on civic engagement, wellness, and youth power",
                "Mentorship pipelines that turn passion into sustainable action",
                "A growing, supportive network of changemakers across the country",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-brand-chili mr-2">✓</span>
                  <span className="text-brand-brown/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-8 text-center">Ways to Give</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="notch-lg bg-white p-6 shadow-md">
                <h3 className="text-base font-bold uppercase text-brand-brown mb-3">Make a Donation</h3>
                <p className="text-brand-brown/70 text-sm mb-4">
                  Support our work with a one-time or monthly contribution. Every gift fuels our programs and
                  expands our impact.
                </p>
                <a
                  href="https://givebutter.com/4zAepQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notch-sm inline-flex items-center bg-brand-chili hover:bg-brand-brown text-white text-xs font-semibold uppercase tracking-wide py-3 px-6 transition-colors duration-200"
                >
                  Donate Now
                </a>
              </div>

              <div className="notch-lg bg-white p-6 shadow-md">
                <h3 className="text-base font-bold uppercase text-brand-brown mb-3">Become a Sponsor</h3>
                <p className="text-brand-brown/70 text-sm">
                  Partner with us on specific initiatives such as our leadership programs and civic engagement
                  campaigns. Sponsorships can be customized to align with your organization&apos;s mission and
                  impact goals.
                </p>
              </div>

              <div className="notch-lg bg-white p-6 shadow-md">
                <h3 className="text-base font-bold uppercase text-brand-brown mb-3">Corporate and Foundation Giving</h3>
                <p className="text-brand-brown/70 text-sm">
                  We welcome meaningful partnerships with brands and funders who believe in equity, education, and
                  youth-led innovation. Let&apos;s build something powerful together.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="notch-lg bg-brand-cream p-8 shadow-lg text-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-4">Ready to Make a Difference?</h2>
            <p className="text-brand-brown/70 mb-8 max-w-2xl mx-auto leading-relaxed text-sm">
              If you believe in the brilliance, vision, and leadership of Black youth, this is your moment to
              invest in more than a cause. You are investing in a generation.
            </p>

            <div className="notch-sm bg-brand-yellow/20 border-l-4 border-brand-yellow p-4 mb-8">
              <div className="flex items-center justify-center">
                <MdOutlineEmail className="text-brand-brown text-xl mr-3 flex-shrink-0" />
                <p className="text-sm text-brand-brown text-left">
                  <span className="font-semibold">For sponsorships, partnerships, or custom giving opportunities, contact us at </span>
                  <a href="mailto:giving@wearebyen.org" className="text-brand-chili hover:underline">
                    giving@wearebyen.org
                  </a>
                </p>
              </div>
            </div>

            <a
              href="https://givebutter.com/4zAepQ"
              target="_blank"
              rel="noopener noreferrer"
              className="notch-md inline-flex items-center bg-brand-chili hover:bg-brand-brown text-white text-xs font-semibold uppercase tracking-wide py-3 px-6 transition-colors duration-200"
            >
              Donate Today
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
