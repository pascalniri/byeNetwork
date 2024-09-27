import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import whole from "../assets/whole.svg";
import { div } from "framer-motion/client";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("videos"); // State to track active tab

  const [selectedId, setSelectedId] = useState(null);

  // Sample images for the BYEN PHOTO SHOOT tab
  const images = [
    {
      id:1,
      src: "/1.jpeg",
      alt: "Team member 1",
    },
    {
      id:2,
      src: "/2.jpg",
      alt: "Team member 2",
    },
    {
      id:3,
      src: "/3.jpg",
      alt: "Team member 3",
    },
    {
      id:4,
      src: "/4.jpg",
      alt: "Team member 4",
    },
    {
      id:5,
      src: "/5.jpg",
      alt: "Team member 5",
    },
    {
      id:6,
      src: "/6.jpg",
      alt: "Team member 6",
    },
    {
      id:7,
      src: "/7.jpg",
      alt: "Team member 7",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${whole})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-[80%] 2xl:w-[40%] xl:px-0 mx-auto p-4 mt-[150px] font-outfit font-light">
        {/* Tab navigation */}
        <div className="flex justify-center items-start mb-10">
          <button
            className={`font-semibold text-[12px] sm:text-[16px] w-full rounded-l-[10px] py-[20px] border border-black ${
              activeTab === "videos" ? "bg-black text-white" : ""
            }`}
            onClick={() => setActiveTab("videos")}
          >
            FOUNDATION
          </button>
          <button
            className={`font-semibold text-[12px] sm:text-[16px] w-full rounded-r-[10px] py-[20px] border border-black ${
              activeTab === "photos" ? " bg-black text-white" : ""
            }`}
            onClick={() => setActiveTab("photos")}
          >
            BYEN PHOTO SHOOT
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "videos" ? (
          <div className="flex flex-col justify-center items-center text-center">
            {/* Word content */}
            <h1 className="text-[30px] md:text-[50px] font-light">
              Empowering<span className="font-bold"> Voices,</span> Inspiring
              <span className="font-bold"> Change</span>
            </h1>
            <p className="mb-[50px] mt-[30px] text-[#474747]">
              Empowering Voices, Change. At Black Youth Empowerment Network, we
              believe in the power of knowledge and community. Explore our
              curated videos, featuring stories, insights, and resources
              designed to uplift and inspire the next generation of leaders. Let
              these voices ignite your passion for progress and change.
            </p>

            {/* YouTube Video */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mb-[100px]">
              {/* First part of the video */}
              <div className="shadow-xl rounded-[10px]">
                <iframe
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-[10px]"
                  src="https://www.youtube.com/embed/1kGuNjF55NI"
                  title="Foundation: Part 1. VISIONARIES"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div className="px-[10px] py-[20px]">
                  <h1 className="font-semibold text-[20px]">
                    Part 1. VISIONARIES
                  </h1>
                  <p className="text-[13px] text-[#474747]">
                    “VISIONARIES” introduces you to some of BYEN's members. When
                    watching you get a deeper dive into what these members do,
                    their role in BYEN, and why joining BYEN was a good
                    opportunity for them.
                  </p>
                </div>
              </div>

              {/* Second part of the video */}
              <div className="shadow-xl rounded-[10px]">
                <iframe
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-[10px]"
                  src="https://www.youtube.com/embed/s4n4ZQDOQcA"
                  title="Foundation: Part 2. IMPACT"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div className="px-[10px] py-[20px]">
                  <h1 className="font-semibold text-[20px]">Part 2. IMPACT</h1>
                  <p className="text-[13px] text-[#474747]">
                    “IMPACT” dives deeper into what the organization means to
                    the member and how BYEN can impact others the way it
                    impacted them while also providing reasons as to why and how
                    BYEN contributes to the community.
                  </p>
                </div>
              </div>

              {/* Third part of the video */}
              <div className="shadow-xl rounded-[10px]">
                <iframe
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-[10px]"
                  src="https://www.youtube.com/embed/YpZfC0xPMjQ"
                  title="Foundation: Part 3. BYENGINNING"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div className="px-[10px] py-[20px]">
                  <h1 className="font-semibold text-[20px]">
                    Part 3. BYENGINNING
                  </h1>
                  <p className="text-[13px] text-[#474747]">
                    “BYENGINNING” talks about the challenges that a young black
                    entrepreneur or person in the Middle Georgia area may face
                    and how one may feel. This part also talks about how BYEN
                    works to uplift and be a better the Black Community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-[80px]">
            {/* Image Pagination Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <motion.div
                  key={image.id} // Add key for each item
                  layoutId={image.id.toString()} // Ensure layoutId is a string
                  onClick={() => setSelectedId(image.id)}
                  className="cursor-pointer"
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg" />
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {selectedId && (
                <div className="">
                  <motion.div
                  layoutId={selectedId.toString()}
                  className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
                  onClick={() => setSelectedId(null)} // Close the modal when clicking outside the image
                >
                  <motion.img
                    src={images.find((img) => img.id === selectedId)?.src}
                    className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] rounded-lg"
                    alt="Selected"
                  />
                </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
