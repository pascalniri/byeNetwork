import React from 'react';
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa6';

const ContactUs = () => {
  return (
   <div className='mx-auto px-4 font-outfit'>
     <div className="max-w-4xl  mx-auto py-10 px-6 bg-black rounded-lg shadow-md my-[8rem]">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
      <p className="text-lg text-gray-500 text-center mb-6">
        Have any questions? Feel free to reach out to us at{' '}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=blackyouthempowermentnetwork@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium text-[12px] sm:text-[14px] md:text-[18px] underline hover:text-blue-800"
        >
          blackyouthempowermentnetwork@gmail.com
        </a>.
      </p>
      <p className="text-lg text-gray-500 text-center">
        We're here to support you every step of the way on your journey with BYEN.
      </p>
      <div className="mt-8 flex justify-center">

      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=blackyouthempowermentnetwork@gmail.com" target="_blanck">
            <motion.button
              className="font-light flex bg-white flex-row items-center justify-center gap-[20px] pl-[30px] pr-[6px] py-[6px] rounded-full"
              initial="hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-black text-[14px]">Contact via Gmail</p>
              <span className="bg-black px-[10px] py-[10px] rounded-full">
                <FaArrowRight className="text-white" />
              </span>
            </motion.button>
          </a>
        
      </div>
    </div>
   </div>
  );
};

export default ContactUs;
