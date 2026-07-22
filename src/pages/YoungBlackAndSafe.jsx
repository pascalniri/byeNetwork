import React from 'react';
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

const YoungBlackAndSafe = () => {
  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[4rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
        <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium leading-tight mb-4 text-center">
          <MdOutlineHorizontalRule className="hidden md:block" />
          <p className="uppercase">Young, Black, and Safe</p>
          <MdOutlineHorizontalRule className="hidden md:block" />
        </h1>
        <p className="text-[15px] md:text-[18px] font-semibold text-[#333] mb-3 max-w-4xl mx-auto">
          A National Community Safety and Advocacy Initiative of the Black Youth Empowerment Network
        </p>
        <p className="text-[15px] leading-[20px] mt-2 text-[#6C6A6A] md:w-[80%] mx-auto mb-8">
          Building safer conditions for Black youth through education, advocacy, community engagement, and strategic partnership.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#partner" className="relative text-[15px] text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-8 hover:from-[#985b3c] hover:to-[#693e2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group">
            <span className="relative z-10 flex items-center font-medium">
              Partner With Us
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
          </a>
          <a href="#join" className="relative text-[15px] text-[#693e2d] bg-white border-2 border-[#693e2d] rounded-full py-3 px-8 hover:bg-[#693e2d] hover:text-white transition-all duration-300 shadow-lg transform hover:scale-105 overflow-hidden group">
            <span className="relative z-10 flex items-center font-medium">
              Join the Initiative
            </span>
          </a>
        </div>
      </div>

      <div className="bg-white max-w-screen-xl mx-auto px-4 md:px-8 py-16">
        
        {/* Overview */}
        <section className="mb-20">
          <h2 className="text-[24px] md:text-3xl font-bold text-[#693e2d] mb-6 border-b-2 border-[#985b3c] inline-block pb-2">Overview</h2>
          <div className="text-[15px] leading-[20px] text-[#6C6A6A] space-y-4">
            <p>
              Young, Black, and Safe is the Black Youth Empowerment Network's national community safety and advocacy initiative.
            </p>
            <p>
              The initiative unites Black youth, BYEN chapters, community organizations, public institutions, and advocates around a shared goal: expanding access to resources, strengthening awareness, and advancing solutions that protect the safety and well-being of Black young people.
            </p>
            <p>
              Through national campaigns, local programming, public advocacy, community conversations, and strategic partnerships, Young, Black, and Safe keeps the safety of Black youth visible, urgent, and central to the decisions that shape their communities.
            </p>
            <p>
              The initiative draws on BYEN's national network of more than 700 members and multiple collegiate chapters across the Southeast and East Coast.
            </p>
            <p className="font-semibold text-[#693e2d] text-[18px] mt-6 italic leading-relaxed">
              "How can young people fully learn, lead, and pursue opportunity if they are not safe?"
            </p>
          </div>
        </section>

        {/* Why This Work Matters */}
        <section className="mb-20 bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-[24px] md:text-3xl font-bold text-[#693e2d] mb-6">Why This Work Matters</h2>
          <div className="text-[15px] leading-[20px] text-[#6C6A6A] space-y-6">
            <p>
              Gun violence remains one of the leading causes of death among Black youth. Its impact reaches far beyond the immediate loss of life, shaping how young people experience their schools, neighborhoods, relationships, and futures.
            </p>
            <p>
              Young, Black, and Safe responds to the urgent need for gun violence prevention while recognizing that safety extends well beyond protection from physical harm. For Black youth, safety also means access to mental health support, accurate legal information, trusted community resources, responsive institutions, and a genuine voice in the decisions that affect their lives.
            </p>
            
            <h3 className="text-[20px] md:text-2xl font-bold text-gray-900 mt-8 mb-4">Our work is organized around three areas:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#693e2d]">
                <h4 className="text-[18px] md:text-xl font-bold text-[#693e2d] mb-3">Physical Safety</h4>
                <p className="text-[15px] leading-[20px] text-[#6C6A6A]">
                  Advancing education, prevention strategies, partnerships, and youth-led action in response to gun violence and other threats to the physical safety of Black youth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#693e2d]">
                <h4 className="text-[18px] md:text-xl font-bold text-[#693e2d] mb-3">Mental Well-Being</h4>
                <p className="text-[15px] leading-[20px] text-[#6C6A6A]">
                  Connecting young people with information, professionals, support systems, and community spaces that recognize the effects of violence, grief, discrimination, and trauma.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#693e2d]">
                <h4 className="text-[18px] md:text-xl font-bold text-[#693e2d] mb-3">Legal Awareness</h4>
                <p className="text-[15px] leading-[20px] text-[#6C6A6A]">
                  Equipping Black youth with accessible information to understand their rights, navigate public systems, and advocate for fair treatment in their schools, campuses, and communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Track Record */}
        <section className="mb-20">
          <h2 className="text-[24px] md:text-3xl font-bold text-[#693e2d] mb-6 border-b-2 border-[#985b3c] inline-block pb-2">Our Track Record</h2>
          <p className="text-[15px] leading-[20px] text-[#6C6A6A] mb-8 font-medium">BYEN's commitment to community safety is established and ongoing.</p>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-[20px] md:text-2xl font-bold text-gray-900">200+ Black Youth Engaged</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-[15px] leading-[20px] text-[#6C6A6A]">BYEN has hosted two in-person gun violence convenings, bringing together more than 200 young people, community members, advocates, and organizational leaders. Both convenings received local news coverage and opened new pathways for education, dialogue, and collective action.</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-gray-200"></div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-[20px] md:text-2xl font-bold text-gray-900">Established Partnerships</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-[15px] leading-[20px] text-[#6C6A6A]">BYEN has built formal partnerships with government officials and national and local organizations, including the Everytown Community Safety Fund, Students Demand Action, and the Atlanta Mayor's Office of Violence Reduction.</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-gray-200"></div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-[20px] md:text-2xl font-bold text-gray-900">Community Violence Intervention Fellowship</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-[15px] leading-[20px] text-[#6C6A6A]">In Fall 2026, BYEN will launch a competitive Community Violence Intervention Fellowship in partnership with the Everytown Community Safety Fund. The fellowship will select 15 emerging leaders to deepen their knowledge of community violence intervention and prepare them to advance safety within their communities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-20">
          <h2 className="text-[24px] md:text-3xl font-bold text-[#693e2d] mb-6 border-b-2 border-[#985b3c] inline-block pb-2">What We Do</h2>
          <p className="text-[15px] leading-[20px] text-[#6C6A6A] mb-8 font-medium">Young, Black, and Safe delivers programming that gives Black youth practical knowledge, trusted resources, and real opportunities to shape community safety efforts.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[18px] md:text-xl font-bold text-[#693e2d] mb-3">Workshops and Trainings</h3>
              <p className="text-[15px] leading-[20px] text-[#6C6A6A]">Educational sessions on gun violence prevention, personal safety, mental health awareness, legal rights, and community advocacy, designed so participants leave with information they can understand, apply, and share within their own networks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[18px] md:text-xl font-bold text-[#693e2d] mb-3">Public Advocacy</h3>
              <p className="text-[15px] leading-[20px] text-[#6C6A6A]">We engage young people in policy conversations, public education campaigns, and community initiatives addressing gun violence prevention and the broader safety and well-being of Black youth, ensuring they are not only represented in these conversations but prepared to shape the solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[18px] md:text-xl font-bold text-[#693e2d] mb-3">Resource Development and Distribution</h3>
              <p className="text-[15px] leading-[20px] text-[#6C6A6A]">We create and distribute accessible materials that connect young people and families with information on legal rights, mental health services, safety resources, and community-based support systems.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[18px] md:text-xl font-bold text-[#693e2d] mb-3">Community Convenings</h3>
              <p className="text-[15px] leading-[20px] text-[#6C6A6A]">We host forums, workshops, listening sessions, and public events that bring together young people, community leaders, professionals, and institutions, strengthening relationships and creating pathways for coordinated action.</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-20 bg-gradient-to-br from-[#693e2d] to-[#985b3c] text-white p-8 md:p-12 rounded-2xl shadow-2xl">
          <h2 className="text-[24px] md:text-3xl font-bold mb-6">Our Approach</h2>
          <div className="text-[15px] leading-[22px] space-y-6">
            <p>
              Young, Black, and Safe is grounded in the belief that Black youth must be active participants in shaping the systems, policies, and programs meant to protect them.
            </p>
            <p>
              The initiative pairs national visibility with local engagement. BYEN provides the infrastructure, partnerships, and shared direction, while chapters and community partners adapt programming to the needs of the young people and communities they serve. This structure allows Young, Black, and Safe to stay nationally aligned while remaining responsive to local conditions.
            </p>
            <div className="mt-8">
              <h3 className="text-[20px] md:text-2xl font-bold mb-4">Our work is designed to:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start"><span className="mr-3 font-bold text-xl">•</span> Increase access to practical safety information and resources</li>
                <li className="flex items-start"><span className="mr-3 font-bold text-xl">•</span> Strengthen youth knowledge of legal rights and public systems</li>
                <li className="flex items-start"><span className="mr-3 font-bold text-xl">•</span> Expand youth participation in community safety and policy discussions</li>
                <li className="flex items-start"><span className="mr-3 font-bold text-xl">•</span> Support prevention, healing, and community-based intervention</li>
                <li className="flex items-start"><span className="mr-3 font-bold text-xl">•</span> Build stronger relationships between young people and trusted institutions</li>
                <li className="flex items-start"><span className="mr-3 font-bold text-xl">•</span> Position Black youth as informed contributors to long-term solutions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section id="partner" className="mb-20">
          <h2 className="text-[24px] md:text-3xl font-bold text-[#693e2d] mb-6 border-b-2 border-[#985b3c] inline-block pb-2">Partnership Opportunities</h2>
          <p className="text-[15px] leading-[20px] text-[#6C6A6A] mb-8">
            Young, Black, and Safe invites nonprofit organizations, corporations, foundations, educational institutions, government agencies, healthcare providers, legal professionals, and community leaders to support the initiative. Organizations may participate as an Institutional Partner or an Endorsing Organization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAFAFA] p-8 rounded-xl border border-gray-200 flex flex-col">
              <h3 className="text-[20px] md:text-2xl font-bold text-gray-900 mb-4">Institutional Partners</h3>
              <p className="text-[15px] leading-[20px] text-[#6C6A6A] mb-6 flex-grow">
                Institutional Partners provide substantial, ongoing support to Young, Black, and Safe, which may include financial investment, in-kind services, subject-matter expertise, professional training, research or data support, and access to facilities, speakers, or community resources. Institutional Partners are formally recognized across initiative programming and materials as core contributors to the sustainability and growth of Young, Black, and Safe.
              </p>
              <a href="#" className="self-start text-[#693e2d] font-bold border-b-2 border-[#693e2d] pb-1 hover:text-[#985b3c] hover:border-[#985b3c] transition-colors flex items-center text-[15px]">
                Become an Institutional Partner <FiArrowRight className="ml-2" />
              </a>
            </div>
            
            <div className="bg-[#FAFAFA] p-8 rounded-xl border border-gray-200 flex flex-col">
              <h3 className="text-[20px] md:text-2xl font-bold text-gray-900 mb-4">Endorsing Organizations</h3>
              <p className="text-[15px] leading-[20px] text-[#6C6A6A] mb-6 flex-grow">
                Endorsing Organizations provide public support for Young, Black, and Safe and help extend awareness of the initiative within their networks. Endorsement does not require a financial contribution; it reflects an organization's public commitment to the safety and well-being of Black youth.
              </p>
              <a href="#" className="self-start text-[#693e2d] font-bold border-b-2 border-[#693e2d] pb-1 hover:text-[#985b3c] hover:border-[#985b3c] transition-colors flex items-center text-[15px]">
                Endorse the Initiative <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Join the Initiative */}
        <section id="join" className="text-center max-w-4xl mx-auto">
          <h2 className="text-[24px] md:text-3xl font-bold text-[#693e2d] mb-6">Join the Initiative</h2>
          <p className="text-[15px] leading-[20px] text-[#6C6A6A] mb-4">
            Young, Black, and Safe is building a national network of young people, institutions, and community partners committed to improving the conditions in which Black youth live, learn, and lead.
          </p>
          <p className="text-[15px] leading-[20px] text-[#6C6A6A] mb-4">
            Young people can take part through educational programming, community conversations, advocacy campaigns, local activations, and leadership opportunities offered through BYEN and its partners. Organizations can contribute funding, expertise, platforms, resources, and institutional access.
          </p>
          <p className="text-[15px] font-bold text-gray-900 mb-8">
            Together, we can move beyond awareness and build the partnerships, programs, and systems required to advance safer futures for Black youth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <a href="#" className="text-[15px] text-white bg-gradient-to-r from-[#693e2d] to-[#985b3c] rounded-full py-3 px-6 hover:shadow-lg transition-shadow">Join Young, Black, and Safe</a>
            <a href="#" className="text-[15px] text-[#693e2d] bg-white border border-[#693e2d] rounded-full py-3 px-6 hover:bg-gray-50 transition-colors">Partner With BYEN</a>
            <a href="https://givebutter.com/4zAepQ" target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-700 bg-gray-100 rounded-full py-3 px-6 hover:bg-gray-200 transition-colors">Support the Initiative</a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default YoungBlackAndSafe;
