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
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
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
    <nav className={`font-montserrat text-[14px] bg-white/90 backdrop-blur-[8px] border-b border-gray-200/50 fixed w-full top-0 z-50 transition-all duration-300 ease-in-out shadow-sm ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between w-full h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
          <img src="/logoo.svg" alt="logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
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
            <div className="absolute left-0 mt-1 w-52 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <a href="/events" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] transition-all duration-200 font-medium">
                  Events
                </a>
                <a href="/mentorship" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] transition-all duration-200 font-medium">
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
            <div className="absolute left-0 mt-1 w-52 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <a href="/leadership" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] transition-all duration-200 font-medium">
                  Leadership
                </a>
                <a href="/partners" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] transition-all duration-200 font-medium">
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
            <div className="absolute left-0 mt-1 w-52 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <a href="/foundation" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] transition-all duration-200 font-medium">
                  Foundation
                </a>
                <a href="/gallery" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#693e2d]/10 hover:to-[#985b3c]/10 hover:text-[#693e2d] transition-all duration-200 font-medium">
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
          className="lg:hidden text-black focus:outline-none z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenuAlt3 className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 w-[85%] sm:w-[70%] md:w-[60%] max-w-[400px] h-full bg-white/95 backdrop-blur-md z-40 transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'} overflow-y-auto`}>
        <div className="py-20 px-6">
          <a href="/" onClick={closeMobileMenu} className="block py-4 text-lg font-semibold text-black hover:text-[#693e2d] border-b border-gray-200 transition-colors duration-200">
            Home
          </a>
          <a href="/membership" onClick={closeMobileMenu} className="block py-4 text-lg font-semibold text-black hover:text-[#693e2d] border-b border-gray-200 transition-colors duration-200">
            Membership
          </a>
          
          {/* Resources Dropdown */}
          <div className="border-b border-gray-200">
            <button
              onClick={toggleDropdown1}
              className="flex justify-between items-center w-full py-4 text-lg font-semibold text-black hover:text-[#693e2d] transition-colors duration-200"
            >
              <span>Resources</span>
              <FiChevronDown className={`transform transition-transform duration-300 w-5 h-5 ${isDropdownOpen1 ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen1 ? 'max-h-32 pb-2' : 'max-h-0'}`}>
              <a href="/events" onClick={closeMobileMenu} className="block py-3 pl-4 text-gray-600 hover:text-[#693e2d] font-medium transition-colors duration-200">
                Events
              </a>
              <a href="/mentorship" onClick={closeMobileMenu} className="block py-3 pl-4 text-gray-600 hover:text-[#693e2d] font-medium transition-colors duration-200">
                Mentorship
              </a>
            </div>
          </div>

          {/* Our Team Dropdown */}
          <div className="border-b border-gray-200">
            <button
              onClick={toggleDropdown2}
              className="flex justify-between items-center w-full py-4 text-lg font-semibold text-black hover:text-[#693e2d] transition-colors duration-200"
            >
              <span>Our Team</span>
              <FiChevronDown className={`transform transition-transform duration-300 w-5 h-5 ${isDropdownOpen2 ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen2 ? 'max-h-32 pb-2' : 'max-h-0'}`}>
              <a href="/leadership" onClick={closeMobileMenu} className="block py-3 pl-4 text-gray-600 hover:text-[#693e2d] font-medium transition-colors duration-200">
                Leadership
              </a>
              <a href="/partners" onClick={closeMobileMenu} className="block py-3 pl-4 text-gray-600 hover:text-[#693e2d] font-medium transition-colors duration-200">
                Partners
              </a>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div className="border-b border-gray-200">
            <button
              onClick={toggleDropdown3}
              className="flex justify-between items-center w-full py-4 text-lg font-semibold text-black hover:text-[#693e2d] transition-colors duration-200"
            >
              <span>Projects</span>
              <FiChevronDown className={`transform transition-transform duration-300 w-5 h-5 ${isDropdownOpen3 ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen3 ? 'max-h-32 pb-2' : 'max-h-0'}`}>
              <a href="/foundation" onClick={closeMobileMenu} className="block py-3 pl-4 text-gray-600 hover:text-[#693e2d] font-medium transition-colors duration-200">
                Foundation
              </a>
              <a href="/gallery" onClick={closeMobileMenu} className="block py-3 pl-4 text-gray-600 hover:text-[#693e2d] font-medium transition-colors duration-200">
                Gallery
              </a>
            </div>
          </div>

          {/* Mobile Donate Button */}
          <div className="mt-8">
            <a href="/" onClick={closeMobileMenu} className="bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-xl w-full flex justify-center text-white py-4 px-6 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg font-semibold text-lg">
              DONATE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
