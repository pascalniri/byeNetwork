import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsFacebook, BsTwitterX, BsArrowLeft } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { MdMarkEmailUnread } from "react-icons/md";
import { motion } from "framer-motion";

const LeaderDetail = () => {
  const { id } = useParams();
  const [leader, setLeader] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch leader data based on ID
  useEffect(() => {
    // Simulate fetching data
    const fetchLeader = () => {
      setLoading(true);
      
      // In a real app, this would be an API call
      // For now, we'll use the mock data
      setTimeout(() => {
        const foundLeader = mockLeaders.find(l => l.id === id);
        setLeader(foundLeader || null);
        setLoading(false);
      }, 500);
    };
    
    fetchLeader();
  }, [id]);

  // Mock data - in a real application, this would come from an API
  const mockLeaders = [
    {
      id: "jayshun-mathews",
      image: "/Shun.jpg",
      name: "Jay'Shun Mathews",
      title: "Founder & Executive Director",
      department: "Executive Leadership",
      longBio:
        "Jay'Shun's vision for the Black Youth Empowerment Network (BYEN) stems from his own struggles with racial disparities, academic setbacks, and lack of community support. Growing up, he faced limited opportunities and environments that weren't designed for his success. Despite this, he realized the importance of a supportive network and resources. This led him to create BYEN—a space where young Black leaders, entrepreneurs, and creatives can find the guidance and support he lacked. BYEN is a movement focused on leadership, entrepreneurship, and creative expression, committed to ensuring the next generation doesn't face these challenges alone.",
      empowermentQuote: "To me, empowering Black youth means equipping them with the tools, support, and belief they need to lead without limits. It means making sure we are not just speaking about potential — we are investing in it. Empowerment is about access, visibility, and community — giving young Black leaders the space to rise, the resources to grow, and the network to thrive. Here at BYEN, we don't just talk about it — we do it.",
      achievements: [
        "Founded BYEN in 2023, establishing chapters at multiple universities",
        "Featured on Atlanta News First to discuss youth advocacy",
        "Led partnership development with Students Demand Action",
        "Organized Gun Violence Awareness Day at Morehouse College"
      ],
      education: "Morehouse College, Business Administration",
      socialMedia: {
        ig: "#",
        x: "#",
        linkedIn: "#",
        facebook: "#",
        email: "#"
      },
      gallery: [
        "/Shun.jpg",
        
      ]
    },
    {
      id: "james-brazzell",
      image: "/james.jpg",
      name: "James Brazzell",
      title: "Deputy Executive Director",
      department: "Executive Leadership",
      longBio:
        "James Brazzell is a freshman at Morehouse College majoring in Business Administration with a concentration in Management. As the Deputy Executive Director of the Black Youth Empowerment Network (BYEN), he plays a key role in shaping national strategy, overseeing programming, and building partnerships that advance the organization's mission. James is passionate about empowering youth through leadership, service, and generational impact. He is dedicated to creating platforms that amplify young Black voices and expand access to real opportunities. Drawing inspiration from his family's legacy in entrepreneurship and construction, James aspires to become a real estate developer and business owner, focused on building strong communities and the leaders who will sustain them.",
      empowermentQuote: "To me, empowering Black youth means equipping them with the tools, support, and belief they need to lead without limits. It means making sure we are not just speaking about potential — we are investing in it. Empowerment is about access, visibility, and community — giving young Black leaders the space to rise, the resources to grow, and the network to thrive. Here at BYEN, we don't just talk about it — we do it.",
      achievements: [
        "Established BYEN's strategic planning framework",
        "Led development of chapter expansion model",
        "Coordinated multiple leadership development workshops",
        "Created partnerships with community organizations"
      ],
      education: "Morehouse College, Business Administration (Management)",
      socialMedia: {
        ig: "#",
        x: "#",
        linkedIn: "#",
        facebook: "#",
        email: "#"
      },
      gallery: [
        "/james.jpg",
      ]
    },
    {
      id: "tyler-gunter",
      image: "/Tyler.jpg",
      name: "Tyler Gunter",
      title: "Director of Finance & Fundraising",
      department: "Finance & Development",
      longBio:
        "Tyler Gunter serves as the Director of Finance & Fundraising at the Black Youth Empowerment Network. Originally from Delaware, he brings over six years of experience in finance and leadership from his involvement with Business Professionals of America and as the highest-ranking Black member of the High School Democrats of America. A competitive swimmer for nearly a decade, Tyler's diverse experiences shape his authentic and resilient leadership style. As a young Black leader, he is dedicated to inspiring others to embrace their true selves and ensuring that Black youth receive the financial support and guidance needed to lead confidently.",
      empowermentQuote: "Empowering Black youth means creating pathways to financial literacy and economic opportunity. It's about ensuring that young leaders have both the knowledge and resources to build sustainable futures for themselves and their communities.",
      achievements: [
        "Developed BYEN's financial management system",
        "Created sustainable fundraising strategy",
        "Launched financial literacy workshop series",
        "Secured multiple partnership grants"
      ],
      education: "Finance and Leadership Studies",
      socialMedia: {
        ig: "#",
        x: "#",
        linkedIn: "#",
        facebook: "#",
        email: "#"
      },
      gallery: [
        "/Tyler.jpg"
      ]
    },
    {
      id: "christian-francis",
      image: "/christian.png",
      name: "Christian Francis",
      title: "National Director of Marketing & Branding",
      department: "Marketing & Branding",
      longBio:
        "Christian Francis is a dynamic student leader and marketer originally from New York City, now based in Georgia. With a deep passion for storytelling and its power to drive social impact, Christian uses creativity as a tool for transformation. Currently serving as the Director of Creative Design and Marketing for the Black Youth Empowerment Network (BYEN), Christian is committed to producing bold, purpose-driven content that resonates with and mobilizes young people across the country. Through innovative design and strategic messaging, Christian aims to elevate the voices of Black youth and amplify the mission of BYEN to create lasting change.",
      empowermentQuote: "To Christian, empowering Black youth means more than just offering support—it means actively building the tools, cultivating the confidence, and protecting the space for young Black leaders to define their own paths. It's about ensuring that Black youth not only have access to opportunities but are also trusted to lead, create, and thrive on their own terms. Empowerment, in this sense, is about ownership, agency, and freedom—it's about affirming the brilliance and potential that already exists within Black communities and giving it the space to flourish unapologetically.",
      achievements: [
        "Redesigned BYEN's brand identity and visual language",
        "Developed comprehensive social media strategy",
        "Created marketing materials for chapter expansion",
        "Led digital campaign increasing engagement by 200%"
      ],
      education: "Marketing and Creative Design",
      socialMedia: {
        ig: "#",
        x: "#",
        linkedIn: "#",
        facebook: "#",
        email: "#"
      },
      supportTeam: [
        {
          name: "Montreal Gatson",
          title: "Graphic Designer"
        }
      ],
      gallery: [
        "/christian.png"
      ]
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

  if (loading) {
    return (
      <div className="font-montserrat mt-[11rem] max-w-screen-2xl w-[90%] mx-auto pb-20 flex justify-center items-center min-h-[50vh]">
        <div className="text-[#693e2d] text-xl">Loading...</div>
      </div>
    );
  }

  if (!leader) {
    return (
      <div className="font-montserrat mt-[11rem] max-w-screen-2xl w-[90%] mx-auto pb-20 flex flex-col items-center min-h-[50vh]">
        <div className="text-[#693e2d] text-2xl mb-4">Leader not found</div>
        <Link to="/leadership" className="bg-[#693e2d] text-white px-6 py-3 rounded-full flex items-center">
          <BsArrowLeft className="mr-2" /> Back to Leadership
        </Link>
      </div>
    );
  }

  return (
    <div className="font-montserrat mt-[11rem] max-w-screen-2xl w-[90%] mx-auto pb-20">
      {/* Back Button */}
      <Link to="/leadership" className="inline-flex items-center text-[#693e2d] hover:text-[#985b3c] mb-8 transition-colors">
        <BsArrowLeft className="mr-2" /> Back to Leadership
      </Link>

      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
        <div className="relative h-[300px] md:h-[400px]">
          <img 
            src={leader.image} 
            alt={leader.name}
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <div className="text-sm uppercase tracking-wider mb-2">{leader.department}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{leader.name}</h1>
            <p className="text-xl opacity-90">{leader.title}</p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - 2/3 width on desktop */}
        <div className="lg:col-span-2 space-y-8">
          {/* Bio Section */}
          <motion.section 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-[#693e2d] mb-6 pb-2 border-b border-gray-200">Biography</h2>
            <div className="space-y-4">
              {leader.longBio.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-[15px] leading-[24px] text-gray-700">{paragraph}</p>
              ))}
            </div>
          </motion.section>

          {/* Empowerment Quote */}
          <motion.section 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-[#693e2d] bg-opacity-10 rounded-xl p-6 md:p-8 border-l-4 border-[#693e2d]"
          >
            <h2 className="text-xl font-bold text-[#693e2d] mb-4">What does empowering Black youth mean to you?</h2>
            <p className="text-[16px] italic text-gray-700">{leader.empowermentQuote}</p>
          </motion.section>

          {/* Achievements */}
          <motion.section 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-[#693e2d] mb-6 pb-2 border-b border-gray-200">Key Achievements</h2>
            <ul className="space-y-3">
              {leader.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#693e2d] mr-2 mt-1">•</span>
                  <span className="text-[15px] leading-[24px] text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Gallery */}
          {leader.gallery && leader.gallery.length > 0 && (
            <motion.section 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-[#693e2d] mb-6 pb-2 border-b border-gray-200">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {leader.gallery.map((image, idx) => (
                  <div key={idx} className="h-[180px] rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${leader.name} - Gallery ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Sidebar - 1/3 width on desktop */}
        <div className="space-y-8">
          {/* Contact & Social */}
          <motion.section 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-xl font-bold text-[#693e2d] mb-4 pb-2 border-b border-gray-200">Connect</h2>
            <div className="flex space-x-4 mt-4">
              <a href={leader.socialMedia.ig} target="_blank" rel="noopener noreferrer" className="bg-[#693e2d] text-white p-3 rounded-full hover:bg-[#985b3c] transition-colors">
                <RiInstagramFill size={20} />
              </a>
              <a href={leader.socialMedia.x} target="_blank" rel="noopener noreferrer" className="bg-[#693e2d] text-white p-3 rounded-full hover:bg-[#985b3c] transition-colors">
                <BsTwitterX size={18} />
              </a>
              <a href={leader.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer" className="bg-[#693e2d] text-white p-3 rounded-full hover:bg-[#985b3c] transition-colors">
                <SiLinkedin size={18} />
              </a>
              <a href={leader.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="bg-[#693e2d] text-white p-3 rounded-full hover:bg-[#985b3c] transition-colors">
                <BsFacebook size={18} />
              </a>
              <a href={leader.socialMedia.email} target="_blank" rel="noopener noreferrer" className="bg-[#693e2d] text-white p-3 rounded-full hover:bg-[#985b3c] transition-colors">
                <MdMarkEmailUnread size={20} />
              </a>
            </div>
          </motion.section>

          {/* Quick Facts */}
          <motion.section 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-xl font-bold text-[#693e2d] mb-4 pb-2 border-b border-gray-200">Quick Facts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Role</h3>
                <p className="text-[#693e2d]">{leader.title}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Department</h3>
                <p className="text-[#693e2d]">{leader.department}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Education</h3>
                <p className="text-[#693e2d]">{leader.education}</p>
              </div>
            </div>
          </motion.section>

          {/* Support Team (if applicable) */}
          {leader.supportTeam && leader.supportTeam.length > 0 && (
            <motion.section 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-[#693e2d] mb-4 pb-2 border-b border-gray-200">Support Team</h2>
              <ul className="space-y-3">
                {leader.supportTeam.map((member, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-8 h-8 bg-[#693e2d] rounded-full flex items-center justify-center text-white mr-3">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderDetail;
