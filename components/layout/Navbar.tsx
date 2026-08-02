"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

type NavLinkItem = {
  id: string;
  label: string;
  type: "link";
  href: string;
};

type NavDropdownItem = {
  id: string;
  label: string;
  type: "dropdown";
  items: { label: string; href: string }[];
};

type NavItem = NavLinkItem | NavDropdownItem;

const navigationItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    type: "link",
  },
  {
    id: "aboutus",
    label: "About Us",
    type: "dropdown",
    items: [
      { label: "History & Background", href: "/history-and-background" },
      { label: "Leadership Team", href: "/leadership" },
      { label: "Partners", href: "/partners" },
      { label: "Board of Advisors", href: "#" },
    ],
  },
  {
    id: "resources",
    label: "Programs & Initiatives",
    type: "dropdown",
    items: [{ label: "Young, Black, and Safe", href: "/young-black-and-safe" }],
  },
  {
    id: "events",
    label: "Events",
    type: "link",
    href: "/events",
  },
  {
    id: "getinvolved",
    label: "Get Involved",
    type: "dropdown",
    items: [
      { label: "Membership", href: "/membership" },
      { label: "Start a Chapter", href: "/start-chapter" },
      { label: "Become a Donor or Sponsor", href: "/donors-and-sponsors" },
      { label: "Become a Partner", href: "/become-partner" },
    ],
  },
  {
    id: "newsandblog",
    label: "News & Blog",
    type: "dropdown",
    items: [
      { label: "BYEN Voices", href: "/news-and-blog" },
      { label: "In the press", href: "/in-the-press" },
    ],
  },
];

const contactDetails = [
  { icon: MdOutlineMail, label: "info@wearebyen.org", href: "mailto:info@wearebyen.org" },
  { icon: LuPhoneCall, label: "+1 (478) 283-3665", href: "tel:+14782833665" },
  { icon: IoLocationOutline, label: "USA", href: undefined },
];

const socialLinks = [
  { icon: RiInstagramFill, href: "https://www.instagram.com/wearebyen/", label: "Instagram" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/black-youth-empowerment-network/", label: "LinkedIn" },
  { icon: BsFacebook, href: "https://www.facebook.com/profile.php?id=61554206687351", label: "Facebook" },
];

const donateHref = "https://givebutter.com/4zAepQ";
const ACCENTS: Record<string, CSSProperties> = {
  home: { "--accent-bg": "#EF5018", "--accent-text": "#FFFFFF" } as CSSProperties,
  aboutus: { "--accent-bg": "#158BFF", "--accent-text": "#FFFFFF" } as CSSProperties,
  resources: { "--accent-bg": "#ABFF1E", "--accent-text": "#2D1807" } as CSSProperties,
  events: { "--accent-bg": "#E8D631", "--accent-text": "#2D1807" } as CSSProperties,
  getinvolved: { "--accent-bg": "#F27585", "--accent-text": "#FFFFFF" } as CSSProperties,
  newsandblog: { "--accent-bg": "#34C63B", "--accent-text": "#FFFFFF" } as CSSProperties,
};

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleDropdown = (id: string) =>
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));

  const DesktopNavLink = ({ item }: { item: NavItem }) => {
    const accentStyle = ACCENTS[item.id];

    if (item.type === "link") {
      return (
        <Link
          href={item.href}
          style={accentStyle}
          className="nav-accent relative flex items-center h-full px-4 xl:px-5 text-xs font-medium uppercase tracking-wide text-brand-brown"
        >
          <span className="relative z-10">{item.label}</span>
          <span className="nav-accent-underline absolute bottom-0 left-0 h-[5px] w-full" />
        </Link>
      );
    }

    return (
      <div className="relative group h-full" style={accentStyle}>
        <button className="nav-accent flex items-center gap-1.5 h-full px-4 xl:px-5 text-xs font-medium uppercase tracking-wide text-brand-brown">
          <span className="relative z-10">{item.label}</span>
          <FiChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
          <span className="nav-accent-underline absolute bottom-0 left-0 h-[5px] w-full" />
        </button>
        <div className="absolute left-0 top-full w-64 bg-brand-brown notch-md opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50">
          <div className="py-2">
            {item.items.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.href}
                style={accentStyle}
                className="nav-accent block px-5 py-3 text-xs font-medium uppercase tracking-wide text-brand-cream"
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const MobileNavLink = ({ item }: { item: NavItem }) => {
    const accentStyle = ACCENTS[item.id];

    if (item.type === "link") {
      return (
        <Link
          href={item.href}
          onClick={closeMobileMenu}
          style={accentStyle}
          className="nav-accent block py-4 px-4 mb-2 notch-sm text-xs font-medium uppercase tracking-wide text-brand-cream bg-brand-brown/40"
        >
          {item.label}
        </Link>
      );
    }

    return (
      <div className="mb-2">
        <button
          onClick={() => toggleDropdown(item.id)}
          data-open={openDropdowns[item.id] || undefined}
          style={accentStyle}
          className="nav-accent flex justify-between items-center w-full py-4 px-4 notch-sm text-xs font-medium uppercase tracking-wide text-brand-cream bg-brand-brown/40"
        >
          <span>{item.label}</span>
          <FiChevronDown
            className={`transform transition-transform duration-300 w-5 h-5 ${
              openDropdowns[item.id] ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openDropdowns[item.id] ? "max-h-[500px] mt-1" : "max-h-0"
          }`}
        >
          <div className="bg-brand-brown/20 notch-sm p-1 space-y-1">
            {item.items.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.href}
                onClick={closeMobileMenu}
                className="block py-3 pl-5 text-xs font-medium uppercase tracking-wide text-brand-cream hover:text-white transition-colors duration-150"
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="font-nunito w-full">
        {/* Utility bar */}
        <div
          className="relative bg-brand-brown text-brand-cream text-xs overflow-hidden"
          style={{
            backgroundImage: 'url("/branding/SVG/Pattern_Cream.svg")',
            backgroundRepeat: "repeat-x",
            backgroundSize: "260px auto",
            backgroundPosition: "left center",
          }}
        >
          <div className="absolute inset-0 bg-brand-brown/90" />
          <div className="relative container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 flex items-center h-10">
            <div className="hidden md:flex items-center gap-5 tracking-wide font-medium">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <span className="flex items-center gap-1.5">
                    <Icon className="text-brand-lime text-sm" />
                    {detail.label}
                  </span>
                );
                return detail.href ? (
                  <a key={detail.label} href={detail.href} className="hover:text-brand-lime transition-colors duration-150">
                    {content}
                  </a>
                ) : (
                  <span key={detail.label}>{content}</span>
                );
              })}
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="text-brand-cream/80 hover:text-brand-lime transition-colors duration-150 text-lg" />
                  </a>
                ))}
              </div>

              <a
                href={donateHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-chili hover:bg-brand-lime text-white hover:text-brand-brown notch-sm uppercase tracking-widest font-semibold px-4 py-1 transition-colors duration-150"
              >
                Donate
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="bg-brand-cream">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 flex items-stretch justify-between w-full h-[76px] sm:h-[88px]">
            <Link href="/" className="flex items-center my-auto">
              <img
                src="/branding/02_ Logos/Stacked Logo/PNG/Logo_Stacked_DarkBrown.png"
                alt="Black Youth Empowerment Network"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            <div className="hidden lg:flex items-stretch">
              {navigationItems.map((item) => (
                <DesktopNavLink key={item.id} item={item} />
              ))}
            </div>

            <button
              className="lg:hidden my-auto bg-brand-brown text-brand-cream notch-sm p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-[9998] lg:hidden" onClick={closeMobileMenu} />
      )}

      <div
        className={`font-nunito lg:hidden fixed top-0 right-0 w-[88%] sm:w-[75%] md:w-[65%] max-w-[420px] h-full bg-brand-brown z-[9999] transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
        } overflow-y-auto`}
        style={{
          backgroundImage: 'url("/branding/SVG/Fist_Pattern.svg")',
          backgroundRepeat: "repeat",
          backgroundSize: "180px auto",
          backgroundColor: "#2D1807",
        }}
      >
        <div className="relative py-16 sm:py-20 px-4 sm:px-5">
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 bg-brand-cream text-brand-brown notch-sm p-2"
          >
            <HiX className="w-5 h-5" />
          </button>

          {navigationItems.map((item) => (
            <MobileNavLink key={item.id} item={item} />
          ))}

          <div className="mt-6">
            <a
              href={donateHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="block text-center bg-brand-chili hover:bg-brand-lime text-white hover:text-brand-brown notch-md w-full py-4 px-6 transition-colors duration-150 font-semibold uppercase tracking-widest text-xs"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
