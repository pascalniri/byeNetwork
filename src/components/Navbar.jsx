import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu when clicking outside or on links
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Hover handlers for desktop dropdowns
  const openDropdown1 = () => setDropdownOpen1(true);
  const openDropdown2 = () => setDropdownOpen2(true);
  const openDropdown3 = () => setDropdownOpen3(true);
  
  const closeDropdown1 = () => setDropdownOpen1(false);
  const closeDropdown2 = () => setDropdownOpen2(false);
  const closeDropdown3 = () => setDropdownOpen3(false);
  
  // Click handlers for mobile dropdowns
  const toggleDropdown1 = () => setDropdownOpen1(!isDropdownOpen1);
  const toggleDropdown2 = () => setDropdownOpen2(!isDropdownOpen2);
  const toggleDropdown3 = () => setDropdownOpen3(!isDropdownOpen3);

  return (
    <>
      <nav className={`font-montserrat text-sm sm:text-[14px] bg-white/95 backdrop-blur-[10px] border-b border-gray-200/60 fixed w-full top-0 z-[100] transition-all duration-300 ease-in-out shadow-lg ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 flex items-center justify-between w-full h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <img src="/logoo.svg" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="/" className="relative text-black hover:text-[#693e2d] py-6 transition-colors duration-300 group font-medium">
              Home
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-[#693e2d] to-[#985b3c] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </a>
            
            <a href="/membership" className="relative text-black hover:text-[#693e2d] py-6 transition-colors duration-300 group font-medium">
              Membership
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-[#693e2d] to-[#985b3c] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </a>

            {/* Resources Dropdown */}
            <div className="relative group" onMouseEnter={openDropdown1} onMouseLeave={closeDropdown1}>
              <button className="flex items-center space-x-1 cursor-pointer text-black hover:text-[#693e2d] py-6 transition-colors duration-300 relative font-medium">
                <span>Resources</span>
                <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180 w-4 h-4" />
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-[#693e2d] to-[#985b3c] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </button>
              <div className="absolute left-0 mt-1 w-52 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 bg-gradient-to-br from-gray-50 to-white rounded-xl">
                  <a href="/events" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/15 hover:to-[#985b3c]/15 hover:text-[#693e2d] transition-all duration-200 font-medium rounded-lg mx-2">
                    Events
                  </a>
                  <a href="/mentorship" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/15 hover:to-[#985b3c]/15 hover:text-[#693e2d] transition-all duration-200 font-medium rounded-lg mx-2">
                    Mentorship
                  </a>
                </div>
              </div>
            </div>

            {/* Our Team Dropdown */}
            <div className="relative group" onMouseEnter={openDropdown2} onMouseLeave={closeDropdown2}>
              <button className="flex items-center space-x-1 cursor-pointer text-black hover:text-[#693e2d] py-6 transition-colors duration-300 relative font-medium">
                <span>Our Team</span>
                <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180 w-4 h-4" />
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-[#693e2d] to-[#985b3c] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </button>
              <div className="absolute left-0 mt-1 w-52 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 bg-gradient-to-br from-gray-50 to-white rounded-xl">
                  <a href="/leadership" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/15 hover:to-[#985b3c]/15 hover:text-[#693e2d] transition-all duration-200 font-medium rounded-lg mx-2">
                    Leadership
                  </a>
                  <a href="/partners" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/15 hover:to-[#985b3c]/15 hover:text-[#693e2d] transition-all duration-200 font-medium rounded-lg mx-2">
                    Partners
                  </a>
                </div>
              </div>
            </div>

            {/* Projects Dropdown */}
            <div className="relative group" onMouseEnter={openDropdown3} onMouseLeave={closeDropdown3}>
              <button className="flex items-center space-x-1 cursor-pointer text-black hover:text-[#693e2d] py-6 transition-colors duration-300 relative font-medium">
                <span>Projects</span>
                <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180 w-4 h-4" />
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-[#693e2d] to-[#985b3c] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </button>
              <div className="absolute left-0 mt-1 w-52 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 bg-gradient-to-br from-gray-50 to-white rounded-xl">
                  <a href="/foundation" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/15 hover:to-[#985b3c]/15 hover:text-[#693e2d] transition-all duration-200 font-medium rounded-lg mx-2">
                    Foundation
                  </a>
                  <a href="/gallery" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/15 hover:to-[#985b3c]/15 hover:text-[#693e2d] transition-all duration-200 font-medium rounded-lg mx-2">
                    Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Donate Button */}
          <div className="hidden lg:block">
            <a href="/" className="relative text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-sm xl:text-base overflow-hidden group">
              <span className="relative z-10">DONATE</span>
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black focus:outline-none z-[60] p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center relative"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <HiMenuAlt3 className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-[9998] lg:hidden" 
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 w-[85%] sm:w-[75%] md:w-[65%] max-w-[400px] h-full bg-white z-[9999] transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'} overflow-y-auto border-l border-gray-200`}>
        <div className="py-16 sm:py-20 px-4 sm:px-6">
          {/* Close button inside mobile menu */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <HiX className="w-5 h-5" />
          </button>
          
          <a href="/" onClick={closeMobileMenu} className="block py-3 sm:py-4 text-base sm:text-lg font-semibold text-black hover:text-[#693e2d] border-b border-gray-200 transition-colors duration-200">
            Home
          </a>
          <a href="/membership" onClick={closeMobileMenu} className="block py-3 sm:py-4 text-base sm:text-lg font-semibold text-black hover:text-[#693e2d] border-b border-gray-200 transition-colors duration-200">
            Membership
          </a>
          
          {/* Resources Dropdown */}
          <div className="border-b border-gray-200 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-lg mb-1">
            <button
              onClick={toggleDropdown1}
              className="flex justify-between items-center w-full py-3 sm:py-4 px-2 text-base sm:text-lg font-semibold text-black hover:text-[#693e2d] transition-colors duration-200 rounded-lg"
            >
              <span>Resources</span>
              <FiChevronDown className={`transform transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 ${isDropdownOpen1 ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen1 ? 'max-h-32 pb-2' : 'max-h-0'}`}>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg mx-2 p-1">
                <a href="/events" onClick={closeMobileMenu} className="block py-2 sm:py-3 pl-4 text-sm sm:text-base text-gray-600 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] font-medium transition-colors duration-200 rounded-lg">
                  Events
                </a>
                <a href="/mentorship" onClick={closeMobileMenu} className="block py-2 sm:py-3 pl-4 text-sm sm:text-base text-gray-600 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] font-medium transition-colors duration-200 rounded-lg">
                  Mentorship
                </a>
              </div>
            </div>
          </div>

          {/* Our Team Dropdown */}
          <div className="border-b border-gray-200 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-lg mb-1">
            <button
              onClick={toggleDropdown2}
              className="flex justify-between items-center w-full py-3 sm:py-4 px-2 text-base sm:text-lg font-semibold text-black hover:text-[#693e2d] transition-colors duration-200 rounded-lg"
            >
              <span>Our Team</span>
              <FiChevronDown className={`transform transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 ${isDropdownOpen2 ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen2 ? 'max-h-32 pb-2' : 'max-h-0'}`}>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg mx-2 p-1">
                <a href="/leadership" onClick={closeMobileMenu} className="block py-2 sm:py-3 pl-4 text-sm sm:text-base text-gray-600 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] font-medium transition-colors duration-200 rounded-lg">
                  Leadership
                </a>
                <a href="/partners" onClick={closeMobileMenu} className="block py-2 sm:py-3 pl-4 text-sm sm:text-base text-gray-600 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] font-medium transition-colors duration-200 rounded-lg">
                  Partners
                </a>
              </div>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div className="border-b border-gray-200 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-lg mb-1">
            <button
              onClick={toggleDropdown3}
              className="flex justify-between items-center w-full py-3 sm:py-4 px-2 text-base sm:text-lg font-semibold text-black hover:text-[#693e2d] transition-colors duration-200 rounded-lg"
            >
              <span>Projects</span>
              <FiChevronDown className={`transform transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 ${isDropdownOpen3 ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen3 ? 'max-h-32 pb-2' : 'max-h-0'}`}>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg mx-2 p-1">
                <a href="/foundation" onClick={closeMobileMenu} className="block py-2 sm:py-3 pl-4 text-sm sm:text-base text-gray-600 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] font-medium transition-colors duration-200 rounded-lg">
                  Foundation
                </a>
                <a href="/gallery" onClick={closeMobileMenu} className="block py-2 sm:py-3 pl-4 text-sm sm:text-base text-gray-600 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] font-medium transition-colors duration-200 rounded-lg">
                  Gallery
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Donate Button */}
          <div className="mt-6 sm:mt-8">
            <a href="/" onClick={closeMobileMenu} className="relative text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full w-full flex justify-center py-3 sm:py-4 px-6 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-base sm:text-lg overflow-hidden group">
              <span className="relative z-10">DONATE</span>
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
