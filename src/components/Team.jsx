import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaFacebook, FaYoutube } from "react-icons/fa6";
import mentor1 from "../assets/mentor1.svg";
import events from "../assets/events.jpg";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocation, IoTimerOutline } from "react-icons/io5";
import whole from "../assets/whole.svg";

const Team = () => {
  const members = [
    {
      id: 1,
      profile: "/Shun.jpg",
      name: "Jay'Shun",
      status: "Founder $ Executive Director",
      bio: "Jay'Shun vision for the Black Youth Empowerment Network (BYEN) was born out of his own experiences facing racial disparities, academic setbacks, and a lack of community support. Growing up, Jay'Shun encountered the harsh realities of inequality, whether it was seeing limited opportunities for young Black individuals in leadership positions or navigating academic environments that weren't built for his success.  Despite these challenges, Jay'Shun refused to be defined by them. Early on, he realized that while talent and drive are essential, having a supportive network and access to resources is just as crucial. Without a community that understood his struggles or empowered him, Jay'Shun learned the importance of building his own path forward. These experiences shaped his belief in creating a space where young Black leaders, entrepreneurs, and creatives could find the guidance and support that he wished he had. Through BYEN, Jay'Shun is committed to ensuring that the next generation doesn't face the same obstacles alone. BYEN is more than an organization, it's a movement to uplift and connect young Black individuals, giving them the tools and community they need to succeed. With a focus on leadership, entrepreneurship, and creative expression, Jay'Shun continues to turn his personal challenges into a force for change, building a network that champions every young person's potential.",
    },
    {
      id: 2,
      profile: "/Yves.jpg",
      name: "Jean-Yves Kimbunda",
      status: "Graphic Designer, Black Youth Empowerment Network",
      bio: "Jean-Yves Kimbunda is an aspiring data analyst currently pursuing a degree in Information Systems with a concentration in Data Analytics at Kennesaw State University. Born in Houston, Texas, Jean-Yves spent 12 formative years in Kinshasa, Congo, before relocating to Stone Mountain, Georgia. A proud graduate of Stephenson High School with honors, he serves as a graphic designer for the Black Youth Empowerment Network, where he combines his creative talents with his passion for technology. Jean-Yves is dedicated to leveraging data and design to drive innovation and empower communities, reflecting his commitment to bridging technology and social impact.",
    },
    {
      id: 3,
      profile: "/Jabari.jpg",
      name: "Jabari Morrison",
      status: "Director of Operations and External Affairs",
      bio: "Jabari Morrison serves as the Director of Operations and External Affairs for the Black Youth Empowerment Network. He is dedicated to empowering the next generation of Black leaders by honing his skills in leadership and communication. Jabari believes in the transformative power of connection and actively engages with others to hear their stories, creating meaningful impact and amplifying voices. Through his commitment to fostering dialogue and understanding, he strives to drive lasting change in his community and beyond.",
    },
    {
      id: 4,
      profile: "/Tyler.jpg",
      name: "Tyler Gunter",
      status: "Director of Finance & Fundraising",
      bio: "Tyler Gunter serves as the Director of Finance & Fundraising at the Black Youth Empowerment Network. Originally from Delaware, he brings over six years of experience in finance and leadership from his involvement with Business Professionals of America and as the highest-ranking Black member of the High School Democrats of America. A competitive swimmer for nearly a decade, Tyler's diverse experiences shape his authentic and resilient leadership style. As a young Black leader, he is dedicated to inspiring others to embrace their true selves and ensuring that Black youth receive the financial support and guidance needed to lead confidently.",
    },
    {
      id: 5,
      profile: "/Ikarion.jpg",
      name: "Ikarion Ammon",
      status: "Graphic Designer",
      bio: "Ikarion serves as a graphic designer for the Black Youth Empowerment Network while pursuing a degree in Environmental Engineering at Kennesaw State University. He is an integral part of the design team, bringing innovative ideas to life. Additionally, Ikarion is the owner of a clothing brand called 5 Digit, showcasing his passion for creativity and entrepreneurship.",
    },
    {
      id: 6,
      profile: "/Elijah.jpg",
      name: "Elijah Coleman",
      status: "Programs & Events Coordinator",
      bio: "Elijah Coleman serves at the Black Youth Empowerment Network and has been involved with nonprofits since the 6th grade. He previously worked as an Outreach Staffer for 11 months, where he focused on forming and managing partnerships. Passionate about foreign policy and international relations, Elijah enjoys political dramas, documentaries, and music, especially by Beyoncé. He is excited to contribute to BYEN.",
    },
    {
      id: 7,
      profile: "/Rohan.jpg",
      name: "Rohan Nalty",
      status: "Director of Creative Media & Designs",
      bio: "Rohan Nalty serves at the Black Youth Empowerment Network and is currently pursuing an associate's degree in Media Production at Georgia Piedmont Technical College. He runs his own photography business, Romillion Productions, where he showcases his work and documents the stories of the communities he serves.   Rohan believes that every moment holds unique beauty, even amidst joy, sadness, or challenge. His motto, “Look at life through a different lens,” reflects his commitment to capturing life's most authentic moments from often-overlooked perspectives. Inspired by the power of art to tell stories and evoke emotion, Rohan is dedicated to uplifting others, particularly within the Black community, by highlighting strength, resilience, and beauty in all its forms.",
    },
    {
      id: 8,
      profile: "/Addison.jpg",
      name: "Addison Lowery",
      status: "Director of Member Relations",
      bio: "Addison Lowery serves as the Secretary of Member Relations for the Black Youth Empowerment Network and is a junior in high school from Louisville, Kentucky. Deeply involved in her community, she is committed to making a positive impact. Addison is the Multimedia Editor for her school's news magazine, On The Record, and serves as the executive producer of the 13 Firsts podcast.   Passionate about education and journalism, she seeks to empower youth voices. In her free time, Addison enjoys being a member of her school's color guard team, hanging out with friends, and reading.",
    },
    {
      id: 9,
      profile: "/Jacobi.jpg",
      name: "Jacobi Edwards",
      status: "Graphic Designer",
      bio: "Jacobi Edwards serves as a graphic designer for the Black Youth Empowerment Network and is currently in 11th grade. He is actively involved in graphic design, football, DECA, and Skills USA, ranking in the top 15 of his school. Jacobi has previously participated in international DECA in Orlando and is excited about the opportunity to connect with like-minded individuals through BYEN. He is glad to be part of the team and can be reached on Instagram @jacobi.doc.",
    },
  ];

  const partners = [
    {
      id: 1,
      image: "/Focused.png",
      alt: "Focused Minds Education Group",
      name: "Focused Minds Education Group",
      desc: "Focused Minds Education Group provides professional development to school districts and organizations globally. We also provide virtual learning support for educators and students.",
    },
    {
      id: 2,
      image: "/civics.png",
      alt: "Civics Unplugged",
      name: "Civics Unplugged",
      desc: "Civics Unplugged(CU) is a 501(c)(3) non-profit that empowers high school leaders with the training, funding, and community they need to become civic innovators. We do this by running a world-class fellowship program for high schoolers seeking to become social entrepreneurs, supporting them as they enter their professional careers, and building new initiatives that push the boundaries of civic education for youth.",
    },
    {
      id: 3,
      image: "/Riley.png",
      alt: "Rileys Way Foundation",
      name: "Focused Minds Education Group",
      desc: "Riley’s Way invests in and supports the next generation of kind leaders. We provide young people with the programs, support and inclusive community they need to thrive as changemakers. Riley’s Way is committed to supporting these young leaders to build a better world that values kindness, empathy, connection and the voices of all youth.",
    },
  ];

  const [activeTab, setActiveTab] = useState("videos"); // State to track active tab
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  return (
    <div
      style={{
        backgroundImage: `url(${whole})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-[80%] 2xl:w-[70%] xl:px-0 mx-auto p-4 mt-[150px] font-outfit text-light">
        {/* Tab navigation */}
        <div className="flex justify-center items-start mb-10">
          <button
            className={`font-semibold text-[12px] sm:text-[16px] w-full rounded-l-[10px] py-[20px] border border-black ${
              activeTab === "videos" ? "bg-black text-white" : ""
            }`}
            onClick={() => setActiveTab("videos")}
          >
            LEADERSHIP TEAM
          </button>
          <button
            className={`font-semibold text-[12px] sm:text-[16px] w-full rounded-r-[10px] py-[20px] border border-black ${
              activeTab === "photos" ? " bg-black text-white" : ""
            }`}
            onClick={() => setActiveTab("photos")}
          >
            OUR PARTNERS
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "videos" ? (
          <div>
            {/* Word content */}
            <h1 className="font-bold text-[40px] md:text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
              Directors
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] my-[50px]">
              {members.map((member) => (
                <div key={member.id}>
                  <div className="bg-white border rounded-[15px] py-[30px] px-[20px] bg-opacity-50 backdrop-blur-[1px] flex flex-col justify-center items-center text-center shadow-lg hover:border hover:border-black transform transition">
                    <img
                      src={member.profile}
                      alt="No image"
                      className="w-[100px] h-[100px] rounded-full border-2 border-black"
                    />
                    <h1 className="font-bold text-[20px]">{member.name}</h1>
                    <p className="text-gray-800">{member.status}</p>
                    <p className="mt-5 text-[14px] text-gray-600">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="my-[100px]">
            <h1 className="font-bold text-[40px] md:text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
              Our Partners
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[50px]">
              {partners.map((partner) => (
                <div key={partner.id}>
                  <div className="border shadow-lg  rounded-[15px] bg-gray-100">
                    <img
                      src={partner.image}
                      alt={partner.alt}
                      className=" rounded-[15px] border w-full h-[300px]"
                    />
                    <div className="px-5 py-[10px]">
                      <h1 className="text-[20px] font-semibold mb-2">
                        {partner.name}
                      </h1>
                      <p className="text-gray-600 font-light">{partner.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
