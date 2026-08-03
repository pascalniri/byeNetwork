"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";
import PageHero from "@/components/layout/PageHero";

const Section = ({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${className}`}
    >
      {title && <h2 className="text-xl sm:text-2xl font-bold uppercase mb-6 text-brand-brown">{title}</h2>}
      <div className="space-y-4 text-brand-brown/70 leading-relaxed text-sm">{children}</div>
    </motion.section>
  );
};

const TimelineItem = ({
  year,
  title,
  children,
}: {
  year: string;
  title: string;
  children: ReactNode;
}) => (
  <div className="relative pl-8 pb-8 border-l-2 border-brand-chili/30 last:border-transparent">
    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-brand-chili border-4 border-white"></div>
    <div className="font-bold text-brand-chili mb-2">{year}</div>
    <h3 className="text-base font-bold uppercase mb-2 text-brand-brown">{title}</h3>
    <div className="text-brand-brown/70 text-sm">{children}</div>
  </div>
);

export default function HistoryAndBackground() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="History & Background"
        description="From a vision to a national movement, our story is one of resilience, leadership, and community impact."
        accent="ocean"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div>
            <Section title="Our Foundation">
              <p>
                The Black Youth Empowerment Network (BYEN) was founded on January 2, 2024, by Jay&apos;Shun
                Mathews, a high school senior in Warner Robins, Georgia, who envisioned a space where Black youth
                could lead, build power, and shape their own futures. Frustrated by the lack of intentional
                investment in young Black voices, Jay&apos;Shun launched BYEN as a grassroots effort to bridge
                that gap.
              </p>
              <p>
                In its earliest form, BYEN was a passion project—an informal group chat that connected a handful
                of young people eager to serve their communities and speak out on issues they cared about. There
                was no funding, no formal structure, and no guarantee of sustainability. But there was purpose.
                That spark led to community service projects, digital organizing, and the beginning of a
                nationwide vision.
              </p>
              <p>
                By the summer of 2024, BYEN hit a critical point. The heart was there, but the infrastructure
                wasn&apos;t strong enough to match the ambition. Rather than continue at a pace that couldn&apos;t
                be sustained, Jay&apos;Shun made a courageous decision to pause. The organization went quiet, but
                the vision never died.
              </p>
              <p>
                Everything changed in the spring of 2025. After enrolling at Morehouse College, Jay&apos;Shun met
                James Brazzell—another student leader whose clarity, operational mindset, and belief in Black
                youth leadership would become a defining force in BYEN&apos;s evolution. What began as a
                conversation between two young changemakers quickly became a powerful partnership. James brought
                structure to the passion, systems to the vision, and strategy to the movement. His role
                wasn&apos;t just supportive—it was catalytic.
              </p>
              <p>
                With James&apos;s partnership and the backing of the Atlanta University Center (AUC) community,
                BYEN relaunched with renewed energy, clear leadership, and a blueprint for national scale. That
                moment marked the transformation of BYEN from a hopeful concept into a serious, youth-led
                organization built to last.
              </p>
              <p>
                Since its relaunch in spring 2025, BYEN has grown to over 200 members across 25 states—and
                we&apos;re only getting started. Our dual model of national membership and local chapters allows
                us to reach youth where they are, while building a unified platform for impact, advocacy, and
                opportunity. From leadership development and youth fellowships to social innovation campaigns and
                community service, BYEN is building the next generation of Black changemakers.
              </p>
              <p>As we move into fall 2025, our growth is accelerating. New members. New partners. New cities. New impact.</p>
            </Section>

            <Section title="Timeline of Growth">
              <div className="mt-8 space-y-8">
                <TimelineItem year="Early 2024" title="The Beginning">
                  <p>BYEN starts as an informal group chat, connecting passionate young individuals across the nation.</p>
                </TimelineItem>

                <TimelineItem year="Summer 2024" title="Strategic Pause">
                  <p>Recognizing the need for stronger infrastructure, BYEN takes a temporary pause to restructure and rebuild.</p>
                </TimelineItem>

                <TimelineItem year="Spring 2025" title="The Relaunch">
                  <p>Partnering with James Brazzell and supported by the AUC community, BYEN relaunches with a clear vision and structure.</p>
                </TimelineItem>

                <TimelineItem year="Present" title="National Impact">
                  <p>With over 200 members across 25 states, BYEN continues to grow and empower Black youth nationwide.</p>
                </TimelineItem>
              </div>
            </Section>
        </div>
      </div>
    </div>
  );
}
