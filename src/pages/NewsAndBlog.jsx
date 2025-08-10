import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiUser, FiTag, FiX } from "react-icons/fi";
import { MdOutlineHorizontalRule } from "react-icons/md";

const NewsAndBlog = () => {
  const [activeTab, setActiveTab] = useState('voices');
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const news = [
    {
      id: 1,
      image: "/atlanta-news.png",
      title: "Black Youth Empowerment Network Featured on Atlanta News First",
      description:
        "Founder Jay'Shun Mathews recently appeared on Atlanta News First to represent the Black Youth Empowerment Network, using his voice to shed light on the ongoing gun violence epidemic affecting communities across the country. During the segment, he spoke passionately about the importance of youth-led advocacy and raised awareness about a powerful event organized by the Network in partnership with Students Demand Action. The event served as both a call to action and a safe space for young people to unite, heal, and demand change. Jay'Shun's appearance underscores BYEN's unwavering commitment to empowering Black youth to lead movements that address urgent social issues and reimagine a safer, more just future.",
      link: "https://www.atlantanewsfirst.com/2025/03/29/local-leaders-address-gun-violence-awareness-morehouse-college-event/",
    },
    {
      id: 2,
      image: "/collegiate-chapters.jpg",
      title: "Black Youth Empowerment Network Launches Collegiate Chapters",
      description:
        "BYEN is proud to announce the official launch of chapters at Morehouse College and the University of Georgia. This expansion marks a powerful next step in our mission to equip Black youth with the tools, community, and platform to lead with purpose and create lasting change. Each chapter will serve as a hub for leadership development, advocacy, and innovation and rooted in our core values of empowerment, collaboration, impact, and intentional leadership.",
      link: "https://www.instagram.com/wearebyen/",
    },
  ];

  const byenVoicesSections = [
    {
      id: 'leadership-in-action',
      title: 'BYEN Leadership in Action',
      description: 'Highlights the work and initiatives led by BYEN\'s leadership team across various departments, providing insight into the behind-the-scenes efforts that drive the organization\'s impact.',
      icon: <FiCalendar className="w-6 h-6" />,
      color: 'from-[#693e2d] to-[#985b3c]',
      posts: [
        {
          title: "Behind the Vision: An Exclusive Interview with BYEN's Leadership",
          excerpt: "Maya Evans sits down with National Executive Director Jay'Shun Mathews to discuss the driving vision for BYEN's upcoming program year, leadership philosophy, and the exciting announcement of James Brazzell as Co-Founder...",
          date: "Featured Story",
          readTime: "12 min read",
          featured: true,
          fullStory: `Ever wonder what it takes to build a nationwide network of over 200 young Black leaders? Well, this is your chance to find out. We're pulling back the curtain to give you an exclusive look into the minds behind the Black Youth Empowerment Network (BYEN), a collective dedicated to empowering a community that's too often made to feel invisible.

This inaugural article from BYEN Voices features our one-and-only National Executive Director & Co-Founder of BYEN, Jay'Shun Mathews. Get ready for a deep dive into the vision for the upcoming 2025-2026 program year. With so much anticipation surrounding the work we're doing, we're all more than eager to hear what our founders have in store. 

On a personal note, what I'm most excited about is hearing Jay'Shun's thoughts on a recent and major development: our Deputy Executive Director, James Brazzell, is now also a Co-Founder. This change is an ode to how BYEN is ready to take our work to the next level. 

This interview is more than just a conversation; it's a journey through the leadership philosophies, the trials and tribulations, and the incredible aspirations of our network. Our hope is that you finish this article feeling excited and inspired for everything we have planned in the year to come.

**Maya Evans (ME):** Welcome everyone, my name is Maya Evans, the National Editor-In-Chief of the official blog of BYEN, BYEN Voices, and BYEN's Communications Manager. I am so excited to be in discussion with Jay'Shun Mathews today. He is the National Executive Director and Co-Founder of BYEN, and we are sitting down to investigate his vision for the next program year. 

**Jay'Shun Mathews (JM):** Thank you so much for having me, and as you said, I am the National Executive Director and Co-Founder of BYEN, and I'm really excited that we're launching BYEN Voices, and this BYEN Leadership-In-Action article is one of the first projects that we're gonna do under this initiative. 

**ME:** Of course, and the excitement is shared! To get straight to the burning question, what is the driving vision for BYEN's upcoming program year, and what led you to this specific direction?

**JM:** For this year, the Black Youth Empowerment Network's vision is all about access, opportunity, and community. It really goes back to when I was a senior in high school and did not have access to things like scholarships, jobs, or internships. So I made it a point to create an organization that provides those things for free, because a lot of other programs out there cost money, and that's a huge barrier for Black youth. We want BYEN to be a bridge, connecting our members with opportunities that might not be widely broadcasted anymore, especially due to our political climate. Community, it is so essential right now. Seeing our people come together gives me so much joy, and I want BYEN to be a place that reinforces that sense of belonging.

**ME:** I can see how intentional you are with your vision, especially with not requiring people to pay for anything the network offers. Given our current sociopolitical and economic climate, we need as much support as possible within the Black community. These collectives are meant to give us the access, opportunity, and resources to use our voices in this world. I'm also curious about that intentionality: how does your philosophy for building your team apply to how you choose leaders for the network?

**JM:** I started to build a formula around intentionality. I call it the Three I's: intentionality, impact, and intimacy. I always use this whenever I'm launching a project or bringing someone onto the team. Intentionality is the key because when you have a reason behind something, you're able to pour your all into it. Then there's impact, because that's always greater than recognition. Not everybody gets an award, but that doesn't determine your success or the impact you're making. And finally, intimacy. We want our team and our members to truly be connected because a collective can always do more together than alone. I had to learn this as a leader: you go further and upwards with others, not by yourself. 

**ME:** You're dropping gems. Your philosophy of the "Three I's" is brilliant, and I think it's something everyone could benefit from adopting. As a new member of the network, I've already experienced the impact of the collaborative culture of the collective – pushing me to lean on my peers to go forward together. With that in mind, how does the network plan to measure its impact this year?

**JM:** Previously, BYEN did not have a method to measure its success, but after relaunching in January 2025, we now track growth and engagement through our application process. Our goal is to grow from just over 200 members to more than 500 in the next cycle, with a target of at least 75% of those members being actively engaged. We also do so through personal stories and testimonies from our members. Hearing how the network has changed someone's life or perspective is the top priority. It is the driving force that keeps me going. Ultimately, the emotional impact and heartfelt connections are far more valuable than any numbers.

**ME:** Just knowing the story of how BYEN had to take a pause last year and everything that you've been through so far, the amount of perseverance that you have to carry yourself with must be immense. What does perseverance mean to you, and how do you instill it in the spirit of those you serve and work with? 

**JM:** I see perseverance from both an organizational and a personal perspective. From an organizational standpoint, our current society is a test for BYEN. I'm inspired by those who came before us who faced even greater pressure, and I believe that if we can persevere through this test, we'll prove the network is a powerful and necessary voice for Black youth. Personally, this is a nonprofit, and as a college student, it's a huge time investment with no financial return. I instill this perseverance in my team by our collective lived experiences that the network blesses us with. By bringing them to meetings and events so they can see the powerful, human impact of our work firsthand. It's those cherished moments and emotional connections that keep us going, proving that the reward is far greater than any money we could ever earn.  

**ME:** I can see how you're truly fulfilling your purpose. It's clear that you answered a calling that many people ignore, and you're using your gifts to help others. Your tunnel vision for giving back, regardless of the ups and downs, is incredibly inspiring. Another thing I had in mind was, how will you ensure that every program and initiative is intentionally designed to address the specific needs and challenges faced by Black youth today?

**JM:** BYEN ensures this by focusing on our four key initiatives. BYEN On the Ground: Civic Engagement Campaign is a program designed to get Black youth civically engaged for the upcoming midterms, following the example of our ancestors who used civic action to drive change. B.O.L.D. (Black Youth Onward In Leadership Development) Accelerator provides crucial leadership development and a small stipend for youth to create their own community initiatives, planting a seed for future social impact. The BYEN National Internship Program connects rural high school students with directors in the network, exposing them to the world of social entrepreneurship and providing mentorship and career readiness. Finally, BYEN Access provides resources, scholarship, and opportunities, directly addressing the original purpose of the network's creation by connecting members with the resources they need to succeed. 

**JM:** To be transparent with you and our audience, two main challenges we face are creating original programs and securing funding. With so many existing organizations, we make our programs unique by focusing on our youth-led, grassroots approach. However, due to the current political climate, funding is being cut for organizations like ours, forcing us to be more strategic and often run programs on a smaller scale. 

**ME:** Something that's very important to many people's leadership philosophies is being service-oriented. One can be a leader, but being a servant leader is a completely different ballpark, and it elevates one's integrity as a leader. So, how would you define servant-leadership in your own words? What does it look like within your vision for the year and how do you plan to carry yourself, with servant leadership in mind, throughout it? 

**JM:** For me, servant leadership is about quality over quantity. It means prioritizing the emotional well-being of others and always being ready to aid, rather than focusing on surface level forms of success like numbers or money. I feel a higher calling to serve others, and I see this work as my duty. I see BYEN as my baby, and it's growing and gaining attention, so I rely on my team and my own integrity to remind me of the emotional investment that comes with my baby, and the great memories the team and I have made. This helps me stay focused on my purpose and remain a servant leader above all else.

**ME:** To add onto your statement, a servant cares for their people and is willing to sacrifice, whereas a leader often gives instruction based on their own singular perspective. A servant leader, however, embodies a plural mentality that is essential for leading a collective like yours forward with a genuine focus on the mission. 

**ME:** Last but certainly not least, you'll be announcing that James Brazzell, the Deputy Executive Director, is being given the title of "Co-Founder". Can you speak to the significance of this moment and what James's contributions have meant to the rebuilding of the network?  

**JM:** Wow. I had to pray about recognizing him officially as Co-Founder. I consulted a bunch of my friends and colleagues on it too. And truly, I believe that there's nobody more deserving that I ever met involving BYEN for the Co-Founder role than him. I always say how I created BYEN in 2024, which is true I did originally found BYEN. However, I did take a pause. When I got to Morehouse, I relaunched when I met James. In January, James gave me this whole new idea and vision for BYEN. That would have never existed if it wasn't for James.

**JM:** We met in November 2024, and it was a strange beginning. I was in his room talking to a friend about getting K-Pot before we left for Thanksgiving break, and James, in his outspoken fashion, insisted on coming with us. We had a great time, and then that turned into him and I staying up until 3:00 AM talking about the vision for BYEN. He wanted to join the team so badly, and after I told him to sleep on it, he texted me first thing the next morning saying, "I'm ready". 

**JM:** From there, he joined as our Director of Partnerships and poured an immense amount of work into the relaunch. From reviewing applications to handling notifications, he helped me with everything. James Brazzell, he is a visionary. We've worked on the network for about ten months now, and he has treated it like it's his own baby. I witness his dedication since no matter where he goes he always inquires about improving the network and speaks greatly about the network too. When we went to a fellowship in New York, I'd always see him asking people how to make the network better. After he attends events from family reunions to parties, the BYEN instagram always gains a new follower. 

**JM:** We weren't friends before BYEN, but we became friends through it. Friends running something together tends to have its challenges and debates, but our honest conversations have only challenged each other to be better. James is a Co-Founder because he's truly a founder of this current version of BYEN. He's my brother, and he's always by my side. Recently, he was joking about being a Co-Founder, and I just could not tell him I was planning to announce it. I'm so excited for him to officially get the recognition he deserves.

*This interview was conducted and written by Maya Evans, National Communications Manager and Editor-In-Chief of BYEN Voices.*`
        }
      ]
    },
    {
      id: 'member-spotlights',
      title: 'Member Spotlights',
      description: 'Regular interview-style features highlighting BYEN members (outside of the leadership team). These stories explore their personal journeys, motivations, goals, and how BYEN supports their growth and leadership.',
      icon: <FiUser className="w-6 h-6" />,
      color: 'from-[#693e2d] to-[#985b3c]',
      posts: [
        {
          title: "Member Spotlights Coming Soon",
          excerpt: "Stay tuned for inspiring stories from our BYEN members...",
          date: "Coming Soon",
          readTime: "5 min read"
        }
      ]
    },
    {
      id: 'impact-stories',
      title: 'Impact Stories',
      description: 'Showcases BYEN\'s work in communities through the efforts of members addressing important issues and uplifting those who are often overlooked or underserved.',
      icon: <FiArrowRight className="w-6 h-6" />,
      color: 'from-[#693e2d] to-[#985b3c]',
      posts: [
        {
          title: "Impact Stories Coming Soon",
          excerpt: "Discover how BYEN members are making a difference...",
          date: "Coming Soon",
          readTime: "4 min read"
        }
      ]
    },
    {
      id: 'perspectives-deep-dives',
      title: 'Perspectives x Deep Dives',
      description: 'Opinion pieces, essays, and in-depth articles that examine challenges and opportunities facing Black youth. These writings emphasize the importance of equal opportunity, social justice, and community engagement.',
      icon: <FiTag className="w-6 h-6" />,
      color: 'from-[#693e2d] to-[#985b3c]',
      posts: [
        {
          title: "Perspectives & Deep Dives Coming Soon",
          excerpt: "In-depth analysis and thought-provoking content...",
          date: "Coming Soon",
          readTime: "8 min read"
        }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
      <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p className='uppercase'>NEWS & BLOG</p>
          <MdOutlineHorizontalRule />
      </h1>
      <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
      Stay updated with the latest from BYEN and explore our youth-led storytelling platform
      </p>
  </div>
    <div className="font-montserrat bg-white mx-auto max-w-screen-2xl px-4 md:px-[5rem] lg:px-[6rem] py-[8rem]">
     
      {/* Navigation Tabs */}
      <div className="flex flex-col sm:flex-row justify-center mb-12 bg-gray-50 p-2 rounded-xl max-w-md mx-auto">
        <button
          onClick={() => setActiveTab('voices')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mb-2 sm:mb-0 sm:mr-2 ${
            activeTab === 'voices'
              ? 'bg-[#693e2d] text-white shadow-lg'
              : 'text-gray-600 hover:text-[#693e2d]'
          }`}
        >
          BYEN Voices
        </button>
        <button
          onClick={() => setActiveTab('media')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === 'media'
              ? 'bg-[#693e2d] text-white shadow-lg'
              : 'text-gray-600 hover:text-[#693e2d]'
          }`}
        >
          Media/Press
        </button>
      </div>

      {/* BYEN Voices Tab */}
      {activeTab === 'voices' && (
        <div>
          {/* BYEN Voices Introduction */}
          <Fade>
            <div className="bg-gradient-to-br from-[#693e2d]/5 to-[#985b3c]/5 rounded-2xl p-8 mb-16 border border-[#693e2d]/10">
              <h2 className="text-3xl font-bold text-[#693e2d] mb-6 text-center">
                BYEN Voices
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              BYEN Voices is a youth-led storytelling platform powered by the Black Youth Empowerment Network, created to celebrate changemakers, amplify lived experiences, and shed light on issues impacting Black youth. Rooted in BYEN’s mission of vision and impact, this blog is a space where service meets storytelling — where our writers use their voices to give back, build community, and drive meaningful conversations. Through features like Member Spotlights, Impact Stories, Deep Dives, and Leadership in Action, BYEN Voices is a living archive of our movement — for the youth, by the youth.              </p>
            </div>
          </Fade>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-[#693e2d] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {byenVoicesSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveCategory(section.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === section.id
                    ? 'bg-[#693e2d] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </div>

          {/* Blog Content Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {byenVoicesSections
              .filter(section => activeCategory === 'all' || activeCategory === section.id)
              .flatMap(section => 
                section.posts.map((post, postIndex) => (
                  <div
                    key={`${section.id}-${postIndex}`}
                    className={`${post.fullStory ? 'cursor-pointer hover:shadow-lg transition-all duration-300' : ''}`}
                    onClick={() => post.fullStory && setSelectedStory(post)}
                  >
                    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                      {/* Blog Image */}
                      <div className="h-48 bg-gradient-to-br from-[#693e2d]/10 to-[#985b3c]/10 flex items-center justify-center">
                        {post.featured ? (
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#693e2d] to-[#985b3c] rounded-full flex items-center justify-center mx-auto mb-3">
                              <FiCalendar className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-[#693e2d] font-semibold text-sm">Featured Story</span>
                          </div>
                        ) : (
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                              <FiUser className="w-8 h-8 text-gray-400" />
                            </div>
                            <span className="text-gray-500 font-medium text-sm">Coming Soon</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Blog Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                            {section.title}
                          </span>
                          {post.featured && (
                            <span className="bg-gradient-to-r from-[#693e2d] to-[#985b3c] text-white text-xs px-3 py-1 rounded-full font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h4 className={`font-bold text-xl text-gray-900 mb-3 leading-tight ${post.fullStory ? 'hover:text-[#693e2d] transition-colors duration-300' : ''}`}>
                          {post.title}
                        </h4>
                        
                        <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        {/* Blog Metadata */}
                        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <FiCalendar className="w-4 h-4 mr-2" />
                              {post.date}
                            </span>
                            <span className="flex items-center">
                              <FiUser className="w-4 h-4 mr-2" />
                              {post.featured ? 'Maya Evans' : 'BYEN Team'}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-400">{post.readTime}</span>
                            {post.fullStory && (
                              <span className="text-[#693e2d] font-semibold hover:underline flex items-center group">
                                Read Full Story
                                <FiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
          </motion.div>
        </div>
      )}

      {/* Media/Press Tab */}
      {activeTab === 'media' && (
        <div>
          <Fade>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#693e2d] mb-4">
                Media & Press
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Latest news coverage and press features highlighting BYEN's impact and initiatives
              </p>
            </div>
          </Fade>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {news.map((newsItem, index) => (
          <motion.div
            variants={item}
                key={newsItem.id}
                className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="h-[240px] overflow-hidden">
              <img 
                    src={newsItem.image} 
                    alt={newsItem.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="flex flex-col p-6">
                  <h2 className="text-[22px] font-semibold text-[#693e2d] mb-3 group-hover:text-[#985b3c] transition-colors duration-300">
                    {newsItem.title}
                  </h2>
                  <p className="text-[15px] leading-[22px] text-[#6C6A6A] line-clamp-4 mb-5">
                    {newsItem.description}
                  </p>
                  <a 
                    href={newsItem.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-auto self-start relative text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 xl:py-4 xl:px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group/button"
                  >
                    <span className="relative z-10 flex items-center">
                      READ MORE
                      <FiArrowRight className="ml-2 w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover/button:scale-100 transition-transform duration-300 ease-out"></div>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
          <div className="flex justify-center mt-12">
            <a 
              href="https://www.instagram.com/wearebyen/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative text-[#693e2d] bg-white border-2 border-[#693e2d] rounded-full py-4 px-8 hover:bg-gradient-to-r hover:from-[#693e2d] hover:to-[#985b3c] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center font-semibold">
                VIEW MORE PRESS
                <FiArrowRight className="ml-2 w-4 h-4" />
                            </span>
          <div className="absolute inset-0 bg-[#693e2d]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
        </a>
      </div>
        </div>
      )}

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#693e2d] to-[#985b3c] text-white p-6 flex items-start justify-between sticky top-0 z-10">
              <div className="flex-1 pr-4">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 leading-tight">{selectedStory.title}</h2>
                <div className="flex items-center gap-4 text-white/90 text-sm">
                  <span className="flex items-center">
                    <FiCalendar className="w-4 h-4 mr-1" />
                    {selectedStory.date}
                  </span>
                  <span>{selectedStory.readTime}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedStory(null)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 flex-shrink-0 ml-2"
                aria-label="Close modal"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-4 lg:p-8 overflow-y-auto" style={{maxHeight: 'calc(90vh - 200px)'}}>
              <div className="prose prose-lg max-w-none">
                {selectedStory.fullStory.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph.startsWith('**') && paragraph.endsWith('**') ? (
                      <strong className="text-[#693e2d]">{paragraph.slice(2, -2)}</strong>
                    ) : paragraph.startsWith('*') && paragraph.endsWith('*') ? (
                      <em className="text-gray-600">{paragraph.slice(1, -1)}</em>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="bg-gray-50 px-4 lg:px-8 py-4 border-t border-gray-200 sticky bottom-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-sm text-gray-600 text-center sm:text-left">
                  Written by Maya Evans, National Communications Manager
                </div>
                <button 
                  onClick={() => setSelectedStory(null)}
                  className="bg-[#693e2d] text-white px-6 py-2 rounded-lg hover:bg-[#985b3c] transition-colors duration-200 w-full sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default NewsAndBlog;