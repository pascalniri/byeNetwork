import React from 'react';
import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';

// Import images from assets
import juliaImage from '../assets/member1.jpg';
import anotherImage from '../assets/member6.jpg';
import thirdImage from '../assets/member2.png';  
import fourthImage from '../assets/member3.jpg';
import fifthImage from '../assets/member4.jpg';
import sixthImage from '../assets/member5.png';

const profiles = [
  {
    image: juliaImage,
    name: 'Julia Huth',
    hometown: 'Wayne, New Jersey',
    major: 'Computer Science (LSA)',
    description: `Riley’s Way Connection/Sancommunity: I was involved with Riley’s Way in high school...`,
  },
  {
    image: anotherImage,
    name: 'Samantha Rosenberg',
    hometown: 'Long Island, New York',
    major: 'Art and Design (Stamps)',
    description: `Riley’s Way Connection/Sancommunity: I went to the same camp as Riley...`,
  },
  {
    image: thirdImage,
    name: 'Rachel Berrin',
    hometown: 'City, State',
    major: 'Information Analysis',
    description: `
   - Expand the Sancommunity platform
   - Enhance website design to be accessible to all users (regardless of if users have an account)      
   
   - Brainstorm strategies to encourage account creation on the platform

    `,
  },
  {
    image: fourthImage,
    name: 'Alexis Rogers',
    hometown: 'Manalapan, NJ',
    major: 'Organizational Studies and Psychology',
    description: `
   - Reach out and connect with nonprofits to help increase awareness about Sancommunity and create effective posts online.
   - Explore areas for improvement within the organization and come up with possible solutions.

    
    `,
  },
  {
    image: fifthImage,
    name: 'Abby Ostrager ',
    hometown: 'Long Island, New York',
    major: 'Organizational Studies',
    description: ` I am creative and I think that I can be helpful in coming up with content ideas to expand Sancommunity’s social media presence.`,
  },
  {
    image: sixthImage,
    name: 'Madden Schaffer  ',
    hometown: 'Potomac, Maryland ',
    major: 'Another Major',
    description: `
    - Make social media posts more frequently 
    - Expand Sancommunity onto social media platforms it’s not already on
Create graphics 
    - Think of new and creative ways to capture social media attention and gain a larger following  

    `,
  },
  // Add more profiles as needed
];

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-bold text-[60px] relative  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
        Our Team
      </h1>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" // Adjusted gaps for smaller cards
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Cards appear one after another
            },
          },
        }}
      >
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }} // Sliding right to left
          >
            <ProfileCard
              image={profile.image}
              name={profile.name}
              hometown={profile.hometown}
              major={profile.major}
              description={profile.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
