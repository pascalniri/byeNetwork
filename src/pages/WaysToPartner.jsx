import { motion } from 'framer-motion';
import { MdOutlineHorizontalRule, MdOutlineEmail } from 'react-icons/md';

export default function WaysToPartner() {
    return (
        <div className="font-montserrat">
            {/* Hero Section */}
            <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full my-[7rem]">
                <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
                    <MdOutlineHorizontalRule />
                    <p className='uppercase'>Become a Partner!</p>
                    <MdOutlineHorizontalRule />

                </h1>
                <p className='text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto'>
                    Fuel the Movement. Invest in the Future of Black Youth.
                </p>
            </div>
            <div className="font-montserrat max-w-7xl mx-auto">


                {/* Main Content */}
                <div className="mx-auto space-y-[5rem]">


                    {/* Become a Partner Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="bg-white text-[#693e2d] p-8 rounded-2xl"
                    >
                        <div className="grid md:grid-cols-2 gap-8 mb-12 shadow-lg rounded-2xl">
                            <div className="bg-white/5 p-6 rounded-xl ">
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <MdOutlineHorizontalRule className="mr-2 text-2xl" />
                                    Why Partner With BYEN?
                                </h3>
                                <p className="mb-4 text-[#6C6A6A]">
                                    BYEN is a national, youth-led organization committed to leadership development, community service, and advocacy.
                                </p>
                                <p className="font-medium mb-3 text-[#6C6A6A]">We work with partners who:</p>
                                <ul className="space-y-2 text-[#6C6A6A] text-[15px]">
                                    {[
                                        'Believe in youth-led change',
                                        'Serve or support Black youth ages 13 to 25',
                                        'Share our values of equity, collaboration, and cultural relevance',
                                        'Want to co-create programs, campaigns, or events with lasting impact'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-[#6C6A6A] mr-2">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <MdOutlineHorizontalRule className="mr-2 text-2xl" />
                                    Our Impact at a Glance
                                </h3>
                                <ul className="space-y-2 text-[#6C6A6A] text-[15px]">
                                    {[
                                        '200+ Black youth engaged nationally since Spring 2025',
                                        'Active presence in 25 states and growing',
                                        'Programs led by youth, shaped by lived experience',
                                        'Track record of organizing, advocacy, and community building',
                                        'Partnerships with HBCUs, schools, and youth-led groups'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-[#6C6A6A] mr-2">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#f9f5f3] to-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-center">Ways to Partner</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: 'Host a Chapter',
                                        description: 'We partner with schools and community organizations to help launch and sustain local BYEN chapters. Hosts provide meeting space, guidance, and local context, while BYEN provides structure, training, and national support.'
                                    },
                                    {
                                        title: 'Co-Design Programs or Campaigns',
                                        description: 'From mental health initiatives to civic engagement drives, we welcome collaboration with organizations that want to align on mission and create innovative, youth-centered solutions.'
                                    },
                                    {
                                        title: 'Provide Mentorship or Workshops',
                                        description: 'If your organization can offer coaching, technical assistance, or professional development to BYEN members, we would love to connect.'
                                    },
                                    {
                                        title: 'Support Events or Retreats',
                                        description: 'We\'re always looking for partners to support our leadership retreats, youth summits, and training days through sponsorships, speakers, and in-kind support.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/5 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                        <p className="text-[#6C6A6A] text-[15px]">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#f9f5f3] to-white mt-12 text-center text-[15px] p-[30px] shadow-lg">
                            <p className="text-lg mb-6">
                                If you're ready to partner with a national movement that centers youth leadership, local impact, and cultural power — we want to hear from you.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="https://form.jotform.com/251690471333152"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group text-center"
                                >
                                    Become a Partner
                                </a>
                                <a
                                    href="mailto:info@wearebyen.org"
                                    className="relative text-[#693e2d] border-2 border-[#693e2d] px-6 py-3 xl:py-4 xl:px-8 rounded-full hover:bg-[#693e2d] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group text-center"
                                >
                                    Email Us
                                </a>
                            </div>
                            <p className="mt-4 text-[15px] text-[#6C6A6A]">
                                Or email us at <a href="mailto:partners@wearebyen.org" className="underline hover:text-[#693e2d]">partners@wearebyen.org</a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}