import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function Advert() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show banner after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none flex justify-center"
                >
                    <div className="font-montserrat bg-white border-t-4 sm:border-t-0 sm:border-l-4 border-[#693e2d] shadow-[0_0_40px_rgba(0,0,0,0.15)] rounded-xl p-4 sm:p-5 max-w-5xl w-full pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100 relative">
                        <div className="flex-1 text-sm sm:text-base text-gray-800 pr-6 sm:pr-0">
                            <strong className="text-[#693e2d] block sm:inline mb-1 sm:mb-0">Exciting Updates Ahead: </strong>
                            We're currently updating our website. Some information may be outdated as we work on improvements. Relaunching in Late Summer 2026. Questions? Contact <a href="mailto:info@wearebyen.org" className="text-[#985b3c] hover:underline font-semibold transition-colors">info@wearebyen.org</a>.
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto justify-end mt-2 sm:mt-0">
                            <button
                                onClick={closePopup}
                                className="bg-[#693e2d] hover:bg-[#985b3c] text-white px-6 py-2.5 sm:py-2 rounded-full font-medium transition-colors whitespace-nowrap shadow-md hover:shadow-lg w-full sm:w-auto text-sm"
                            >

                                Got it
                            </button>
                        </div>
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 sm:hidden text-gray-400 hover:text-gray-600 p-1 transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}