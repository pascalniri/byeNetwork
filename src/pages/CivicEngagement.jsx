import { MdOutlineHorizontalRule } from "react-icons/md";
import { motion } from "framer-motion";

export default function CivicEngagement() {
  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
        <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p className='uppercase'>Boots on the Ground</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
          Boots on the Ground is BYEN’s national civic engagement campaign that mobilizes Black youth to take action in their communities through direct service, grassroots organizing, and voter education. This initiative empowers our members to be visible, vocal, and grounded in the issues that impact their everyday lives.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem] grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Main Text */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg lg:col-span-2"
        >
          <h2 className="text-2xl font-bold text-[#693e2d] mb-6">About the Campaign</h2>
          <p className="text-[#6C6A6A] leading-relaxed text-[15px] mb-6">
            Led by 
            <a href="/leadership/theron-white" className="text-[#693e2d] font-semibold hover:underline flex items-center gap-2">
              <span className="flex items-center gap-2 my-5">
                <img src="/theron.png" alt="Theron White" className="inline-block w-10 h-10 rounded-full object-cover border-2 border-[#693e2d] mr-2" />
                Theron White
              </span>
            </a>
            and <span className="text-[#693e2d] font-semibold">Tobias Brown</span>, BYEN’s Community Advocacy Strategists, Boots on the Ground is about more than showing up. It is about building real power at the local level. From canvassing and town halls to mutual aid and advocacy work, our members are on the frontlines of youth-led transformation.
          </p>
          <div className="bg-gradient-to-br from-[#f9f5f3] to-white p-6 rounded-xl shadow-md border-l-4 border-[#693e2d] mb-6">
            <h3 className="text-xl font-bold text-[#693e2d] mb-2">How We Make an Impact</h3>
            <ul className="list-disc pl-6 text-[#6C6A6A] text-[15px] space-y-2">
              <li>Direct service projects and mutual aid efforts</li>
              <li>Grassroots organizing and advocacy work</li>
              <li>Voter education and civic participation</li>
              <li>Facilitating town halls and community forums</li>
              <li>Building youth power from the ground up</li>
            </ul>
          </div>
          <p className="text-[#6C6A6A] leading-relaxed text-[15px] mb-6">
            Stay tuned for more information and upcoming opportunities to get involved.
          </p>
        </motion.div>

        {/* Theron White Card (for visual emphasis on desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
        >
          <img src="/theron.png" alt="Theron White" className="w-32 h-32 rounded-full object-cover border-4 border-[#693e2d] mb-4" />
          <a href="/leadership/theron-white" className="text-2xl font-bold text-[#693e2d] hover:underline mb-1">Theron White</a>
          <p className="text-[#6C6A6A] text-[15px] mb-2">Community Advocacy Strategist</p>
          <p className="text-[#6C6A6A] text-[14px] italic">“Empowering communities through intentional engagement, education, and strategic action.”</p>
        </motion.div>

        <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-[#f9f5f3] to-white p-8 rounded-xl shadow-lg border-l-4 border-[#693e2d] w-full"
                >
                    <h3 className="text-xl font-semibold text-[#693e2d] mb-4">Stay Tuned</h3>
                    <p className="text-[#6C6A6A] mb-10 text-[15px]">
                        Stay tuned for application details and upcoming announcements
                    </p>
                    <a href="mailto:info@wearebyen.org" target="_blank" className="relative bottom-2 text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-5 px-10 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-regular overflow-hidden group">
                        <span className="relative z-10">EMAIL US TO LEARN MORE</span>
                        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                    </a>
                </motion.div>
      </div>
    </div>
  );
}