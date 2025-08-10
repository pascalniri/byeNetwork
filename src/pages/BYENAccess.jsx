import React from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { 
  FiBookOpen, 
  FiBriefcase, 
  FiUsers, 
  FiTrendingUp, 
  FiFileText, 
  FiBell, 
  FiTool,
  FiArrowRight,
  FiStar,
  FiAward
} from "react-icons/fi";
import { MdOutlineHorizontalRule } from "react-icons/md";

const BYENAccess = () => {
  const features = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Curated Scholarship & Fellowship Opportunities",
      description: "Access to handpicked scholarships and fellowships specifically for Black youth, updated regularly with new opportunities."
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: "Internship & Job Openings",
      description: "Exclusive access to internships and job opportunities across various industries, from entry-level to leadership positions."
    },
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      title: "College & Career Readiness Resources",
      description: "Comprehensive guides, templates, and resources to help you navigate college applications and career planning."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Mentorship & Leadership Development",
      description: "Connect with mentors and participate in leadership development sessions designed to accelerate your growth."
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Application Support & Resume Building",
      description: "Get personalized support with applications, resume reviews, and interview preparation from experienced professionals."
    },
    {
      icon: <FiBell className="w-8 h-8" />,
      title: "Real-Time Alerts",
      description: "Stay updated with instant notifications about new programs, events, training opportunities, and application deadlines."
    },
    {
      icon: <FiTool className="w-8 h-8" />,
      title: "Toolkits & Guides",
      description: "Access specially designed toolkits and step-by-step guides created for young changemakers and future leaders."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
        <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p>BYEN ACCESS</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
        A dedicated resource hub created to connect Black youth with the tools, knowledge, and opportunities they need to grow, lead, and thrive.</p>
      </div>
    <div className="font-montserrat bg-white mx-auto max-w-screen-2xl px-4 md:px-[5rem] lg:px-[6rem] py-[8rem]">
  

      {/* Olivia Gray Profile Section */}
      <Fade>
        <div className="bg-gradient-to-br from-[#693e2d]/5 to-[#985b3c]/5 rounded-2xl p-8 mb-16 border border-[#693e2d]/10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/gallery/Liv picture 2 - Olivia Gray.jpg" 
                alt="Olivia Gray" 
                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-[#693e2d] mb-2">Olivia Gray</h3>
              <p className="text-lg text-gray-600 mb-4">National Associate Director of Career & Academic Success</p>
              <p className="text-gray-700 leading-relaxed">
                Olivia Gray is a third-year Elementary Education major at Spelman College, dedicated to academic achievement and career development. She is recognized for her leadership and community impact, bringing her expertise in education and student success to help fellow Black youth navigate their academic and professional journeys.
              </p>
            </div>
          </div>
        </div>
      </Fade>

      {/* What You'll Gain Section */}
      <div className="mb-16">
        <Fade>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#693e2d] mb-4">
              What You'll Gain Through BYEN Access
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real support for your academic, professional, and leadership journey
            </p>
          </div>
        </Fade>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              variants={item}
              key={index}
              className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-[#693e2d] to-[#985b3c] p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#693e2d] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <Fade>
        <div className="bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Access Your Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join BYEN Access today and unlock the resources, connections, and opportunities you need to achieve your academic and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/membership" 
              className="relative bg-white text-[#693e2d] rounded-full py-4 px-8 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group font-semibold"
            >
              <span className="relative z-10 flex items-center">
                JOIN BYEN TODAY
                <FiArrowRight className="ml-2 w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gray-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
            </a>
            <a 
              href="mailto:oliviagray@spelman.edu" 
              className="relative border-2 border-white text-white rounded-full py-4 px-8 hover:bg-white hover:text-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group font-semibold"
            >
              <span className="relative z-10 flex items-center">
                CONTACT OLIVIA
                <FiArrowRight className="ml-2 w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
            </a>
          </div>
        </div>
      </Fade>

      {/* Success Stories Preview */}
      <div className="mt-16">
        <Fade>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#693e2d] mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how BYEN Access has helped other students achieve their goals
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
              <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
              <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
              <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
              <FiStar className="w-5 h-5 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Scholarship Success</h3>
            <p className="text-gray-600 leading-relaxed">
              "Through BYEN Access, I found a scholarship opportunity that covered my entire senior year tuition. The personalized guidance made all the difference in my application process."
            </p>
            <p className="text-sm text-gray-500 mt-4 font-medium">- BYEN Member, Class of 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100"
          >
            <div className="flex items-center mb-4">
              <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
              <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
              <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
              <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
              <FiStar className="w-5 h-5 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Career Launch</h3>
            <p className="text-gray-600 leading-relaxed">
              "The internship I secured through BYEN Access became my pathway to a full-time offer at my dream company. The resume review and interview prep were invaluable."
            </p>
            <p className="text-sm text-gray-500 mt-4 font-medium">- BYEN Member, Current Professional</p>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BYENAccess;
