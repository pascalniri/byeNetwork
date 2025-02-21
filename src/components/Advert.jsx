import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Advert = () => {
  const [showAdvert, setShowAdvert] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowAdvert(true);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setShowAdvert(false);
  };

  return (
    <>
      {/* Sticky Top Banner */}
      

      {/* Popup Banner (Only on Home Route) */}
      {showAdvert && (
        <motion.div
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "30vh", opacity: 1 }}
          exit={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg relative w-full h-[43rem] md:h-auto md:pb-[10rem] text-center">
            <button
              className="absolute top-6 right-6 text-red-500 hover:text-red-700"
              onClick={handleClose}
            >
              <FaTimes size={25} />
            </button>
            <h2 className="text-xl font-bold my-5 ">🎉New Application Open🎉</h2>
            <div className="text-gray-600 md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8">
              <span>
                <img src="/bold.jpg" alt="bold stipend" />
              </span>
              <span>
              <p className="text-start">
              The B.O.L.D Stipend Program provides financial support to young
              leaders who are actively engaging in leadership roles, advocacy,
              or community service. This stipend can be used for
              leadership-related expenses, such as attending conferences,
              launching initiatives, or running for student government.
              </p>
              <a href="https://forms.gle/vuAj8SNDk5fzWkETA" target="_blank">
                <button className="flex flex-row text-[14px] items-center text-white gap-2 bg-[#693e2d] rounded-full py-4 px-10 mt-3 md:mt-10 hover:bg-[#985b3c] duration-200">
                  <p>APPLY NOW</p>
                </button>
              </a>
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Advert;
