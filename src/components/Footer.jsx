import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const footerLinks = [
  {
    label: "About",
    links: [
      { label: "History & Background", href: "/history-and-background" },
      { label: "Leadership Team", href: "/leadership" },
      { label: "Partners", href: "/partners" },
      { label: "Board of Advisors", href: "#" },
    ],
  },
  {
    label: "Programs",
    links: [
      { label: "Foundation", href: "/foundation" },
      { label: "Boots on the Ground", href: "/boots-on-the-ground" },
      { label: "B.O.L.D Accelerator", href: "/bold-accelerator" },
      { label: "National Internship", href: "/BYEN-national-internship" },
    ],
  },
  {
    label: "Get Involved",
    links: [
      { label: "Membership", href: "/membership" },
      { label: "Start a Chapter", href: "/start-chapter" },
      { label: "Donors & Sponsors", href: "/donors-and-sponsors" },
      { label: "Become a Partner", href: "/become-partner" },
      { label: "Events", href: "/events" },
      { label: "News & Blog", href: "/news-and-blog" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="font-montserrat bg-[#181818] border-t border-[#222] w-full pt-12 pb-6 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
        {/* Left: Logo & Description */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4 md:pr-8">
        <a href="/" className="w-[150px] h-[150px] flex items-center justify-center">
            <img src="/BLACK YOUTH.png" alt="logo" className="w-full h-full object-contain" />
          </a>
          <p className="text-[#bdbdbd] text-[15px] leading-[22px] max-w-xs">
            The Black Youth Empowerment Network (BYEN) is a youth-led organization dedicated to uplifting and empowering Black youth through leadership, entrepreneurship, and creative expression.
          </p>
          <div className="flex flex-row gap-4 mt-2">
            <a href="https://www.instagram.com/wearebyen/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <RiInstagramFill className="text-[#bdbdbd] text-[24px] hover:text-[#fff] transition-colors duration-200" />
            </a>
            <a href="https://www.youtube.com/@BlackYouthEmpowermentNetwork" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-[#bdbdbd] text-[24px] hover:text-[#fff] transition-colors duration-200" />
            </a>
            <a href="https://www.linkedin.com/company/black-youth-empowerment-network/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <SiLinkedin className="text-[#bdbdbd] text-[22px] hover:text-[#fff] transition-colors duration-200" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554206687351" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <BsFacebook className="text-[#bdbdbd] text-[22px] hover:text-[#fff] transition-colors duration-200" />
            </a>
          </div>
        </div>

        {/* Center: Links */}
        <div className="flex-[2] flex flex-col sm:flex-row gap-8 md:gap-16 justify-center">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white text-[16px] font-semibold mb-3 tracking-wide">{section.label}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-[#bdbdbd] text-[15px] hover:text-[#fff] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right: Contact & Donate */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4 md:pl-8 mt-4 md:mt-0">
          <h3 className="text-white text-[16px] font-semibold mb-3 tracking-wide">Contact</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-[#bdbdbd] text-[15px]">
              <MdOutlineMail className="text-[#985b3c] text-[20px]" />
              <a
                href="mailto:info@wearebyen.org"
                className="hover:text-[#fff] transition-colors duration-200"
              >
                info@wearebyen.org
              </a>
            </li>
            <li className="flex items-center gap-2 text-[#bdbdbd] text-[15px]">
              <IoLocationOutline className="text-[#985b3c] text-[20px]" />
              <span>USA</span>
            </li>
            <li className="flex items-center gap-2 text-[#bdbdbd] text-[15px]">
              <LuPhoneCall className="text-[#985b3c] text-[18px]" />
              <a
                href="tel:+1 (478) 283-3665"
                className="hover:text-[#fff] transition-colors duration-200"
              >
                +1 (478) 283-3665
              </a>
            </li>
          </ul>
          <a
            href="https://givebutter.com/4zAepQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-white bg-[#693e2d] hover:bg-[#985b3c] rounded-full py-4 px-6 font-semibold text-[15px] shadow-md transition-all duration-200 text-center"
          >
            Donate
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4 text-[#bdbdbd] text-[14px]">
        <p>© 2025 BYEN. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white underline transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-white underline transition-colors duration-200">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
