import React, { useState } from "react";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaUsers, FaCalendarAlt, FaCogs, FaChartLine, FaUniversity, FaBullhorn, FaUserTie, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";

const Leadership = () => {
  const [activeTab, setActiveTab] = useState('executive');
  
  // // Executive Leadership
  // const executiveTeam = [
  //   {
  //     image: "/Shun.jpg",
  //     name: "Jay'Shun Mathews",
  //     title: "Founder & Executive Director",
  //     description:
  //       "Jay'Shun's vision for the Black Youth Empowerment Network (BYEN) stems from his own struggles with racial disparities, academic setbacks, and lack of community support. Growing up, he faced limited opportunities and environments that weren't designed for his success. Despite this, he realized the importance of a supportive network and resources. This led him to create BYEN—a space where young Black leaders, entrepreneurs, and creatives can find the guidance and support he lacked. BYEN is a movement focused on leadership, entrepreneurship, and creative expression, committed to ensuring the next generation doesn't face these challenges alone.",
  //     empowermentQuote: "To me, empowering Black youth means equipping them with the tools, support, and belief they need to lead without limits. It means making sure we are not just speaking about potential — we are investing in it. Empowerment is about access, visibility, and community — giving young Black leaders the space to rise, the resources to grow, and the network to thrive. Here at BYEN, we don't just talk about it — we do it.",
  //     socialMedia:{
  //       ig:"#",
  //       x:"#",
  //       linkedIn:"#",
  //       facebook:"#",
  //       email:"#"
  //     }
  //   },
  //   {
  //     image: "/james.jpg", // You'll need to create this image or use an existing one
  //     name: "James Brazzell",
  //     title: "Deputy Executive Director",
  //     description:
  //       "James Brazzell is a freshman at Morehouse College majoring in Business Administration with a concentration in Management. As the Deputy Executive Director of the Black Youth Empowerment Network (BYEN), he plays a key role in shaping national strategy, overseeing programming, and building partnerships that advance the organization's mission. James is passionate about empowering youth through leadership, service, and generational impact. He is dedicated to creating platforms that amplify young Black voices and expand access to real opportunities. Drawing inspiration from his family's legacy in entrepreneurship and construction, James aspires to become a real estate developer and business owner, focused on building strong communities and the leaders who will sustain them.",
  //     empowermentQuote: "To me, empowering Black youth means equipping them with the tools, support, and belief they need to lead without limits. It means making sure we are not just speaking about potential — we are investing in it. Empowerment is about access, visibility, and community — giving young Black leaders the space to rise, the resources to grow, and the network to thrive. Here at BYEN, we don't just talk about it — we do it.",
  //     socialMedia:{
  //       ig:"#",
  //       x:"#",
  //       linkedIn:"#",
  //       facebook:"#",
  //       email:"#"
  //     }
  //   }
  // ];
  
  // // Department Directors
  // const departmentDirectors = {
  //   finance: [
  //     {
  //       image: "/Tyler.jpg",
  //       name: "Tyler Gunter",
  //       title: "Director of Finance & Fundraising",
  //       description:
  //         "Tyler Gunter serves as the Director of Finance & Fundraising at the Black Youth Empowerment Network. Originally from Delaware, he brings over six years of experience in finance and leadership from his involvement with Business Professionals of America and as the highest-ranking Black member of the High School Democrats of America. A competitive swimmer for nearly a decade, Tyler's diverse experiences shape his authentic and resilient leadership style. As a young Black leader, he is dedicated to inspiring others to embrace their true selves and ensuring that Black youth receive the financial support and guidance needed to lead confidently.",
  //       empowermentQuote: "",
  //       socialMedia:{
  //         ig:"#",
  //         x:"#",
  //         linkedIn:"#",
  //         facebook:"#",
  //         email:"#"
  //       }
  //     }
  //   ],
  //   marketing: [
  //     {
  //       image: "/christian.png", // You'll need to create this image or use an existing one
  //       name: "Christian Francis",
  //       title: "National Director of Marketing & Branding",
  //       description:
  //         "Christian Francis is a dynamic student leader and marketer originally from New York City, now based in Georgia. With a deep passion for storytelling and its power to drive social impact, Christian uses creativity as a tool for transformation. Currently serving as the Director of Creative Design and Marketing for the Black Youth Empowerment Network (BYEN), Christian is committed to producing bold, purpose-driven content that resonates with and mobilizes young people across the country. Through innovative design and strategic messaging, Christian aims to elevate the voices of Black youth and amplify the mission of BYEN to create lasting change.",
  //       empowermentQuote: "To Christian, empowering Black youth means more than just offering support—it means actively building the tools, cultivating the confidence, and protecting the space for young Black leaders to define their own paths. It's about ensuring that Black youth not only have access to opportunities but are also trusted to lead, create, and thrive on their own terms. Empowerment, in this sense, is about ownership, agency, and freedom—it's about affirming the brilliance and potential that already exists within Black communities and giving it the space to flourish unapologetically.",
  //       socialMedia:{
  //         ig:"#",
  //         x:"#",
  //         linkedIn:"#",
  //         facebook:"#",
  //         email:"#"
  //       },
  //       supportTeam: [
  //         {
  //           name: "Montreal Gatson",
  //           title: "Graphic Designer"
  //         }
  //       ]
  //     }
  //   ]
  // };
  
  // Department information
  const departments = [
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
      id: "finance",
      name: "Finance & Development",
      icon: <FaChartLine className="text-2xl" />,
      description: "Oversees financial planning, fundraising efforts, and resource development to sustain and grow BYEN."
    },
    {
      id: "chapters",
      name: "Chapter Development",
      icon: <FaUniversity className="text-2xl" />,
      description: "Supports the establishment and growth of BYEN chapters across different campuses and communities."
    },
    {
      id: "marketing",
      name: "Marketing & Branding",
      icon: <FaBullhorn className="text-2xl" />,
      description: "Creates and maintains BYEN's brand identity, manages communications, and promotes our mission and initiatives."
    }
  ];

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

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Leadership profile card component
  const LeadershipCard = ({ leader }) => (
    <motion.div 
      variants={fadeIn}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="h-[300px] overflow-hidden">
        <img 
          src={leader.image} 
          alt={leader.name}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#693e2d]">{leader.name}</h3>
        <p className="text-gray-600 mb-4">{leader.title}</p>
        <p className="text-[15px] leading-[22px] text-[#6C6A6A] mb-4">
          {leader.description}
        </p>
        
        {leader.empowermentQuote && (
          <div className="mt-4 p-4 bg-[#693e2d] bg-opacity-10 rounded-lg border-l-4 border-[#693e2d]">
            <h4 className="font-semibold text-[#693e2d] mb-2">What does empowering Black youth mean to you?</h4>
            <p className="text-[14px] italic text-gray-700">{leader.empowermentQuote}</p>
          </div>
        )}
        
        <div className="flex space-x-3 mt-6">
          <a href={leader.socialMedia.ig} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
            <RiInstagramFill size={22} />
          </a>
          <a href={leader.socialMedia.x} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
            <BsTwitterX size={20} />
          </a>
          <a href={leader.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
            <SiLinkedin size={20} />
          </a>
          <a href={leader.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
            <BsFacebook size={20} />
          </a>
          <a href={`mailto:${leader.socialMedia.email}`} className="text-[#693e2d] hover:text-[#985b3c] transition-colors">
            <MdMarkEmailUnread size={22} />
          </a>
        </div>
        
        {leader.supportTeam && leader.supportTeam.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-gray-700 mb-2">Support Team</h4>
            <ul className="space-y-1">
              {leader.supportTeam.map((member, idx) => (
                <li key={idx} className="text-[14px] text-gray-600">
                  {member.name} - <span className="italic">{member.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="font-montserrat mt-[7rem] max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] pb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-[#693e2d]">Leadership</span>
        </h1>
        <p className="text-[15px] leading-[22px] text-[#6C6A6A] max-w-3xl mx-auto">
          Meet the dedicated team of leaders who guide the Black Youth Empowerment Network's mission and vision. 
          Our leadership team is committed to creating opportunities, fostering growth, and empowering the next generation of Black leaders.
        </p>
      </div>
      
      {/* Executive Leadership Section */}
      {/* <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Executive <span className="text-[#693e2d]">Leadership</span>
        </h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {executiveTeam.map((leader, index) => (
            <LeadershipCard key={index} leader={leader} />
          ))}
        </motion.div>
      </section> */}
      
      {/* Department Directors Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          National <span className="text-[#693e2d]">Directors</span>
        </h2>
        
        {/* Department Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => handleTabChange(dept.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  activeTab === dept.id 
                    ? 'bg-[#693e2d] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept.icon}
                <span>{dept.name}</span>
              </button>
            ))}
          </div>
          
          {/* Department Description */}
          <div className="text-center mb-8">
            {departments.map((dept) => (
              activeTab === dept.id && (
                <motion.div 
                  key={dept.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl mx-auto"
                >
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                    {dept.icon}
                    <span>{dept.name}</span>
                  </h3>
                  <p className="text-[15px] text-[#6C6A6A]">{dept.description}</p>
                </motion.div>
              )
            ))}
          </div>
          
          {/* Department Directors */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-8"
          >
            {departmentDirectors[activeTab]?.map((leader, index) => (
              <LeadershipCard key={index} leader={leader} />
            )) || (
              <div className="text-center py-8">
                <p className="text-gray-500 italic">Leadership information coming soon.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
