import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const footerLinks = [
  {
    label: "About",
    links: [
      { label: "Our History", href: "/history-and-background" },
      { label: "Our Team", href: "/leadership" },
      { label: "Partners", href: "/partners" },
      { label: "Our Board of Directors", href: "/board-of-directors" },
    ],
  },
  {
    label: "Chapters",
    links: [{ label: "Our Chapters", href: "/chapters" }],
  },
  {
    label: "Programs",
    links: [{ label: "Young, Black, and Safe", href: "/young-black-and-safe" }],
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
    <footer className="relative bg-brand-brown border-t-4 border-brand-chili w-full pt-14 pb-6 px-4 md:px-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'url("/branding/SVG/Pattern_Cream.svg")',
          backgroundRepeat: "repeat",
          backgroundSize: "220px auto",
        }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
        <div className="flex-1 min-w-[220px] flex flex-col gap-4 md:pr-8">
          <Link href="/" className="w-fit">
            <img
              src="/branding/02_ Logos/Stacked Logo/PNG/Logo_Stacked_Cream.png"
              alt="Black Youth Empowerment Network"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-brand-cream/70 text-sm leading-relaxed max-w-xs">
            The Black Youth Empowerment Network (BYEN) is a youth-led organization dedicated to uplifting and
            empowering Black youth through leadership, entrepreneurship, and creative expression.
          </p>
          <div className="flex flex-row gap-4 mt-2">
            <a href="https://www.instagram.com/wearebyen/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <RiInstagramFill className="text-brand-cream/70 text-2xl hover:text-brand-lime transition-colors duration-200" />
            </a>
            <a href="https://www.youtube.com/@BlackYouthEmpowermentNetwork" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-brand-cream/70 text-2xl hover:text-brand-lime transition-colors duration-200" />
            </a>
            <a href="https://www.linkedin.com/company/black-youth-empowerment-network/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-brand-cream/70 text-xl hover:text-brand-lime transition-colors duration-200" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554206687351" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <BsFacebook className="text-brand-cream/70 text-xl hover:text-brand-lime transition-colors duration-200" />
            </a>
          </div>
        </div>

        <div className="flex-[2] flex flex-col sm:flex-row gap-8 md:gap-16 justify-center">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-3">{section.label}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-brand-cream/70 text-sm hover:text-brand-lime transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex-1 min-w-[220px] flex flex-col gap-4 md:pl-8 mt-4 md:mt-0">
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-3">Contact</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-brand-cream/70 text-sm">
              <MdOutlineMail className="text-brand-lime text-xl" />
              <a href="mailto:info@wearebyen.org" className="hover:text-white transition-colors duration-200">
                info@wearebyen.org
              </a>
            </li>
            <li className="flex items-center gap-2 text-brand-cream/70 text-sm">
              <IoLocationOutline className="text-brand-lime text-xl" />
              <span>USA</span>
            </li>
          </ul>
          <a
            href="https://givebutter.com/4zAepQ"
            target="_blank"
            rel="noopener noreferrer"
            className="notch-sm mt-4 inline-block text-center text-white bg-brand-chili hover:bg-brand-lime hover:text-brand-brown py-3.5 px-6 font-semibold uppercase tracking-wide text-xs shadow-md transition-all duration-200"
          >
            Donate
          </a>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-cream/60 text-xs">
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
