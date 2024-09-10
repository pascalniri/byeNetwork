import React from "react";
import { motion } from "framer-motion";

const Latest = () => {
  return (
    <div className="font-poppins mx-auto px-4 md:w-[80%] mt-[100px] md:mt-[150px]">
      <h1 className="text-[40px] font-poppins font-light">
        <span className="font-semibold">Latest</span> News
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[40px]">
        {/* First Card */}
        <motion.div
          className="relative rounded-lg shadow-lg group w-full h-[250px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://byenetwork.org/wp-content/uploads/2024/04/IMG_2322.jpeg)",
          }}
          animate={{ y: ["0%", "-10%"] }} // Bounce up and down
          transition={{
            y: {
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Reverse direction
              duration: 2, // Bounce speed
              ease: "easeInOut", // Smooth bounce effect
            },
          }}
          whileHover={{ scale: 1.05 }} // Slight zoom on hover
        >
          <div className="bg-gradient-to-t from-black to-[#00000087] h-full rounded-lg">
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white text-xl font-bold">JABARI MORRISON</p>
              <p className="text-[#c6c6c6] font-extralight text-[12px]">
                An innovative leader, spearheaded the establishment of the
                Shiloh Student Athlete Association at Shiloh High School in
                Snellville, Georgia. In his capacity as founder, he orchestrated
                and moderated a thought-provoking panel discussion addressing
                the intricate balance between athletic pursuits and academic
                excellence
              </p>
            </div>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="relative rounded-lg shadow-lg group w-full h-[250px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://byenetwork.org/wp-content/uploads/2024/04/IMG_2323.png)",
          }}
          animate={{ y: ["0%", "-10%"] }} // Bounce up and down
          transition={{
            y: {
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Reverse direction
              duration: 2, // Bounce speed
              ease: "easeInOut", // Smooth bounce effect
            },
          }}
          whileHover={{ scale: 1.05 }} // Slight zoom on hover
        >
          <div className="bg-gradient-to-t from-black to-[#00000087] h-full rounded-lg">
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white text-xl font-bold">IKARION AMMON</p>
              <p className="text-[#c6c6c6] font-extralight text-[12px]">
                An Ambassador for the Black Youth Empowerment Network, has made
                significant strides with the recent launch of his visionary
                clothing line, "5 Digit." Demonstrating unwavering dedication to
                his academic journey, he has chosen to embark on a path of
                higher education at Kennesaw State University, where he will
                focus his studies on Environmental Engineering.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Third Card */}
        <motion.div
          className="relative rounded-lg shadow-lg group w-full h-[250px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://byenetwork.org/wp-content/uploads/2024/04/IMG_2324.jpeg)",
          }}
          animate={{ y: ["0%", "-10%"] }} // Bounce up and down
          transition={{
            y: {
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Reverse direction
              duration: 2, // Bounce speed
              ease: "easeInOut", // Smooth bounce effect
            },
          }}
          whileHover={{ scale: 1.05 }} // Slight zoom on hover
        >
          <div className="bg-gradient-to-t from-black to-[#00000087] h-full rounded-lg">
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white text-xl font-bold">A'TEV COGER</p>
              <p className="text-[#c6c6c6] font-extralight text-[12px]">
                An accomplished athlete with a bold vision, has committed to
                joining Peru State's esteemed football program. Alongside his
                athletic endeavors, he is poised to unveil his cutting-edge
                clothing brand, "Only Fear Fear," showcasing his entrepreneurial
                spirit and drive for success.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Latest;
