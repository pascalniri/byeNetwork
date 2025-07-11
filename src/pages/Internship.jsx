import { MdOutlineHorizontalRule } from "react-icons/md";
import { motion } from "framer-motion";

export default function Internship() {
    return (
        <div className="font-montserrat">
            {/* Hero Section */}
            <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
                <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
                    <MdOutlineHorizontalRule />
                    <p className='uppercase'>BYEN National Internship</p>
                    <MdOutlineHorizontalRule />
                </h1>
                <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
                    The Black Youth Empowerment Network National Internship is a hands-on leadership and social impact experience designed for high school students who are passionate about creating change in their communities. This national program introduces young Black leaders to the world of nonprofit work, community organizing, and youth-led advocacy through a structured and supportive environment.
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
                    <h2 className="text-2xl font-bold text-[#693e2d] mb-6">About the Internship</h2>
                    <p className="text-[#6C6A6A] leading-relaxed text-[15px] mb-6">
                        Spearheaded by
                        <a href="/leadership/james-brazzell" className="text-[#693e2d] font-semibold hover:underline flex items-center gap-2">
                            <span className="flex items-center gap-2 my-5">
                                <img src="/james.jpg" alt="James Brazzell" className="inline-block w-10 h-10  rounded-full object-cover border-2 border-[#693e2d] mr-2" />
                                James Brazzell
                            </span>
                        </a>
                        BYEN's Deputy Executive Director, the internship gives participants the opportunity to work closely with BYEN's national team. Interns contribute to real projects in areas like civic engagement, outreach, storytelling, and creative strategy, while gaining exposure to leadership development, youth organizing, and community-based impact.
                    </p>
                    <p className="text-[#6C6A6A] leading-relaxed text-[15px] mb-6">
                        Interns receive mentorship, access to skill-building workshops, and support in leading initiatives that reflect the needs of their local communities. The internship centers youth voice and agency—participants are not just learning, they are leading.
                    </p>
                    <div className="bg-gradient-to-br from-[#f9f5f3] to-white p-6 rounded-xl shadow-md border-l-4 border-[#693e2d] mb-6">
                        <h3 className="text-xl font-bold text-[#693e2d] mb-2">What You'll Gain</h3>
                        <ul className="list-disc pl-6 text-[#6C6A6A] text-[15px] space-y-2">
                            <li>Hands-on experience in nonprofit leadership and social impact</li>
                            <li>Mentorship from national youth leaders</li>
                            <li>Opportunities to lead real projects and initiatives</li>
                            <li>Workshops on advocacy, organizing, and creative strategy</li>
                            <li>Support in developing your own community impact ideas</li>
                        </ul>
                    </div>
                    <p className="text-[#6C6A6A] leading-relaxed text-[15px] mb-6">
                        Applications for the next cohort will open soon. Stay tuned for details and how to get involved in this powerful, youth-driven opportunity.
                    </p>
                </motion.div>

                {/* James Brazzell Card (for visual emphasis on desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
                >
                    <img src="/james.jpg" alt="James Brazzell" className="w-32 h-32 rounded-full object-cover border-4 border-[#693e2d] mb-4" />
                    <a href="/leadership/james-brazzell" className="text-2xl font-bold text-[#693e2d] hover:underline mb-1">James Brazzell</a>
                    <p className="text-[#6C6A6A] text-[15px] mb-2">Deputy Executive Director</p>
                    <p className="text-[#6C6A6A] text-[14px] italic">“Empowering Black youth means equipping them with the tools, support, and belief they need to lead without limits.”</p>
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