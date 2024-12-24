import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineHorizontalRule } from "react-icons/md";

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  const images = [
    {
      id: 1,
      src: "/1.jpeg",
      alt: "Team member 1",
    },
    {
      id: 2,
      src: "/2.jpg",
      alt: "Team member 2",
    },
    {
      id: 3,
      src: "/3.jpg",
      alt: "Team member 3",
    },
    {
      id: 4,
      src: "/4.jpg",
      alt: "Team member 4",
    },
    {
      id: 5,
      src: "/5.jpg",
      alt: "Team member 5",
    },
    {
      id: 6,
      src: "/6.jpg",
      alt: "Team member 6",
    },
    {
      id: 7,
      src: "/7.jpg",
      alt: "Team member 7",
    },
  ];
  return (
    <div className="font-poppins">
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full">
        <h1 className="font-teko flex flex-row items-center gap-2 md:text-[70px] text-[#9e6548] text-[45px] font-medium">
          <MdOutlineHorizontalRule />
          <p>GALLERY</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] text-[#6C6A6A] md:w-[80%] mx-auto">
          Step into our gallery and relive the moments that define our journey.
          From inspiring events to impactful collaborations, explore the visuals
          that capture the essence of our mission and the vibrant community
          we’ve built together.
        </p>
      </div>

      <div className=" max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem]">
        {/* Image Pagination Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <motion.div
              key={image.id} // Add key for each item
              layoutId={image.id.toString()} // Ensure layoutId is a string
              onClick={() => setSelectedId(image.id)}
              className="cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg border shadow-lg"
              />
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
    </div>
  );
};

export default Gallery;
