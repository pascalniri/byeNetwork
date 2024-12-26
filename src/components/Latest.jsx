import React from "react";

const Latest = () => {
  const trends = [
    {
      image: "/latest jabari.svg",
      title: "Jabari Morrison",
      description:
        "An innovative leader, spearheaded the establishment of the Shiloh Student Athlete Association at Shiloh High School in Snellville, Georgia. In his capacity as founder, he orchestrated and moderated a thought-provoking panel discussion addressing the intricate balance between athletic pursuits and academic excellence.",
        link:"#"
    },
    {
      image: "/latest ammon.svg",
      title: "Ikarion Ammon",
      description:
        "An Ambassador for the Black Youth Empowerment Network, has made significant strides with the recent launch of his visionary clothing line, '5 Digit.' Demonstrating unwavering dedication to his academic journey, he has chosen to embark on a path of higher education at Kennesaw State University, where he will focus his studies on Environmental Engineering.",
        link:"#"
    },
    {
      image: "/latest coger.svg",
      title: "A'TEV Coger",
      description:
        "An accomplished athlete with a bold vision, has committed to joining Peru State's esteemed football program. Alongside his athletic endeavors, he is poised to unveil his cutting-edge clothing brand, 'Only Fear Fear,' showcasing his entrepreneurial spirit and drive for success.",
        link:"#"
    },
  ];
  return (
    <div className="font-poppins mx-auto max-w-screen-2xl px-4 md:px-[5rem] lg:px-[6rem] py-[10rem]">
      <div className="lg:w-[60%]">
        <h1 className="w-[80%] md:text-[50px] text-[30px] font-medium">
          DISCOVER THE LATEST NEWS, AND UPDATES{" "}
          <span className="text-[#9e6548]">FROM OUR WORLD</span>
        </h1>
        <p className="text-[15px] text-[#6C6A6A] md:w-[80%]">
          Stay updated with the latest insights, stories, and announcements!
          Dive into our blog to explore articles, news updates, and thought
          pieces that keep you informed and inspired. Whether it's breaking
          news, expert tips, or in-depth stories, this is your hub for staying
          connected with all the happenings.
        </p>
        <button className="text-[14px] text-white mt-[3rem]  bg-[#985B3C] md:px-[30px] px-4 py-[10px] hover:bg-[#9e6548] duration-200">
          View All Trends
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[8rem]">
        {trends.map((trend, index) => (
           <div className="bg-[#F0F0F0] shadow-xl rounded-[10px] p-2">
           <img
             src={trend.image}
             alt=""
             className="w-full rounded-[9px]"
           />
           <div className="flex flex-col items-start px-3 mb-3">
             <h2 className="text-[24px] mt-3">{trend.title}</h2>
             <p className="text-[13px] text-[#6C6A6A]">
               {trend.description}
             </p>
             <button className="text-[14px] text-white mt-[2rem]  bg-[#985B3C] md:px-[30px] px-4 py-[8px] hover:bg-[#9e6548] duration-200">
               Learn More
             </button>
           </div>
         </div>
        ))}
        
      </div>
    </div>
  );
};

export default Latest;
