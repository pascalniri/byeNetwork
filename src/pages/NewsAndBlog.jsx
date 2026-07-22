import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiUser, FiTag, FiX } from "react-icons/fi";
import { MdOutlineHorizontalRule } from "react-icons/md";

const NewsAndBlog = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const byenVoicesSections = [
    {
      id: 'leadership-in-action',
      title: 'BYEN Leadership in Action',
      description: 'Highlights the work and initiatives led by BYEN\'s leadership team across various departments, providing insight into the behind-the-scenes efforts that drive the organization\'s impact.',
      icon: <FiCalendar className="w-5 h-5" />,
      color: 'from-[#693e2d] to-[#985b3c]',
      posts: [
        {
          title: "Behind the Vision: An Exclusive Interview with BYEN's Leadership",
          excerpt: "Maya Evans sits down with National Executive Director Jay'Shun Mathews to discuss the driving vision for BYEN's upcoming program year, leadership philosophy, and the exciting announcement of James Brazzell as Co-Founder...",
          date: "August 2025",
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
      icon: <FiUser className="w-5 h-5" />,
      color: 'from-[#693e2d] to-[#985b3c]',
      posts: [
        {
          title: "Member Spotlights Coming Soon",
          excerpt: "Stay tuned for inspiring stories from our BYEN members...",
          date: "Coming Soon",
          readTime: "5 min read",
          featured: false
        }
      ]
    },
    {
      id: 'impact-stories',
      title: 'Impact Stories',
      description: 'Showcases BYEN\'s work in communities through the efforts of members addressing important issues and uplifting those who are often overlooked or underserved.',
      icon: <FiArrowRight className="w-5 h-5" />,
      color: 'from-[#693e2d] to-[#985b3c]',
      posts: [
        {
          title: "Impact Stories Coming Soon",
          excerpt: "Discover how BYEN members are making a difference...",
          date: "Coming Soon",
          readTime: "4 min read",
          featured: false
        }
      ]
    },
    {
      id: 'perspectives-deep-dives',
      title: 'Perspectives x Deep Dives',
      description: 'Opinion pieces, essays, and in-depth articles that examine challenges and opportunities facing Black youth. These writings emphasize the importance of equal opportunity, social justice, and community engagement.',
      icon: <FiTag className="w-5 h-5" />,
      color: 'from-[#693e2d] to-[#985b3c]',
      posts: [
        {
          title: "Perspectives & Deep Dives Coming Soon",
          excerpt: "In-depth analysis and thought-provoking content...",
          date: "Coming Soon",
          readTime: "8 min read",
          featured: false
        }
      ]
    }
  ];

  const allPosts = byenVoicesSections.flatMap(section => 
    section.posts.map(post => ({...post, categoryId: section.id, categoryTitle: section.title}))
  );

  const featuredPost = allPosts.find(p => p.featured) || allPosts[0];
  const otherPosts = allPosts.filter(p => p !== featuredPost);
  const displayedPosts = activeCategory === 'all' 
    ? otherPosts 
    : otherPosts.filter(p => p.categoryId === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="font-montserrat bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <div className="bg-white flex flex-col justify-center items-center py-[4rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat w-full mt-[7rem] border-b border-gray-200">
        <h1 className="flex flex-row items-center gap-2 md:text-[60px] text-[#693e2d] text-[40px] font-bold tracking-tight">
          BYEN VOICES
        </h1>
        <p className="text-[15px] md:text-[18px] mt-4 text-[#333] md:w-[60%] mx-auto font-medium">
          A youth-led storytelling platform celebrating changemakers, amplifying lived experiences, and shedding light on issues impacting Black youth.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12">
        {/* Featured Story */}
        <Fade>
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#693e2d] uppercase mb-4 border-b-2 border-[#985b3c] inline-block pb-1">Featured Story</h2>
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col lg:flex-row hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => featuredPost.fullStory && setSelectedStory(featuredPost)}
            >
              <div className="lg:w-1/2 bg-gradient-to-br from-[#693e2d]/10 to-[#985b3c]/10 flex items-center justify-center p-12 lg:p-20 min-h-[300px]">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#693e2d] to-[#985b3c] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <FiCalendar className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#693e2d]/10 text-[#693e2d] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {featuredPost.categoryTitle}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <FiCalendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight hover:text-[#693e2d] transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-[#6C6A6A] text-[15px] leading-[20px] mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <FiUser className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Maya Evans</p>
                      <p className="text-xs text-gray-500">{featuredPost.readTime}</p>
                    </div>
                  </div>
                  <span className="text-[#693e2d] font-bold flex items-center group">
                    Read Story
                    <FiArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10 border-b border-gray-200 pb-6">
          <span className="text-gray-500 font-semibold mr-2 hidden md:block">Filter by:</span>
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-[#693e2d] text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-[#693e2d] hover:text-[#693e2d]'
            }`}
          >
            All News
          </button>
          {byenVoicesSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveCategory(section.id)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeCategory === section.id
                  ? 'bg-[#693e2d] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#693e2d] hover:text-[#693e2d]'
              }`}
            >
              {section.icon}
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Latest News Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          
          {displayedPosts.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayedPosts.map((post, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex flex-col ${post.fullStory ? 'hover:shadow-lg cursor-pointer transition-shadow' : ''}`}
                  onClick={() => post.fullStory && setSelectedStory(post)}
                >
                  <div className="h-48 bg-gray-100 flex items-center justify-center border-b border-gray-200">
                    <div className="text-center text-gray-400">
                      <FiUser className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <span className="text-sm font-medium">Coming Soon</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold text-[#693e2d] uppercase tracking-wider">
                        {post.categoryTitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-[#693e2d] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#6C6A6A] text-[15px] leading-[20px] mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-1.5" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
              <button 
                onClick={() => setActiveCategory('all')}
                className="mt-4 text-[#693e2d] font-semibold hover:underline"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Story Modal (Reading View) */}
      {selectedStory && (
        <div className="fixed inset-0 bg-white z-[9999] overflow-y-auto">
          <div className="max-w-screen-md mx-auto relative min-h-screen flex flex-col pb-20">
            
            {/* Modal Navigation */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 p-4 flex justify-between items-center z-50">
              <div className="text-[#693e2d] font-bold uppercase tracking-widest text-sm">
                BYEN Voices
              </div>
              <button 
                onClick={() => setSelectedStory(null)}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full font-medium transition-colors"
              >
                <FiX className="w-5 h-5" />
                Close Article
              </button>
            </div>
            
            {/* Modal Header */}
            <div className="px-6 md:px-12 pt-16 pb-8 text-center">
              <span className="text-[#693e2d] font-bold tracking-widest uppercase text-sm mb-4 inline-block">
                {selectedStory.categoryTitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                {selectedStory.title}
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-500">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <FiUser className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-sm">Written by {selectedStory.featured ? 'Maya Evans' : 'BYEN Team'}</p>
                    <p className="text-xs">National Communications Manager</p>
                  </div>
                </div>
                <div className="hidden md:block w-px h-8 bg-gray-300"></div>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="flex items-center"><FiCalendar className="mr-2" />{selectedStory.date}</span>
                  <span>{selectedStory.readTime}</span>
                </div>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="px-6 md:px-12 prose prose-lg md:prose-xl max-w-none text-gray-800 flex-grow text-[15px] leading-[22px]">
              {selectedStory.fullStory && selectedStory.fullStory.split('\\n\\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  const content = paragraph.slice(2, -2);
                  const isSpeaker = content.includes(':');
                  if (isSpeaker) {
                    const [speaker, ...rest] = content.split(':');
                    return (
                      <p key={index} className="mb-6 leading-relaxed">
                        <strong className="text-[#693e2d] font-bold">{speaker}:</strong> {rest.join(':')}
                      </p>
                    );
                  }
                  return <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{content}</h3>;
                }
                if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                  return <p key={index} className="italic text-gray-500 mb-6 text-center border-t border-gray-200 pt-8 mt-12">{paragraph.slice(1, -1)}</p>;
                }
                
                // Handle dialogue formatted with bold speaker names at the start of a paragraph
                if (paragraph.startsWith('**') && paragraph.includes('**')) {
                  const endBoldIndex = paragraph.indexOf('**', 2);
                  if (endBoldIndex !== -1) {
                    const speaker = paragraph.substring(2, endBoldIndex);
                    const rest = paragraph.substring(endBoldIndex + 2);
                    return (
                      <p key={index} className="mb-6 leading-relaxed">
                        <strong className="text-[#693e2d] font-bold">{speaker}</strong>{rest}
                      </p>
                    );
                  }
                }
                
                return <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsAndBlog;