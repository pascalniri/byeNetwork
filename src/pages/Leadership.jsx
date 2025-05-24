import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { MdMarkEmailUnread, MdKeyboardArrowRight } from "react-icons/md";
import { FaUsers, FaCalendarAlt, FaCogs, FaChartLine, FaUniversity, FaBullhorn, FaUserTie, FaPaintBrush, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import leaders from "../api/data";
const Leadership = () => {
  const [activeRole, setActiveRole] = useState('executive');
  const [selectedPerson, setSelectedPerson] = useState(null);
  
 
  
  //  const departmentDirectors = { 
  //   executiveTeam: [
  //     {
  //       id: "jayshun-mathews",
  //       image: "/Shun.jpg",
  //       name: "Jay'Shun Mathews",
  //       status: "executive",
  //       title: "Founder & Executive Director",      
  //     },
  //     {
  //       id: "james-brazzell",
  //       image: "/james.jpg", 
  //       name: "James Brazzell",
  //       status:"executive",
  //       title: "Deputy Executive Director",
  //     } 
  //   ],
  //   marketing: [
  //     {
  //       id: "christian-francis",
  //       image: "/christian.png", 
  //       status:"executive",
  //       name: "Christian Francis",
  //       title: "National Director of Marketing & Branding",      
  //     }
  //   ],
  //   finance: [
  //     { 
  //       id: "tyler-gunter",
  //       image: "/Tyler.jpg",
  //       status:"executive",
  //       name: "Tyler Gunter",
  //       title: "Director of Finance & Fundraising",
  //     }
  //   ],

  // };
  
  // Department information
  const departments = [
    { 
      id: "executive",
      name: "Executive Leadership",
      icon: <FaUserTie className="text-2xl" />,
      description: "The visionary leaders who guide BYEN's mission, strategy, and overall direction."
    },
    {
      id: "finance",
      name: "Finance & Development",
      icon: <FaChartLine className="text-2xl" />,
      description: "Oversees financial planning, fundraising efforts, and resource development to sustain and grow BYEN."
    },
    {
      id: "marketing",
      name: "Marketing & Branding",
      icon: <FaBullhorn className="text-2xl" />,
      description: "Creates and maintains BYEN's brand identity, manages communications, and promotes our mission and initiatives."
    },
    {
      id: "memberRelations",
      name: "Member Relations",
      icon: <FaUsers className="text-2xl" />,
      description: "Responsible for member engagement, recruitment, and ensuring a positive experience for all BYEN members."
    },
    {
      id: "programming",
      name: "Programming & Events",
      icon: <FaCalendarAlt className="text-2xl" />,
      description: "Plans and executes all BYEN events, workshops, and initiatives to fulfill our mission and engage our community."
    },
    {
      id: "operations",
      name: "Operations",
      icon: <FaCogs className="text-2xl" />,
      description: "Manages the day-to-day functioning of the organization, ensuring all systems and processes run smoothly."
    },
 
    {
      id: "chapters",
      name: "Chapter Development",
      icon: <FaUniversity className="text-2xl" />,
      description: "Supports the establishment and growth of BYEN chapters across different campuses and communities."
    },

  ];

  // Set selected person when role changes
  useEffect(() => {
    // Reset selected person when role changes
    setSelectedPerson(null);
  }, [activeRole]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: -20, opacity: 0, transition: { duration: 0.3 } },
    hover: { x: 5, transition: { duration: 0.2 } }
  };

  const personCardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.3 } }
  };

  // Handle role change
  const handleRoleChange = (role) => {
    setActiveRole(role);
  };

  // Handle person selection
  const handlePersonSelect = (person) => {
    setSelectedPerson(person);
  };

  // Get current team based on active role
  const getCurrentTeam = () => {
    // For executive leadership
    if (activeRole === 'executive') {
      return leaders.filter(leader => leader.department.toLowerCase().includes('executive'));
    }
    
    // For other departments, match the department name with the active role
    const activeDept = departments.find(dept => dept.id === activeRole);
    if (activeDept) {
      // Get the department name without spaces and lowercase
      const deptNameNormalized = activeDept.name.toLowerCase().replace(/\s+/g, '');
      // Filter leaders whose department matches this normalized name
      return leaders.filter(leader => {
        const leaderDeptNormalized = leader.department.toLowerCase().replace(/\s+/g, '');
        return leaderDeptNormalized.includes(deptNameNormalized) || deptNameNormalized.includes(leaderDeptNormalized);
      });
    }
    return [];
  };

 
  return (
    <div className="font-montserrat mt-[11rem] max-w-screen-2xl w-[90%] mx-auto pb-20">
      <div className="text-center mb-12 px-4 md:px-[5rem] lg:px-[6rem]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-[#693e2d]">Leadership</span>
        </h1>
        <p className="text-[15px] leading-[22px] text-[#6C6A6A] max-w-3xl mx-auto">
          Meet the dedicated team of leaders who guide the Black Youth Empowerment Network's mission and vision. 
          Our leadership team is committed to creating opportunities, fostering growth, and empowering the next generation of Black leaders.
        </p>
      </div>
      
      {/* Futuristic Layout with Left-side Menu */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Side Menu */}
        <div className="lg:w-1/4 bg-gradient-to-b from-[#693e2d] to-[#985b3c] text-white p-6 rounded-l-xl lg:min-h-[600px]">
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FaStar className="mr-2" /> Leadership Team
            </h2>
            
            <div className="space-y-4">
                       
              {/* Department Directors Menu Items */}
              {departments.map((dept) => (
                <motion.div
                  key={dept.id}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover="hover"
                  variants={menuItemVariants}
                >
                  <button 
                    onClick={() => handleRoleChange(dept.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${activeRole === dept.id ? 'bg-white bg-opacity-20 shadow-lg' : 'hover:bg-white hover:bg-opacity-10'}`}
                  >
                    <div className="flex items-center">
                      {dept.icon}
                      <span className="ml-3 font-medium">{dept.name}</span>
                    </div>
                    <MdKeyboardArrowRight className={`transition-transform ${activeRole === dept.id ? 'rotate-90' : ''}`} />
                  </button>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-4 bg-white bg-opacity-10 rounded-lg">
              <p className="text-sm">Our leadership team is dedicated to empowering Black youth through mentorship, resources, and opportunities.</p>
            </div>
          </div>
        </div>
        
        {/* Right Side Content */}
        <div className="lg:w-3/4 bg-white rounded-r-xl shadow-xl p-6 lg:p-8">
          {/* Current Role Description */}
          <div className="mb-8 border-b border-gray-200 pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {departments.map((dept) => (
                    activeRole === dept.id && (
                      <div key={dept.id}>
                        <h2 className="text-2xl font-bold text-[#693e2d] mb-2 flex items-center gap-2">
                          {dept.icon}
                          <span>{dept.name}</span>
                        </h2>
                        <p className="text-[#6C6A6A]">{dept.description}</p>
                      </div>
                    )
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Team Members Grid */}
          <div className="mb-8">
            {/* Display National Directors section if in Marketing & Branding department */}
            {activeRole === 'marketing' ? (
              <>
                {/* National Directors Section */}
                <h3 className="text-xl font-semibold mb-6">National Directors</h3>
                <AnimatePresence>
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
                  >
                    {getCurrentTeam()
                      .filter(person => person.status === 'director')
                      .map((person, index) => (
                        <Link key={index} to={`/leadership/${person.id}`}>
                          <motion.div 
                            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                          >
                            <div className="h-[240px] overflow-hidden">
                              <img 
                                src={person.image} 
                                alt={person.name}
                                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" 
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-semibold text-[#693e2d]">{person.name}</h4>
                              <p className="text-sm text-gray-600">{person.title}</p>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                  </motion.div>
                </AnimatePresence>
                
                {/* Support Team Section */}
                <h3 className="text-xl font-semibold mb-6">Support Team</h3>
                <AnimatePresence>
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {getCurrentTeam()
                      .filter(person => person.status === 'supportTeam')
                      .map((person, index) => (
                        <Link key={index} to={`/leadership/${person.id}`}>
                          <motion.div 
                            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                          >
                            <div className="h-[240px] overflow-hidden">
                              <img 
                                src={person.image} 
                                alt={person.name}
                                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" 
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-semibold text-[#693e2d]">{person.name}</h4>
                              <p className="text-sm text-gray-600">{person.title}</p>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              // Default display for other departments
              <>
                <h3 className="text-xl font-semibold mb-6">
                  {getCurrentTeam().some(leader => leader.status === 'director') ? 'National Directors' : 'Support Team'}
                </h3>
                
                <AnimatePresence>
                  {getCurrentTeam().length > 0 ? (
                    <motion.div 
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {getCurrentTeam().map((person, index) => (
                        <Link key={index} to={`/leadership/${person.id}`}>
                          <motion.div 
                            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                          >
                            <div className="h-[240px] overflow-hidden">
                              <img 
                                src={person.image} 
                                alt={person.name}
                                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" 
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-semibold text-[#693e2d]">{person.name}</h4>
                              <p className="text-sm text-gray-600">{person.title}</p>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-12 bg-gray-50 rounded-xl"
                    >
                      <p className="text-gray-500">Leadership information coming soon.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
          
          {/* Selected Person Details */}
          <AnimatePresence>
            {selectedPerson && (
              <motion.div
                key={selectedPerson.name}
                variants={personCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-[300px] md:h-auto">
                    <img 
                      src={selectedPerson.image} 
                      alt={selectedPerson.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-[#693e2d]">{selectedPerson.name}</h3>
                        <p className="text-gray-600 mb-4">{selectedPerson.title}</p>
                      </div>
                      <button 
                        onClick={() => setSelectedPerson(null)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <p className="text-[15px] leading-[22px] text-[#6C6A6A] mb-4">
                      {selectedPerson.description}
                    </p>
                    
                    <div className="mt-4">
                      <h4 className="font-bold mb-2">What does empowering Black youth mean to you?</h4>
                      <p className="text-[15px] italic text-[#6C6A6A] mb-4">
                        {selectedPerson.empowermentQuote}
                      </p>
                      
                      <Link 
                        to={`/leadership/${selectedPerson.id}`} 
                        className="inline-block mt-2 bg-[#693e2d] text-white py-2 px-4 rounded-md hover:bg-[#985b3c] transition-colors"
                      >
                        View Full Profile
                      </Link>
                    </div>
                    
                    <div className="flex space-x-3 mt-6">
                      <a href={selectedPerson.socialMedia.ig} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
                        <RiInstagramFill size={22} />
                      </a>
                      <a href={selectedPerson.socialMedia.x} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
                        <BsTwitterX size={20} />
                      </a>
                      <a href={selectedPerson.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
                        <SiLinkedin size={20} />
                      </a>
                      <a href={selectedPerson.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
                        <BsFacebook size={20} />
                      </a>
                      <a href={selectedPerson.socialMedia.email} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
                        <MdMarkEmailUnread size={22} />
                      </a>
                    </div>
                    
                    {selectedPerson.supportTeam && selectedPerson.supportTeam.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-2">Support Team</h4>
                        <ul className="space-y-1">
                          {selectedPerson.supportTeam.map((member, idx) => (
                            <li key={idx} className="text-[14px] text-gray-600">
                              {member.name} - <span className="italic">{member.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
