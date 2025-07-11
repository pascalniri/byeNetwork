import { motion } from 'framer-motion';
import { MdOutlineHorizontalRule } from 'react-icons/md';

export default function StartChapter() {
    return (
        <div className="font-montserrat">
            {/* Hero Section */}
            <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
                <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
                    <MdOutlineHorizontalRule />
                    <p className='uppercase'>Start a Chapter</p>
                    <MdOutlineHorizontalRule />
                </h1>
                <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
                Bring BYEN to Your Community                </p>
            </div>
        <div className="font-montserrat max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[5rem]">

            {/* Main Content */}
            <div className=" mx-auto space-y-12">
                {/* Introduction */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                >
                    <p className="text-[#6C6A6A] leading-relaxed text-[15px]">
                        Are you ready to lead where you are? The Black Youth Empowerment Network is expanding, and we're looking for bold, committed leaders to launch new chapters across the country. Starting a BYEN chapter means creating space for Black youth in your community to grow as leaders, serve their neighborhoods, and build power together.
                    </p>
                </motion.div>

                {/* What is BYEN Chapter */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-[#f9f5f3] to-white p-8 rounded-xl shadow-lg border-l-4 border-[#693e2d]"
                >
                    <h2 className="text-2xl font-bold text-[#693e2d] mb-6 flex items-center">
                        <MdOutlineHorizontalRule className="mr-2" />
                        What Is a BYEN Chapter?
                    </h2>
                    <p className="text-[#6C6A6A] mb-6 leading-relaxed text-[15px]">
                        A BYEN chapter is a youth-led extension of our national movement, based in a local school, college, or community. Chapters organize events, host service projects, lead issue-based campaigns, and represent the values of BYEN at the local level.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-[#693e2d] mt-8 mb-4">Every chapter receives:</h3>
                    <ul className="space-y-3">
                        {[
                            'A step-by-step Chapter Launch Toolkit',
                            'Access to our national leadership development trainings',
                            'A direct line to our National Team for support and resources',
                            'Visibility on our national platforms and in BYEN campaigns',
                            'A community of youth leaders across the country'
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-[#985b3c] mr-2">•</span>
                                <span className="text-[#6C6A6A] text-[15px]">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Who Can Start */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                >
                    <h2 className="text-2xl font-bold text-[#693e2d] mb-6 flex items-center">
                        <MdOutlineHorizontalRule className="mr-2" />
                        Who Can Start a Chapter?
                    </h2>
                    <p className="text-[#6C6A6A] mb-6 leading-relaxed text-[15px]">
                        Chapters are open to Black youth ages 16–24 who are committed to BYEN's mission of leadership, service, and empowerment.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-[#693e2d] mb-4">We especially welcome applications from:</h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        {[
                            'High school student leaders',
                            'HBCU and college campus organizers',
                            'Youth-led community groups',
                            'Rural and underserved communities'
                        ].map((item, index) => (
                            <div key={index} className="flex items-start">
                                <span className="text-[#985b3c] mr-2">•</span>
                                <p className="text-[#6C6A6A] text-[15px]">{item}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* What We're Looking For */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-to-br from-[#f9f5f3] to-white p-8 rounded-xl shadow-lg border-l-4 border-[#693e2d]"
                >
                    <h2 className="text-2xl font-bold text-[#693e2d] mb-6 flex items-center">
                        <MdOutlineHorizontalRule className="mr-2" />
                        What We're Looking For
                    </h2>
                    <p className="text-[#6C6A6A] mb-6 leading-relaxed text-[15px]">
                        Strong chapter founders demonstrate:
                    </p>
                    <ul className="space-y-3">
                        {[
                            'A commitment to grassroots leadership',
                            'Clear vision for impact in their community',
                            'Strong communication and organizing skills',
                            'Willingness to grow with and represent BYEN'
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-[#985b3c] mr-2">✓</span>
                                <span className="text-[#6C6A6A] text-[15px]">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-white p-8 rounded-xl shadow-lg text-center mb-16"
                >
                    <h2 className="text-2xl font-bold text-[#693e2d] mb-6">Ready to Lead?</h2>
                    <p className="text-[#6C6A6A] mb-8 max-w-2xl mx-auto leading-relaxed text-[15px]">
                        Starting a chapter is a chance to turn your ideas into action and be part of something bigger. You don't have to do it alone—BYEN will walk with you every step of the way.
                    </p>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r">
                        <div className="flex flex-col sm:flex-row items-center justify-center">
                            <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mr-3">
                                <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-sm text-amber-800 text-center sm:text-left">
                                <span className="font-semibold">Important Dates:</span> Application opens July 15th, priority deadline is July 31st, and regular deadline is August 15th.
                            </p>
                        </div>
                    </div>
                    
                    <p className="text-[#6C6A6A] text-[15px] mb-6">
                        Chapter proposal applications open Fall 2025.
                    </p>
                    {/* <button className="bg-[#693e2d] hover:bg-[#985b3c] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
                        Get Notified When Applications Open
                    </button> */}
                </motion.div>
            </div>
        </div>
        </div>
    );
}