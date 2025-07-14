import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { GiLevelEndFlag } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaGlobe, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import Faq from "@/components/Faq";
import { motion } from "framer-motion";

const Membership = () => {
  const whyUs = [
    {
      id: 1,
      icon: <GiLevelEndFlag />,
      alt: "Leadership empowerment",
      h2: "LEADERSHIP DEVELOPMENT",
      p: "Participate in workshops, mentorship programs, and exclusive events designed to help you grow as a leader.",
    },
    {
      id: 2,
      icon: <HiUserGroup />,
      alt: "Networking Opportunities",
      h2: "NETWORKING OPPORTUNITIES",
      p: "Connect with like-minded peers, professionals, and mentors who are as passionate about change as you are.",
    },
    {
      id: 3,
      icon: <GiReceiveMoney />,
      alt: "Empowerment Resources",
      h2: "EMPOWERMENT RESOURCES",
      p: "Access tools, resources, and support to help you on your journey of personal and professional growth.",
    },
  ];

  const buttonItem = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="font-montserrat">
      <div className='bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url("/transparent.svg")] bg-no-repeat h-full w-full mt-[7rem]'>
        <h1 className=" flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p>MEMBERSHIP</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
          The Black Youth Empowerment Network (BYEN) is more than an
          organization—it's a coalition of young Black leaders, creators, and
          change-makers dedicated to uplifting and transforming communities.
          Join BYEN and become part of a network that values empowerment,
          collaboration, and positive impact.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem]">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-lg text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-[#693e2d] mb-6">Ready to Join?</h2>
          <p className="text-[#6C6A6A] mb-8 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Join BYEN and become part of a network that values empowerment, collaboration, and positive impact.
          </p>
          <motion.a
                href="https://form.jotform.com/251785009779067"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] mb-10 rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group flex items-center gap-2 mt-2 sm:mt-8 text-base sm:text-lg"
                variants={buttonItem}
              >
                <span className="relative z-10 flex items-center justify-center w-full">
                  BECOME A MEMBER
                  <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </motion.a>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r">
            
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mr-3">
                <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
            
              <p className="text-sm text-amber-800 text-center sm:text-left">
                <span className="font-semibold">Important Dates:</span> Application opens July 15th.
              </p>
            </div>
          </div>


        </motion.div>
        <h1 className="text-[30px] leading-[35px] text-[#693e2d] font-semibold">
          <p>Why join BYEN?</p>
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] mb-[5rem]">
          Becoming a member means you'll have access to:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {whyUs.map((us) => (
            <div
              key={us.id}
              className="flex flex-col justify-center items-center text-center bg-white border-t-[6px] border-[#693e2d] px-3 py-10 shadow-lg"
            >
              <p className="text-[5rem] text-[#693e2d] ">{us.icon}</p>
              <h1 className="text-[15px] leading-[20px]">{us.h2}</h1>
              <p className="text-[13px] text-[#6C6A6A] md:w-[80%] mx-auto mt-2">
                {us.p}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem]">
        <h1 className="lg:text-[44px] lg:leading-[44px] font-bold text-[30px] leading-[35px] text-center">
          Membership <span className="text-[#693e2d]">Overview</span>
        </h1>
        <p className="text-[15px] leading-[22px] mt-5 text-[#6C6A6A] md:w-[80%] mx-auto text-center">
          The Black Youth Empowerment Network (BYEN) offers two levels of membership designed to engage, develop, and uplift Black youth across the nation: National Membership and Chapter Membership. While both pathways offer access to BYEN's mission and resources, each serves a different purpose in the growth and engagement of our members.
        </p>

        {/* MEMBERSHIP TYPES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full">
          {/* National Membership */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden border-t-4 border-[#693e2d] hover:shadow-xl transition-shadow duration-300">
            <div className="bg-[#693e2d] bg-opacity-10 p-6 flex items-center">
              <div className="bg-[#693e2d] p-4 rounded-full mr-4">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h2 className="text-[24px] font-semibold text-[#693e2d]">National Membership</h2>
            </div>
            <div className="p-6">
              <div className="mb-4 pb-3 border-b border-gray-200">
                <p className="text-[14px] font-medium text-gray-500">Open to Black youth across the country. Rolling admissions every semester.</p>
              </div>

              <h3 className="text-[18px] font-semibold mb-2">Overview:</h3>
              <p className="text-[15px] leading-[22px] text-[#6C6A6A] mb-4">
                National Membership provides access to BYEN's broader network, virtual programming, and collaborative opportunities. It is designed for individuals who want to stay connected with BYEN's national movement, receive resources, and engage in meaningful projects—regardless of their physical location or school affiliation.
              </p>

              <h3 className="text-[18px] font-semibold mb-2">Membership Benefits:</h3>
              <ul className="list-disc pl-5 text-[15px] leading-[22px] text-[#6C6A6A] mb-4">
                <li>Access to virtual events, leadership trainings, and workshops</li>
                <li>Invitations to national campaigns, advocacy initiatives, and service projects</li>
                <li>Networking opportunities with members from across the country</li>
                <li>Monthly newsletters featuring updates, resources, and member spotlights</li>
                <li>Consideration for national features, interviews, and media opportunities</li>
                <li>First access to certain fellowships, internships, and application cycles</li>
              </ul>

              <h3 className="text-[18px] font-semibold mb-2">Ideal for:</h3>
              <p className="text-[15px] leading-[22px] text-[#6C6A6A]">
                Students, creatives, and young leaders who want to stay engaged with BYEN, expand their network, and participate in programming remotely.
              </p>

              <motion.a
                href="https://form.jotform.com/251785009779067"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group flex items-center gap-2 mt-2 sm:mt-8 text-base sm:text-lg"
                variants={buttonItem}
              >
                <span className="relative z-10 flex items-center justify-center w-full">
                  BECOME A MEMBER
                  <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </motion.a>
            </div>

          </div>

          {/* Chapter Membership */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden border-t-4 border-[#693e2d] hover:shadow-xl transition-shadow duration-300">
            <div className="bg-[#693e2d] bg-opacity-10 p-6 flex items-center">
              <div className="bg-[#693e2d] p-4 rounded-full mr-4">
                <FaUniversity className="text-white text-2xl" />
              </div>
              <h2 className="text-[24px] font-semibold text-[#693e2d]">Chapter Membership</h2>
            </div>
            <div className="p-6">
              <div className="mb-4 pb-3 border-b border-gray-200">
                <p className="text-[14px] font-medium text-gray-500">Selective membership. Limited to 25 students per chapter, per academic class.</p>
              </div>

              <h3 className="text-[18px] font-semibold mb-2">Overview:</h3>
              <p className="text-[15px] leading-[22px] text-[#6C6A6A] mb-4">
                Chapter Membership offers a high-impact, in-person experience through local BYEN chapters established at select campuses and communities. It allows members to lead on the ground, plan events, participate in community service, and work collaboratively with other student leaders.
              </p>

              <h3 className="text-[18px] font-semibold mb-2">Membership Benefits:</h3>
              <ul className="list-disc pl-5 text-[15px] leading-[22px] text-[#6C6A6A] mb-4">
                <li>Participation in in-person meetings, workshops, and leadership retreats</li>
                <li>Opportunities to organize and lead chapter-specific initiatives and events</li>
                <li>Deeper mentorship from chapter advisors and national leadership</li>
                <li>Access to exclusive funding opportunities, stipends, and leadership roles</li>
                <li>Priority consideration for travel, conferences, and special programming</li>
                <li>A close-knit, supportive peer environment rooted in local impact</li>
              </ul>

              <h3 className="text-[18px] font-semibold mb-2">Current Chapters:</h3>
              <ul className="list-disc pl-5 text-[15px] leading-[22px] text-[#6C6A6A] mb-4">
                <li>Morehouse College</li>
                <li>University of Georgia</li>
                <li>(More campuses launching soon)</li>
              </ul>

              <h3 className="text-[18px] font-semibold mb-2">Ideal for:</h3>
              <p className="text-[15px] leading-[22px] text-[#6C6A6A]">
                Students who are ready to lead in-person, engage in chapter-based collaboration, and actively bring BYEN's mission to life within their campus and surrounding community.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 w-full">
          <h2 className="text-[28px] font-bold text-center mb-8">Choosing Your <span className="text-[#693e2d]">Path</span></h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#693e2d]">
                  <th className="p-4 text-left text-white"></th>
                  <th className="p-4 text-center text-white font-semibold">National Membership</th>
                  <th className="p-4 text-center text-white font-semibold">Chapter Membership</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Location</td>
                  <td className="p-4 text-center">Open to all U.S. youth</td>
                  <td className="p-4 text-center">Campus/community-based (select locations only)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Commitment Level</td>
                  <td className="p-4 text-center">Flexible and virtual</td>
                  <td className="p-4 text-center">High engagement and in-person</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Community</td>
                  <td className="p-4 text-center">Large, national network</td>
                  <td className="p-4 text-center">Intimate, local cohort (25 members/class)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Leadership</td>
                  <td className="p-4 text-center">National project opportunities</td>
                  <td className="p-4 text-center">Chapter leadership roles and planning</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Programming</td>
                  <td className="p-4 text-center">Online workshops, events, and service opportunities</td>
                  <td className="p-4 text-center">In-person events, service projects, and peer sessions</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Eligibility</td>
                  <td className="p-4 text-center">Open to all Black youth</td>
                  <td className="p-4 text-center">Requires application and selection process</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Application Timeline */}
        {/* <div className="mt-16 w-full bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#693e2d]">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="text-[#693e2d] text-3xl mr-4" />
            <h2 className="text-[24px] font-bold">Application Timeline</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-[16px] leading-[24px]"><span className="font-semibold text-[#693e2d]">July 15, 2025:</span> National Membership Application Opens</p>
            <p className="text-[16px] leading-[24px]"><span className="font-semibold text-[#693e2d]">July 31, 2025:</span> Early Decision Deadline</p>
            <p className="text-[16px] leading-[24px]"><span className="font-semibold text-[#693e2d]">August 15, 2025:</span> Regular Decision Deadline</p>
          </div>
          
          <div className="mt-8">
            <a href="#" className="relative inline-block text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group">
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
            </a>
          </div>
        </div> */}

        <Faq />
      </div>
    </div>
  );
};

export default Membership;
