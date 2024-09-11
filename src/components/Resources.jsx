// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Resources = () => {
//   const [activeTab, setActiveTab] = useState('videos'); // State to track active tab

//   return (
//     <div className="w-full md:w-[80%] mx-auto p-4 mt-[150px] font-poppins">
//       {/* Tab navigation */}
//       <div className="flex space-x-4 border-b-2 border-gray-300 mb-4">
//         <button
//           className={`pb-2 ${activeTab === 'videos' ? 'border-b-4 border-black' : ''}`}
//           onClick={() => setActiveTab('videos')}
//         >
//           Videos
//         </button>
//         <button
//           className={`pb-2 ${activeTab === 'photos' ? 'border-b-4 border-black' : ''}`}
//           onClick={() => setActiveTab('photos')}
//         >
//           Team Photos
//         </button>
//       </div>

//       {/* Tab content */}
//       {activeTab === 'videos' ? (
//         <div>
//           {/* Word content */}
//           <p className="mb-4 text-lg">Here are some words about the project...</p>

//           {/* YouTube Video */}
//           <div className="aspect-w-16 aspect-h-9 gap-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       ) : (
//         <motion.div
//           className="flex space-x-4 overflow-x-scroll"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: 'spring', stiffness: 100 }}
//         >
//           {/* Team photos with cool scroll animation */}
//           {['/team1.jpg', '/team2.jpg', '/team3.jpg'].map((photo, index) => (
//             <motion.img
//               key={index}
//               src={photo}
//               alt={`Team member ${index + 1}`}
//               className="w-40 h-40 object-cover rounded-lg shadow-lg"
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: 'spring', stiffness: 200 }}
//             />
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Resources;
