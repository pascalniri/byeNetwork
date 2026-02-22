import { motion } from 'framer-motion';

export default function ScrollingAdvert() {
    const announcement = "Upcoming Event Feb 28th • Teach To Empower: Law & Public Policy Forum • Connecting Future Leaders to Careers, Insights, and Opportunities in Law and Policy • RSVP Now • ";
    
    return (
        <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#5a3526] via-[#7a4a32] to-[#5a3526] text-amber-200 py-2.5 z-[101] overflow-hidden border-b border-amber-900/30 whitespace-nowrap shadow-md">
            <motion.div
                animate={{
                    x: [0, -1000],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="inline-block"
            >
                <div className="flex items-center space-x-8">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center space-x-8">
                            <span className="font-semibold text-xs tracking-wide">
                                {announcement}
                            </span>
                            <a 
                                href="https://givebutter.com/CmZwOc" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-amber-400 text-[#3a241a] px-4 py-0.5 rounded-full text-xs font-bold hover:bg-amber-300 transition-colors uppercase"
                            >
                                RSVP Now
                            </a>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}