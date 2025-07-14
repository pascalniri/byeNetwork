import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function Advert() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/') {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
        }, 300);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closePopup();
        }
    };

    if (!isVisible) return null;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                when: "beforeChildren",
                staggerChildren: 0.1,
                duration: 0.3
            }
        },
        exit: { opacity: 0 }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <AnimatePresence>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isClosing ? "exit" : "visible"}
                exit="exit"
                onClick={handleBackdropClick}
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            >
                <motion.div
                    variants={itemVariants}
                    className="relative bg-gradient-to-br from-[#5a3526] to-[#7a4a32] rounded-2xl p-8 max-w-md w-full shadow-2xl text-white overflow-hidden border border-amber-900/30"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-400/5 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-amber-600/5 rounded-full blur-2xl"></div>
                    
                    {/* Animated border highlight */}
                    <motion.div 
                        className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: 1,
                            background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                    />
                    
                    {/* Close button */}
                    <motion.button 
                        onClick={closePopup}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-all p-1.5 rounded-full hover:bg-white/10"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </motion.button>

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                        <div className="space-y-2">
                            <motion.div 
                                variants={itemVariants}
                                className="inline-block px-3 py-1 bg-amber-900/30 text-amber-300 text-xs font-medium rounded-full mb-2"
                            >
                                EXCLUSIVE OPPORTUNITY
                            </motion.div>
                            <motion.h2 
                                variants={itemVariants}
                                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-100 to-amber-200 bg-clip-text text-transparent"
                            >
                                Apply to Become a Member
                            </motion.h2>
                            <motion.p 
                                variants={itemVariants}
                                className="text-amber-100/90 leading-relaxed text-lg"
                            >

                            </motion.p>
                        </div>
                        
                        <motion.div
                            variants={itemVariants}
                            className="pt-2"
                        >
                            <motion.a
                                href="https://form.jotform.com/251785009779067"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ 
                                    scale: 1.03,
                                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block w-full text-center bg-gradient-to-r from-amber-400 to-amber-500 text-[#3a241a] hover:text-[#2a1a12] font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
                            >
                                Apply Now!
                            </motion.a>
                        </motion.div>
                        
                        <motion.div 
                            variants={itemVariants}
                            className="flex items-center justify-center space-x-2 pt-2"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div 
                                        key={i}
                                        className="w-8 h-8 rounded-full border-2 border-amber-900/20 bg-amber-300/80"
                                        style={{ zIndex: 3 - i }}
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-amber-100/70">
                                <span className="font-medium">Be a member</span> and unlock new opportunities for your future.
                            </p>
                        </motion.div>
                    </div>

                    {/* Floating elements */}
                    <motion.div 
                        className="absolute top-1/4 -left-4 w-8 h-8 rounded-full bg-amber-400/20"
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div 
                        className="absolute bottom-1/3 -right-2 w-5 h-5 rounded-full bg-white/10"
                        animate={{
                            y: [0, 15, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}