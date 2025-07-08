import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdOutlineHorizontalRule } from 'react-icons/md';

const Section = ({ title, children, className = '' }) => {
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
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#693e2d]">
          {title}
        </h2>
      )}
      <div className="space-y-4 text-[#6C6A6A] leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
};
const TimelineItem = ({ year, title, children }) => (
  <div className="relative pl-8 pb-8 border-l-2 border-[#985b3c] last:border-transparent">
    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#693e2d] border-4 border-white"></div>
    <div className="font-bold text-lg text-[#693e2d] mb-2">{year}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <div className="text-[#6C6A6A]">{children}</div>
  </div>
);

export default function HistoryAndBackground() {
  return (
    <div className="font-montserrat max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full my-[7rem]">
        <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p className='uppercase'>History & Background</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
          From a vision to a national movement, our story is one of resilience, leadership, and community impact.

        </p>
      </motion.div>



      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Section title="Our Foundation">
            <p className="mb-6 text-[15px] leading-[20px] mt-4 text-[#6C6A6A]">
              The Black Youth Empowerment Network (BYEN) was founded on January 2, 2024, by Jay'Shun Mathews, a high school senior in Warner Robins, Georgia, who envisioned a space where Black youth could lead, build power, and shape their own futures. Frustrated by the lack of intentional investment in young Black voices, Jay'Shun launched BYEN as a grassroots effort to bridge that gap.
            </p>
            <p className="mb-6 text-[15px] leading-[20px] text-[#6C6A6A]">
              In its earliest form, BYEN was a passion project—an informal group chat that connected a handful of young people eager to serve their communities and speak out on issues they cared about. There was no funding, no formal structure, and no guarantee of sustainability. But there was purpose. That spark led to community service projects, digital organizing, and the beginning of a nationwide vision.
            </p>
            <p className="mb-6 text-[15px] leading-[20px] text-[#6C6A6A]">
              By the summer of 2024, BYEN hit a critical point. The heart was there, but the infrastructure wasn't strong enough to match the ambition. Rather than continue at a pace that couldn't be sustained, Jay'Shun made a courageous decision to pause. The organization went quiet, but the vision never died.
            </p>
            <p className="mb-6 text-[15px] leading-[20px] text-[#6C6A6A]">
              Everything changed in the spring of 2025. After enrolling at Morehouse College, Jay'Shun met James Brazzell—another student leader whose clarity, operational mindset, and belief in Black youth leadership would become a defining force in BYEN's evolution. What began as a conversation between two young changemakers quickly became a powerful partnership. James brought structure to the passion, systems to the vision, and strategy to the movement. His role wasn't just supportive—it was catalytic.
            </p>
            <p className="mb-6 text-[15px] leading-[20px] text-[#6C6A6A]">
              With James's partnership and the backing of the Atlanta University Center (AUC) community, BYEN relaunched with renewed energy, clear leadership, and a blueprint for national scale. That moment marked the transformation of BYEN from a hopeful concept into a serious, youth-led organization built to last.
            </p>
            <p className="mb-6 text-[15px] leading-[20px] text-[#6C6A6A]">
              Since its relaunch in spring 2025, BYEN has grown to over 200 members across 25 states—and we're only getting started. Our dual model of national membership and local chapters allows us to reach youth where they are, while building a unified platform for impact, advocacy, and opportunity. From leadership development and youth fellowships to social innovation campaigns and community service, BYEN is building the next generation of Black changemakers.
            </p>
            <p className="text-[15px] leading-[20px] text-[#6C6A6A]">
              As we move into fall 2025, our growth is accelerating. New members. New partners. New cities. New impact.
            </p>
          </Section>

          <Section title="Timeline of Growth">
            <div className="mt-8 space-y-8">
              <TimelineItem
                year="Early 2024"
                title="The Beginning"
              >
                <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A]">BYEN starts as an informal group chat, connecting passionate young individuals across the nation.</p>              </TimelineItem>

              <TimelineItem
                year="Summer 2024"
                title="Strategic Pause"
              >
                <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A]">Recognizing the need for stronger infrastructure, BYEN takes a temporary pause to restructure and rebuild.</p>
              </TimelineItem>

              <TimelineItem
                year="Spring 2025"
                title="The Relaunch"
              >
                <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A]">Partnering with James Brazzell and supported by the AUC community, BYEN relaunches with a clear vision and structure.</p>
              </TimelineItem>

              <TimelineItem
                year="Present"
                title="National Impact"
              >
                <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A]">With over 200 members across 25 states, BYEN continues to grow and empower Black youth nationwide.</p>
              </TimelineItem>
            </div>
          </Section>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-[#f9f5f3] to-white p-6 rounded-xl shadow-lg sticky top-28">
            <h3 className="text-2xl font-bold text-[#693e2d] mb-4">Key Milestones</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#693e2d] text-white text-sm font-bold mr-3 flex-shrink-0">1</span>
                <span className="text-[15px] leading-[20px] text-[#6C6A6A]">200+ members nationwide</span>
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#693e2d] text-white text-sm font-bold mr-3 flex-shrink-0">2</span>
                <span className="text-[15px] leading-[20px] text-[#6C6A6A]">25 states reached</span>
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#693e2d] text-white text-sm font-bold mr-3 flex-shrink-0">3</span>
                <span className="text-[15px] leading-[20px] text-[#6C6A6A]">2,500+ community service hours</span>
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#693e2d] text-white text-sm font-bold mr-3 flex-shrink-0">4</span>
                <span className="text-[15px] leading-[20px] text-[#6C6A6A]">10+ community initiatives launched</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Section title="Boots on the Ground">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-1 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-[#693e2d] mb-4">Our National Civic Engagement Campaign</h3>
              <p className="mb-4 text-[15px] leading-[20px] text-[#6C6A6A]">
              Boots on the Ground is BYEN's national civic engagement campaign that mobilizes Black youth to take action in their communities through direct service, grassroots organizing, and voter education. This initiative empowers our members to be visible, vocal, and grounded in the issues that impact their everyday lives.
              </p>
              <p className="mb-6 text-[15px] leading-[20px] text-[#6C6A6A]">
              Led by Theron White and Tobias Brown, Boots on the Ground is about showing up with purpose and building real change from the ground up. Whether it’s canvassing, facilitating town halls, leading mutual aid efforts, or supporting advocacy work, our members are the frontline of youth-led transformation.
Stay tuned for more information and upcoming opportunities to get involved.
              </p>
              <div className="flex items-center justify-center p-4 bg-[#f9f5f3] rounded-xl shadow-lg text-[#693D2E]">
             
                <p className="text-[15px] leading-[20px]">Stay tuned for more information and upcoming opportunities to get involved.</p>
              </div>
            </div>
            <div className="md:flex-1 bg-gray-100 min-h-[300px] flex items-center justify-center">
              <span className="text-gray-400">[Campaign Image]</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}