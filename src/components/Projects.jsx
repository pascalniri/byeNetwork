import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("videos"); // State to track active tab
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Sample images for the BYEN PHOTO SHOOT tab
  const images = [
    {
      src: "/1.jpeg",
      alt: "Team member 1",
    },
    {
      src: "/2.jpg",
      alt: "Team member 2",
    },
    {
      src: "/3.jpg",
      alt: "Team member 3",
    },
    {
      src: "/4.jpg",
      alt: "Team member 4",
    },
    {
      src: "/5.jpg",
      alt: "Team member 5",
    },
    {
      src: "/6.jpg",
      alt: "Team member 6",
    },
    {
      src: "/7.jpg",
      alt: "Team member 7",
    },
  ];

  // Pagination logic for images
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const paginatedImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  return (
    <div className="w-full md:w-[80%] mx-auto p-4 mt-[150px] font-poppins">
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
        <div>
          {/* Word content */}
          <h1 className="text-[28px] md:text-[35px] font-light">
            Empowering<span className="font-bold"> Voices,</span> Inspiring
            <span className="font-bold"> Change</span>
          </h1>
          <p className="mb-[50px] mt-[30px] text-[#474747]">
            Empowering Voices, Change. At Black Youth Empowerment Network, we
            believe in the power of knowledge and community. Explore our curated
            videos, featuring stories, insights, and resources designed to
            uplift and inspire the next generation of leaders. Let these voices
            ignite your passion for progress and change.
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
                  “IMPACT” dives deeper into what the organization means to the
                  member and how BYEN can impact others the way it impacted them
                  while also providing reasons as to why and how BYEN
                  contributes to the community.
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
                  entrepreneur or person in the Middle Georgia area may face and
                  how one may feel. This part also talks about how BYEN works to
                  uplift and be a better the Black Community.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          className="space-y-6 py-[80px]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {/* Image Pagination Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedImages.map((image, index) => (
              <motion.img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full h-[250px] object-cover rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={() => alert(`You clicked on ${image.alt}`)} // Example click event
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevious}
              className="mt-[50px] px-4 py-2 bg-[#6A402F] text-black rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="mt-[50px] px-4 py-2 bg-[#6A402F] text-black rounded-lg"
            >
              Next
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
