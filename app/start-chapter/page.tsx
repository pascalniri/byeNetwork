"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";

export default function StartChapter() {
  return (
    <div>
      <PageHero eyebrow="Get Involved" title="Start a Chapter" description="Bring BYEN to Your Community" accent="pink" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="notch-lg bg-white p-8 shadow-lg"
          >
            <p className="text-brand-brown/70 leading-relaxed text-sm">
              Are you ready to lead where you are? The Black Youth Empowerment Network is expanding, and
              we&apos;re looking for bold, committed leaders to launch new chapters across the country. Starting
              a BYEN chapter means creating space for Black youth in your community to grow as leaders, serve
              their neighborhoods, and build power together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="notch-lg bg-brand-cream p-8 shadow-lg border-l-4 border-brand-chili"
          >
            <h2 className="text-lg sm:text-xl font-bold uppercase text-brand-brown mb-6">What Is a BYEN Chapter?</h2>
            <p className="text-brand-brown/70 mb-6 leading-relaxed text-sm">
              A BYEN chapter is a youth-led extension of our national movement, based in a local school, college,
              or community. Chapters organize events, host service projects, lead issue-based campaigns, and
              represent the values of BYEN at the local level.
            </p>

            <h3 className="text-sm font-bold uppercase text-brand-brown mt-8 mb-4">Every chapter receives:</h3>
            <ul className="space-y-3">
              {[
                "A step-by-step Chapter Launch Toolkit",
                "Access to our national leadership development trainings",
                "A direct line to our National Team for support and resources",
                "Visibility on our national platforms and in BYEN campaigns",
                "A community of youth leaders across the country",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-brand-chili mr-2">•</span>
                  <span className="text-brand-brown/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="notch-lg bg-white p-8 shadow-lg"
          >
            <h2 className="text-lg sm:text-xl font-bold uppercase text-brand-brown mb-6">Who Can Start a Chapter?</h2>
            <p className="text-brand-brown/70 mb-6 leading-relaxed text-sm">
              Chapters are open to Black youth ages 16–24 who are committed to BYEN&apos;s mission of leadership,
              service, and empowerment.
            </p>

            <h3 className="text-sm font-bold uppercase text-brand-brown mb-4">We especially welcome applications from:</h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                "High school student leaders",
                "HBCU and college campus organizers",
                "Youth-led community groups",
                "Rural and underserved communities",
              ].map((item) => (
                <div key={item} className="flex items-start">
                  <span className="text-brand-chili mr-2">•</span>
                  <p className="text-brand-brown/70 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="notch-lg bg-brand-cream p-8 shadow-lg border-l-4 border-brand-chili"
          >
            <h2 className="text-lg sm:text-xl font-bold uppercase text-brand-brown mb-6">What We&apos;re Looking For</h2>
            <p className="text-brand-brown/70 mb-6 leading-relaxed text-sm">Strong chapter founders demonstrate:</p>
            <ul className="space-y-3">
              {[
                "A commitment to grassroots leadership",
                "Clear vision for impact in their community",
                "Strong communication and organizing skills",
                "Willingness to grow with and represent BYEN",
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
            className="notch-lg bg-white p-8 shadow-lg text-center"
          >
            <h2 className="text-lg sm:text-xl font-bold uppercase text-brand-brown mb-6">Ready to Lead?</h2>
            <p className="text-brand-brown/70 mb-8 max-w-2xl mx-auto leading-relaxed text-sm">
              Starting a chapter is a chance to turn your ideas into action and be part of something bigger. You
              don&apos;t have to do it alone—BYEN will walk with you every step of the way.
            </p>

            <div className="notch-sm bg-brand-yellow/20 border-l-4 border-brand-yellow p-4 mb-8 text-left sm:text-center">
              <p className="text-sm text-brand-brown">
                <span className="font-semibold">Important Dates:</span> Application opens July 15th, priority
                deadline is July 31st, and regular deadline is August 15th.
              </p>
            </div>

            <p className="text-brand-brown/70 text-sm">Chapter proposal applications open Fall 2025.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
