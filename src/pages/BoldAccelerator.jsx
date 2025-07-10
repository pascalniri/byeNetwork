import { motion } from 'framer-motion';
import { MdOutlineHorizontalRule } from 'react-icons/md';

export default function BoldAccelerator() {
  return (

    <div>
    <div className="bg-[#FAFAFA] font-montserrat flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
              <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
                <MdOutlineHorizontalRule />
                <p>B.O.L.D. ACCELERATOR</p>
                <MdOutlineHorizontalRule />
              </h1>
              <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
              Empowering the next generation of Black youth leaders through hands-on training and community impact              </p>
            </div>
    <div className="font-montserrat max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#693e2d] to-[#985b3c] text-white py-16 px-6 rounded-2xl my-[7rem] text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">B.O.L.D. Accelerator</h1>
        <p className="mb-6 text-[15px] leading-[20px] mt-4 text-white">Empowering the next generation of Black youth leaders through hands-on training and community impact</p>
      </motion.div> */}

      

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-12">
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#693e2d] mb-6 flex items-center">
              <MdOutlineHorizontalRule className="mr-2" />
              Our Journey
            </h2>
            <div className="space-y-6 text-[#6C6A6A] leading-relaxed text-[15px]">
              <p>
                Originally launched as the B.O.L.D. (Black Youth Onward In Leadership Development) Leadership Stipend, this initiative began as a pilot effort to directly support youth-led community impact. In its first round, B.O.L.D. awarded five Black youth a $100 stipend to contribute to the work they were already doing in their neighborhoods—from grassroots service to youth programming and advocacy.
              </p>
              <p>
                Since then, B.O.L.D. has transformed into the B.O.L.D. Accelerator—a four-week leadership development experience designed to take young changemakers to the next level. This fall, four selected participants will complete hands-on training in community organizing, project design, and leadership development. Each will receive a micro-grant to launch or grow a local project that addresses a real need in their community.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#f9f5f3] to-white p-8 rounded-xl shadow-lg border-l-4 border-[#693e2d]"
          >
            <h3 className="text-xl font-semibold text-[#693e2d] mb-4">Stay Tuned</h3>
            <p className="text-[#6C6A6A] mb-10 text-[15px]">
              Stay tuned for application details and upcoming announcements
            </p>
            <a href="mailto:blackyouthempowermentnetwork@gmail.com" target="_blank" className="relative text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-5 px-10 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold overflow-hidden group">
                  <span className="relative z-10">EMAIL US TO LEARN MORE</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </a>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#693e2d] mb-4">Program Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#f0e9e6] p-2 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-[#693e2d]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6C6A6A] text-[15px]">4-week intensive leadership development</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#f0e9e6] p-2 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-[#693e2d]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6C6A6A] text-[15px]">Hands-on training in community organizing</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#f0e9e6] p-2 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-[#693e2d]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6C6A6A] text-[15px]">Micro-grant funding for community projects</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#f0e9e6] p-2 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-[#693e2d]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6C6A6A] text-[15px]">Mentorship from experienced leaders</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#f9f5f3] to-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#693e2d] mb-4">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold text-[#693e2d]">4</p>
                <p className="text-[#6C6A6A]">Selected Participants</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#693e2d]">4</p>
                <p className="text-[#6C6A6A]">Weeks of Intensive Training</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#693e2d]">$100+</p>
                <p className="text-[#6C6A6A]">Micro-grant per Participant</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}