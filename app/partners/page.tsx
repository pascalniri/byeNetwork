import { IoArrowForwardOutline } from "react-icons/io5";
import PageHero from "@/components/layout/PageHero";

const partners = [
  {
    image: "/focusedminds.svg",
    title: "Focused Minds Education Group",
    description:
      "Focused Minds Education Group provides professional development to school districts and organizations globally. We also provide virtual learning support for educators and students.",
    link: "https://focusedmindsedugroup.com/",
  },
  {
    image: "/civicunplugged.svg",
    title: "Civics Unplugged",
    description:
      "Civics Unplugged(CU) is a 501(c)(3) non-profit that empowers high school leaders with the training, funding, and community they need to become civic innovators. We do this by running a world-class fellowship program for high schoolers seeking to become social entrepreneurs, supporting them as they enter their professional careers, and building new initiatives that push the boundaries of civic education for youth.",
    link: "https://www.civicsunplugged.org/",
  },
  {
    image: "/rileysway.svg",
    title: "Riley's Way Foundation",
    description:
      "Riley's Way invests in and supports the next generation of kind leaders. We provide young people with the programs, support and inclusive community they need to thrive as changemakers. Riley's Way is committed to supporting these young leaders to build a better world that values kindness, empathy, connection and the voices of all youth.",
    link: "https://www.rileysway.org/",
  },
];

export default function Partners() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Our Partners"
        description="Our success is built on strong collaborations with our trusted partners. Together, we work towards shared goals, driving impact and innovation. These partnerships empower us to expand our reach, create meaningful change, and deliver exceptional value to the communities we serve."
        accent="ocean"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-2xl mx-auto px-4 md:px-16 lg:px-24 py-16 sm:py-20">
        {partners.map((partner, index) => (
          <div key={index} className="notch-lg bg-brand-cream shadow-lg p-3">
            <div className="notch-md overflow-hidden bg-white">
              <img src={partner.image} alt="" className="w-full" />
            </div>
            <div className="flex flex-col items-start px-3 py-4">
              <h2 className="text-lg font-bold uppercase text-brand-brown">{partner.title}</h2>
              <p className="text-sm leading-relaxed mt-2 text-brand-brown/70">{partner.description}</p>
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="notch-sm inline-flex items-center gap-2 bg-brand-chili hover:bg-brand-brown text-white text-xs font-semibold uppercase tracking-wide py-3 px-6 mt-6 transition-colors duration-200"
              >
                Visit Them
                <IoArrowForwardOutline />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
