import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { MdMarkEmailUnread, MdKeyboardArrowRight } from "react-icons/md";
import { FaUsers, FaCalendarAlt, FaCogs, FaChartLine, FaUniversity, FaBullhorn, FaUserTie, FaPaintBrush, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Leadership = () => {
  const [activeRole, setActiveRole] = useState('executive');
  const [selectedPerson, setSelectedPerson] = useState(null);
  
  // Executive Leadership
  const executiveTeam = [
    {
      id: "jayshun-mathews",
      image: "/Shun.jpg",
      name: "Jay'Shun Mathews",
      title: "Founder & Executive Director",
      description:
        "Jay'Shun's vision for the Black Youth Empowerment Network (BYEN) stems from his own struggles with racial disparities, academic setbacks, and lack of community support. Growing up, he faced limited opportunities and environments that weren't designed for his success. Despite this, he realized the importance of a supportive network and resources. This led him to create BYEN—a space where young Black leaders, entrepreneurs, and creatives can find the guidance and support he lacked. BYEN is a movement focused on leadership, entrepreneurship, and creative expression, committed to ensuring the next generation doesn't face these challenges alone.",
      empowermentQuote: "To me, empowering Black youth means equipping them with the tools, support, and belief they need to lead without limits. It means making sure we are not just speaking about potential — we are investing in it. Empowerment is about access, visibility, and community — giving young Black leaders the space to rise, the resources to grow, and the network to thrive. Here at BYEN, we don't just talk about it — we do it.",
      socialMedia:{
        ig:"#",
        x:"#",
        linkedIn:"#",
        facebook:"#",
        email:"#"
      }
    },
    {
      id: "james-brazzell",
      image: "/james.jpg", 
      name: "James Brazzell",
      title: "Deputy Executive Director",
      description:
        "James Brazzell is a freshman at Morehouse College majoring in Business Administration with a concentration in Management. As the Deputy Executive Director of the Black Youth Empowerment Network (BYEN), he plays a key role in shaping national strategy, overseeing programming, and building partnerships that advance the organization's mission. James is passionate about empowering youth through leadership, service, and generational impact. He is dedicated to creating platforms that amplify young Black voices and expand access to real opportunities. Drawing inspiration from his family's legacy in entrepreneurship and construction, James aspires to become a real estate developer and business owner, focused on building strong communities and the leaders who will sustain them.",
      empowermentQuote: "To me, empowering Black youth means equipping them with the tools, support, and belief they need to lead without limits. It means making sure we are not just speaking about potential — we are investing in it. Empowerment is about access, visibility, and community — giving young Black leaders the space to rise, the resources to grow, and the network to thrive. Here at BYEN, we don't just talk about it — we do it.",
      socialMedia:{
        ig:"#",
        x:"#",
        linkedIn:"#",
        facebook:"#",
        email:"#"
      }
    }
  ];
  
  // Department Directors
  const departmentDirectors = {
    finance: [
      {
        id: "tyler-gunter",
        image: "/Tyler.jpg",
        name: "Tyler Gunter",
        title: "Director of Finance & Fundraising",
        description:
          "Tyler Gunter serves as the Director of Finance & Development at the Black Youth Empowerment Network. Originally from Delaware, he brings over six years of experience in finance and leadership from his involvement with Business Professionals of America and as the highest-ranking Black member of the High School Democrats of America. A competitive swimmer for nearly a decade, Tyler's diverse experiences shape his authentic and resilient leadership style. As a young Black leader, he is dedicated to inspiring others to embrace their true selves and ensuring that Black youth receive the financial support and guidance needed to lead confidently.",
        empowermentQuote: "Empowering Black youth means creating pathways to financial literacy and economic opportunity. It's about ensuring that young leaders have both the knowledge and resources to build sustainable futures for themselves and their communities.",
        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
      }
    ],
    marketing: [
      {
        id: "christian-francis",
        image: "/christian.png", 
        name: "Christian Francis",
        title: "National Director of Marketing & Branding",
        description:
          "Christian Francis is a dynamic student leader and marketer originally from New York City, now based in Georgia. With a deep passion for storytelling and its power to drive social impact, Christian uses creativity as a tool for transformation. Currently serving as the Director of Creative Design and Marketing for the Black Youth Empowerment Network (BYEN), Christian is committed to producing bold, purpose-driven content that resonates with and mobilizes young people across the country. Through innovative design and strategic messaging, Christian aims to elevate the voices of Black youth and amplify the mission of BYEN to create lasting change.",
        empowermentQuote: "To Christian, empowering Black youth means more than just offering support—it means actively building the tools, cultivating the confidence, and protecting the space for young Black leaders to define their own paths. It's about ensuring that Black youth not only have access to opportunities but are also trusted to lead, create, and thrive on their own terms. Empowerment, in this sense, is about ownership, agency, and freedom—it's about affirming the brilliance and potential that already exists within Black communities and giving it the space to flourish unapologetically.",
        supportTeam: [
          {
            name: "Montreal Gatson",
            title: "Graphic Designer"
          }
        ],
        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
      }
    ]
  };
  
  // Department information
  const departments = [
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
    if (activeRole === 'executive') {
      return executiveTeam;
    } else {
      return departmentDirectors[activeRole] || [];
    }
  };

  // Leadership profile card component
  const PersonCard = ({ person }) => (
    <Link to={`/leadership/${person.id}`} className="block">
      <motion.div 
        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
        className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
      >
        <div className="h-[240px] overflow-hidden">
          <img 
            src={person.image} 
            alt={person.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-[#693e2d]">{person.name}</h3>
          <p className="text-gray-600 mb-2">{person.title}</p>
          <span className="inline-block mt-2 text-[#693e2d] hover:text-[#985b3c] font-medium text-sm">
            View Full Profile →
          </span>
        </div>
      </motion.div>
    </Link>
  );

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
              <FaStar className="mr-2" /> Leadership Roles
            </h2>
            
            <div className="space-y-4">
              {/* Executive Leadership Menu Item */}
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
                variants={menuItemVariants}
              >
                <button 
                  onClick={() => handleRoleChange('executive')}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${activeRole === 'executive' ? 'bg-white bg-opacity-20 shadow-lg' : 'hover:bg-white hover:bg-opacity-10'}`}
                >
                  <div className="flex items-center">
                    <FaUserTie className="mr-3 text-xl" />
                    <span className="font-medium">Executive Leadership</span>
                  </div>
                  <MdKeyboardArrowRight className={`transition-transform ${activeRole === 'executive' ? 'rotate-90' : ''}`} />
                </button>
              </motion.div>
              
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
                {activeRole === 'executive' ? (
                  <div>
                    <h2 className="text-2xl font-bold text-[#693e2d] mb-2">Executive Leadership</h2>
                    <p className="text-[#6C6A6A]">The visionary leaders who guide BYEN's mission, strategy, and overall direction.</p>
                  </div>
                ) : (
                  departments.map((dept) => (
                    activeRole === dept.id && (
                      <div key={dept.id}>
                        <h2 className="text-2xl font-bold text-[#693e2d] mb-2 flex items-center gap-2">
                          {dept.icon}
                          <span>{dept.name}</span>
                        </h2>
                        <p className="text-[#6C6A6A]">{dept.description}</p>
                      </div>
                    )
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Team Members Grid */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">Team Members</h3>
            
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
