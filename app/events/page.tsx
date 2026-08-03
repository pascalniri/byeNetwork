"use client";

import { motion, type Variants } from "framer-motion";
import PageHero from "@/components/layout/PageHero";

type Event = {
  image: string;
  title: string;
  date: string;
  time: string;
  description: string;
};

const events2024: Event[] = [
  {
    image: "/event1.svg",
    title: "Empowering Black Youth Through Mindful Decision-Making",
    date: "2024-03-25",
    time: "7:00 pm - 8:00 pm (EDT)",
    description:
      "Hey everyone! We're excited to invite you to a special webinar hosted by the Black Youth Empowerment Network (BYEN). Next Monday, we'll be diving into important conversations about the mental health challenges facing black youth and how we can shape a brighter future together. This is a fantastic opportunity to hear from professionals and ask questions that matter to you. Let's come together as a community to support each other and empower our youth! Don't miss out—Register now and mark your calendars. See you there!",
  },
];

const eventsJanMay2025: Event[] = [
  {
    image: "/feed-homeless.jpg",
    title: "Feed The Homeless",
    date: "2025-04-27",
    time: "11:00 am - 2:00 pm (EDT)",
    description:
      "The Black Youth Empowerment Network partnered with Destined for Greatness to provide meals and support to individuals experiencing homelessness across Atlanta.",
  },
  {
    image: "/gun-violence-awareness.jpg",
    title: "Gun Violence Awareness Day",
    date: "2025-03-29",
    time: "2:00 pm - 5:00 pm (EDT)",
    description:
      "The Black Youth Empowerment Network hosted a powerful event at Morehouse College to raise awareness about gun violence and its impact on communities across Atlanta.",
  },
  {
    image: "/advocacy-day.gif",
    title: "Georgia Advocacy Day W/ Students Demand Action",
    date: "2025-02-18",
    time: "10:00 am - 3:00 pm (EDT)",
    description:
      "Through our partnership with Students Demand Action, members of the Black Youth Empowerment Network took bold steps to advocate for stronger gun safety laws, using their voices and stories to push for change in communities that are too often overlooked.",
  },
  {
    image: "/financial-literacy.png",
    title: "Financial Literacy 101 Ft. Luvswallet",
    date: "2025-02-06",
    time: "6:00 pm - 8:00 pm (EDT)",
    description:
      "Black Youth Empowerment Network is thrilled to present Financial Literacy 101, featuring insights and actionable advice from the expert LuvsWallet. Whether you're a budgeting beginner or looking to grow your wealth, this event is tailored to equip you with the tools and knowledge to make smart money moves.",
  },
  {
    image: "/hot-coco-run.png",
    title: "Hot Coco Run",
    date: "2025-01-31",
    time: "9:00 am - 12:00 pm (EDT)",
    description:
      "Miles Darby, BYEN Morehouse Chapter President, saw an opportunity to give back and took the lead in organizing a day of service for Hot Today's annual Hot Chocolate Run. Our members stepped up, preparing race packages, assisting with merchandise, and ensuring a welcoming experience for all.",
  },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const EventCard = ({ event }: { event: Event }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="flex flex-col notch-lg bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-[200px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="font-bold uppercase text-base text-brand-brown mb-2">{event.title}</h2>
        <div className="flex justify-between mb-4 text-xs font-semibold uppercase tracking-wide text-brand-brown/50">
          <p>{event.date}</p>
        </div>
        <div className="text-sm leading-relaxed text-brand-brown/70">{event.description}</div>
      </div>
    </motion.div>
  );
};

export default function Events() {
  return (
    <div>
      <PageHero
        eyebrow="Events"
        title="Events"
        description="Join us for unforgettable experiences! Explore our events designed to inspire, connect, and empower. Don't miss the chance to be part of something special—check out the details below and reserve your spot today!"
        accent="yellow"
      />

      <div className="max-w-screen-2xl mx-auto px-4 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="mb-20 notch-lg bg-brand-brown text-white p-10 sm:p-14 text-center">
          <h2 className="text-xl sm:text-2xl font-bold uppercase mb-3">Upcoming Events</h2>
          <p className="text-sm text-brand-cream/80 max-w-xl mx-auto">
            Stay tuned for Fall 2026 events — new programming, workshops, and gatherings are in the works.
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-12 text-center text-brand-brown">Past Events</h2>

        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold uppercase mb-8 text-center border-b-2 border-brand-chili pb-2 inline-block text-brand-brown">
            Jan-May 2025
          </h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {eventsJanMay2025.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </motion.div>
        </div>
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold uppercase mb-8 text-center border-b-2 border-brand-chili pb-2 inline-block text-brand-brown">
            2024
          </h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {events2024.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
