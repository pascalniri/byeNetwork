import React from "react";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { MdMarkEmailUnread } from "react-icons/md";

const SlidingCards = () => {
  const directors = [
    {
      image: "/Shun.jpg",
      name: "Jay'Shun Mathews",
      title: "Founder & Executive Director",
      description:
        "Jay'Shun's vision for the Black Youth Empowerment Network (BYEN) stems from his own struggles with racial disparities, academic setbacks, and lack of community support. Growing up, he faced limited opportunities and environments that weren't designed for his success. Despite this, he realized the importance of a supportive network and resources. This led him to create BYEN—a space where young Black leaders, entrepreneurs, and creatives can find the guidance and support he lacked. BYEN is a movement focused on leadership, entrepreneurship, and creative expression, committed to ensuring the next generation doesn't face these challenges alone.",

        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
    },
    {
      image: "/image1.jpg",
      name: "Jabari Morrison",
      title: "Director of Operations and External Affairs",
      description:
        "Jabari Morrison serves as the Director of Operations and External Affairs for the Black Youth Empowerment Network. He is dedicated to empowering the next generation of Black leaders by honing his skills in leadership and communication. Jabari believes in the transformative power of connection and actively engages with others to hear their stories, creating meaningful impact and amplifying voices. Through his commitment to fostering dialogue and understanding, he strives to drive lasting change in his community and beyond.",

        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
    },
    {
      image: "/image9.jpg",
      name: "Addison Lowery",
      title: "Director of Member Relations",
      description:
        "Addison Lowery serves as the Secretary of Member Relations for the Black Youth Empowerment Network and is a junior in high school from Louisville, Kentucky. Deeply involved in her community, she is committed to making a positive impact. Addison is the Multimedia Editor for her school's news magazine, On The Record, and serves as the executive producer of the 13 Firsts podcast. Passionate about education and journalism, she seeks to empower youth voices. In her free time, Addison enjoys being a member of her school's color guard team, hanging out with friends, and reading.",

        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
    },
    {
      image: "/image7.jpg",
      name: "Tyler Gunter",
      title: "Director of Finance & Fundraising",
      description:
        "Tyler Gunter serves as the Director of Finance & Fundraising at the Black Youth Empowerment Network. Originally from Delaware, he brings over six years of experience in finance and leadership from his involvement with Business Professionals of America and as the highest-ranking Black member of the High School Democrats of America. A competitive swimmer for nearly a decade, Tyler's diverse experiences shape his authentic and resilient leadership style. As a young Black leader, he is dedicated to inspiring others to embrace their true selves and ensuring that Black youth receive the financial support and guidance needed to lead confidently.",

        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
    },
    {
      image: "/image10.jpg",
      name: "Rohan Nalty",
      title: "Director of Creative Media & Designs",
      description:
        "Rohan Nalty serves at the Black Youth Empowerment Network and is currently pursuing an associate's degree in Media Production at Georgia Piedmont Technical College. He runs his own photography business, Romillion Productions, where he showcases his work and documents the stories of the communities he serves. Rohan believes that every moment holds unique beauty, even amidst joy, sadness, or challenge. His motto, “Look at life through a different lens,” reflects his commitment to capturing life's most authentic moments from often-overlooked perspectives. Inspired by the power of art to tell stories and evoke emotion, Rohan is dedicated to uplifting others, particularly within the Black community, by highlighting strength, resilience, and beauty in all its forms.",

        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
    },
    
  ];

  const supportingTeam = [
    {
      image: "/image11.jpg",
      name: "Elijah Coleman",
      title: "Programs & Events Coordinator",
      description:
        "Elijah Coleman serves at the Black Youth Empowerment Network and has been involved with nonprofits since the 6th grade. He previously worked as an Outreach Staffer for 11 months, where he focused on forming and managing partnerships. Passionate about foreign policy and international relations, Elijah enjoys political dramas, documentaries, and music, especially by Beyoncé. He is excited to contribute to BYEN.",

        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
    },
    {
      image: "/image8.jpg",
      name: "Ikarion Ammon",
      title: "Graphic Designer",
      description:
        "Ikarion serves as a graphic designer for the Black Youth Empowerment Network while pursuing a degree in Environmental Engineering at Kennesaw State University. He is an integral part of the design team, bringing innovative ideas to life. Additionally, Ikarion is the owner of a clothing brand called 5 Digit, showcasing his passion for creativity and entrepreneurship.",

        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
    },
    {
      image: "/image2.jpg",
      name: "Jacobi Edwards",
      title: "Graphic Designer",
      description:
        "Jacobi Edwards serves as a graphic designer for the Black Youth Empowerment Network and is currently in 11th grade. He is actively involved in graphic design, football, DECA, and Skills USA, ranking in the top 15 of his school. Jacobi has previously participated in international DECA in Orlando and is excited about the opportunity to connect with like-minded individuals through BYEN. He is glad to be part of the team",

        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
    },
    {
      image: "/image5.jpg",
      name: "Jean-Yves Kimbunda",
      title: "Graphic Designer, Black Youth Empowerment Network",
      description:
        "Jean-Yves Kimbunda is an aspiring data analyst currently pursuing a degree in Information Systems with a concentration in Data Analytics at Kennesaw State University. Born in Houston, Texas, Jean-Yves spent 12 formative years in Kinshasa, Congo, before relocating to Stone Mountain, Georgia. A proud graduate of Stephenson High School with honors, he serves as a graphic designer for the Black Youth Empowerment Network, where he combines his creative talents with his passion for technology. Jean-Yves is dedicated to leveraging data and design to drive innovation and empower communities, reflecting his commitment to bridging technology and social impact.",

        socialMedia:{
          ig:"#",
          x:"#",
          linkedIn:"#",
          facebook:"#",
          email:"#"
        }
    },
       
  ];

  return (
    <div className="font-montserrat  mt-[10rem] max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem]">
      <h1 className="lg:text-[44px] lg:leading-[44px] font-bold text-[30px] leading-[35px]">
          DIRECTORS
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%]">
        The Directors are the visionaries and strategic leaders behind our mission. They guide the overall direction of the organization, make key decisions, and ensure that we stay focused on our goals. With a wealth of experience and a commitment to excellence, our Directors play a crucial role in shaping the future of our initiatives.
        </p>
      <div className=" py-[5rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
      {directors.map((director, index) => (
        <div
          key={index}
          className="relative h-[500px] w-full shadow-lg group"
          style={{
            backgroundImage: `url(${director.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bottom-0 bg-gradient bg-gradient-to-b from-[#9e654800] to-[#000000] w-full h-full flex flex-col justify-end items-center text-center p-6 group-hover:hidden">
            <h3 className="text-xl text-[#985b3c]  md:text-xl font-medium">
              {director.name}
            </h3>
            <p className="text-[15px] leading-[20px] mt-4 text-white">{director.title}</p>
          </div>
          <div className="hidden group-hover:flex flex-col justify-center items-center text-center h-full w-full p-6 bg-[#985b3c] bg-opacity-90">
            <h3 className="text-xl text-[#ffffff]  md:text-xl font-medium">
              {director.name}
            </h3>
            <p className="text-white text-sm mt-1">{director.title}</p>
            <p className="text-gray-300 text-[13px] mt-4">{director.description}</p>

            <span className="flex flex-row gap-3 mt-10">
                        <a
                          href={director.socialMedia.ig}
                          target="_blank"
                        >
                          <RiInstagramFill className="text-white text-[30px] hover:text-[#4b4b4b] duration-200" />
                        </a>
                        <a href={director.socialMedia.x} target="_blank">
                          <BsTwitterX className="text-white text-[27px] hover:text-[#4b4b4b] duration-200" />
                        </a>
                        
                        <a
                          href={director.socialMedia.linkedIn}
                          target="_blank"
                        >
                          <SiLinkedin className="text-white text-[27px] hover:text-[#4b4b4b] duration-200" />
                        </a>
                        <a href={director.socialMedia.facebook}
                        target="_blank">
                          <BsFacebook className="text-white text-[28px] hover:text-[#4b4b4b] duration-200" />
                        </a>
                        <a
                          href={director.socialMedia.email}
                          target="_blank"
                        >
                          <MdMarkEmailUnread className="text-white text-[30px] hover:text-[#4b4b4b] duration-200" />
                        </a>
                      </span>
          </div>
        </div>
      ))}
    </div>

    <h1 className="lg:text-[44px] lg:leading-[44px] font-bold text-[30px] leading-[35px]">
          SUPPORTING TEAM
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%]">
        Our Supporting Team is the backbone of our organization, providing essential assistance and ensuring smooth operations across all departments. With a diverse set of skills and a passion for the cause, they work tirelessly behind the scenes to support our Directors and ensure the success of every project and initiative.
        </p>
      <div className=" py-[5rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
      {supportingTeam.map((supporter, index) => (
        <div
          key={index}
          className="relative h-[500px] w-full shadow-lg group"
          style={{
            backgroundImage: `url(${supporter.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bottom-0 bg-gradient bg-gradient-to-b from-[#9e654800] to-[#000000] w-full h-full flex flex-col justify-end items-center text-center p-6 group-hover:hidden">
            <h3 className="text-xl text-[#9e6548]  md:text-xl font-medium">
              {supporter.name}
            </h3>
            <p className="text-white text-sm mt-2">{supporter.title}</p>
          </div>
          <div className="hidden group-hover:flex flex-col justify-center items-center text-center h-full w-full p-6 bg-[#9e6548] bg-opacity-90">
            <h3 className="text-xl text-[#ffffff]  md:text-xl font-medium">
              {supporter.name}
            </h3>
            <p className="text-white text-sm mt-1">{supporter.title}</p>
            <p className="text-gray-300 text-[13px] mt-4">{supporter.description}</p>

            <span className="flex flex-row gap-3 mt-10">
                        <a
                          href={supporter.socialMedia.ig}
                          target="_blank"
                        >
                          <RiInstagramFill className="text-white text-[30px] hover:text-[#4b4b4b] duration-200" />
                        </a>
                        <a href={supporter.socialMedia.x} target="_blank">
                          <BsTwitterX className="text-white text-[27px] hover:text-[#4b4b4b] duration-200" />
                        </a>
                        
                        <a
                          href={supporter.socialMedia.linkedIn}
                          target="_blank"
                        >
                          <SiLinkedin className="text-white text-[27px] hover:text-[#4b4b4b] duration-200" />
                        </a>
                        <a href={supporter.socialMedia.facebook}
                        target="_blank">
                          <BsFacebook className="text-white text-[28px] hover:text-[#4b4b4b] duration-200" />
                        </a>
                        <a
                          href={supporter.socialMedia.email}
                          target="_blank"
                        >
                          <MdMarkEmailUnread className="text-white text-[30px] hover:text-[#4b4b4b] duration-200" />
                        </a>
                      </span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SlidingCards;
