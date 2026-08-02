"use client";

import { motion } from "framer-motion";
import { MdOutlineHorizontalRule, MdOutlineEmail } from "react-icons/md";

export default function Donors() {
  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full my-[9rem]">
        <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p className="uppercase">Become a Donor or Sponsor</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
          Fuel the Movement. Invest in the Future of Black Youth.
        </p>
      </div>
      <div className="font-montserrat max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto space-y-[5rem] my-[5rem]">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#f9f5f3] to-white p-8 rounded-xl shadow-lg border-l-4 border-[#693e2d]"
          >
            <h2 className="text-xl font-bold text-[#693e2d] mb-6 flex items-center">
              BYEN is one of the few national organizations led entirely by Black youth, for Black youth. With over 200 members across 25 states and growing, our chapters on campuses and in communities provide the foundation for connection, leadership, and meaningful action.
            </h2>

            <p className="text-[#6C6A6A] mb-4 font-medium">Through your donation, you help us:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Grow to more campuses and communities",
                "Provide tools, training, and travel for young leaders",
                "Sustain culturally rooted programs that build pride and purpose",
                "Expand a national network of youth leadership that is powerful, intentional, and grounded in community",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#985b3c] mr-2">•</span>
                  <span className="text-[#6C6A6A] text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <data value="">
              <h2 className="text-xl mt-10 font-bold text-[#693e2d] mb-6 flex items-center">What We Offer</h2>
              <ul className="space-y-3">
                {[
                  "Leadership training grounded in culture, purpose, and service",
                  "High-impact events centered on civic engagement, wellness, and youth power",
                  "Mentorship pipelines that turn passion into sustainable action",
                  "A growing, supportive network of changemakers across the country",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#985b3c] mr-2">✓</span>
                    <span className="text-[#6C6A6A] text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </data>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#693e2d] mb-8 text-center">Ways to Give</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-white p-6 rounded-lg shadow-md py-[30px]">
                <h3 className="text-xl font-semibold text-[#693e2d] mb-3">Make a Donation</h3>
                <p className="text-[#6C6A6A] text-[15px] mb-4">
                  Support our work with a one-time or monthly contribution. Every gift fuels our programs and expands our impact.
                </p>
                <a
                  href="https://givebutter.com/4zAepQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative top-1 text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group"
                >
                  <span className="relative z-10">DONATE NOW</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#693e2d] mb-3">Become a Sponsor</h3>
                <p className="text-[#6C6A6A] text-[15px] mb-4">
                  Partner with us on specific initiatives such as our B.O.L.D. Accelerator, National Internship Program, or Boots on the Ground civic engagement campaign. Sponsorships can be customized to align with your organization's mission and impact goals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#693e2d] mb-3">Corporate and Foundation Giving</h3>
                <p className="text-[#6C6A6A] text-[15px] mb-4">
                  We welcome meaningful partnerships with brands and funders who believe in equity, education, and youth-led innovation. Let's build something powerful together.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-[#693e2d] mb-4">Ready to Make a Difference?</h2>
            <p className="text-[#6C6A6A] mb-8 max-w-2xl mx-auto leading-relaxed text-[15px]">
              If you believe in the brilliance, vision, and leadership of Black youth, this is your moment to invest in more than a cause. You are investing in a generation.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r">
              <div className="flex items-center justify-center">
                <MdOutlineEmail className="text-amber-500 text-2xl mr-3" />
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">For sponsorships, partnerships, or custom giving opportunities, contact us at </span>
                  <a href="mailto:giving@wearebyen.org" className="text-[#693e2d] hover:underline">
                    giving@wearebyen.org
                  </a>
                </p>
              </div>
            </div>

            <a
              href="https://givebutter.com/4zAepQ"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">DONATE TODAY</span>
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
