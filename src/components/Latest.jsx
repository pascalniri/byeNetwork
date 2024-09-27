import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Latest = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected card

  const cards = [
    {
      id: 1,
      name: "JABARI MORRISON",
      description:
        "An innovative leader, spearheaded the establishment of the Shiloh Student Athlete Association at Shiloh High School in Snellville, Georgia. In his capacity as founder, he orchestrated and moderated a thought-provoking panel discussion addressing the intricate balance between athletic pursuits and academic excellence.",
      image: "/jabari.jpeg",
    },
    {
      id: 2,
      name: "IKARION AMMON",
      description:
        "An Ambassador for the Black Youth Empowerment Network, has made significant strides with the recent launch of his visionary clothing line, '5 Digit.' Demonstrating unwavering dedication to his academic journey, he has chosen to embark on a path of higher education at Kennesaw State University, where he will focus his studies on Environmental Engineering.",
      image: "/ammon.jpg",
    },
    {
      id: 3,
      name: "A'TEV COGER",
      description:
        "An accomplished athlete with a bold vision, has committed to joining Peru State's esteemed football program. Alongside his athletic endeavors, he is poised to unveil his cutting-edge clothing brand, 'Only Fear Fear,' showcasing his entrepreneurial spirit and drive for success.",
      image: "/coger.jpeg",
    },
  ];

  const handleReadMore = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="font-outfit  font-light mx-auto px-4 md:w-[80%] mt-[100px] pb-[60px] md:pb-[150px] 2xl:w-[40%]">
      <div className="flex flex-col justify-center items-center ">
      <h1 className="font-bold text-[60px] relative  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
        Latest News
      </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[100px]">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="relative rounded-lg shadow-lg group w-full h-[250px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
            animate={{ y: ["0%", "-10%"] }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              },
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-t from-black to-[#00000087] h-full rounded-lg">
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-xl font-bold">{card.name}</p>
                <p className="text-[#c6c6c6] font-extralight">
                  {card.description.substring(0, 100)}...
                </p>
            
                <motion.button
                  onClick={() => handleReadMore(card)}
                  className="mt-[20px] font-light bg-white flex flex-row items-center justify-center gap-[10px] pl-[20px] pr-[6px] py-[6px] rounded-full"
              initial="hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-black">SEE MORE</p>
              <span className="bg-black px-[8px] py-[8px] rounded-full">
                <FaArrowRight className="text-white" />
              </span>
            </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for full information */}
      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 mx-auto px-4">
          <div className="bg-white p-6 rounded-lg max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedCard.name}</h2>
            <p className="mb-4">{selectedCard.description}</p>

            <motion.button
              onClick={handleCloseModal}
              className="mt-[20px] font-light bg-black flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[8px] rounded-full"
              initial="hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-white">CLOSE</p>
              <span className="bg-white px-[10px] py-[10px] rounded-full">
                <FaArrowRight />
              </span>
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Latest;
