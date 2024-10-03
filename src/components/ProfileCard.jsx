import React from 'react';
import { motion } from 'framer-motion';

const ProfileCard = ({ image, name, hometown, major, description }) => {
  return (
    <motion.div
      className="w-full max-w-md rounded overflow-hidden shadow-lg p-4 bg-white" // Reduced card size
      initial={{ opacity: 0, x: 100 }} // Animation starts off to the right (100px)
      animate={{ opacity: 1, x: 0 }} // Slides to the left to its final position
      transition={{ duration: 0.5, ease: 'easeOut' }} // Control speed and easing of the animation
    >
      <img className="w-full rounded-lg" src={image} alt={`${name} profile`} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{name} - Co-Leader</div> {/* Adjusted font size */}
        <p className="text-gray-700 text-sm">
          <strong>Hometown: </strong>{hometown}
        </p>
        <p className="text-gray-700 text-sm">
          <strong>Major: </strong>{major}
        </p>
        <p className="text-gray-700 text-sm mt-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
