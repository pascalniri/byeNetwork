import { FiArrowRight } from "react-icons/fi";
import { FaShieldAlt, FaBrain, FaBalanceScale, FaChalkboardTeacher, FaBullhorn, FaFolderOpen, FaUsers } from "react-icons/fa";
import PhotoPageHero from "@/components/layout/PhotoPageHero";

export default function YoungBlackAndSafe() {
  return (
    <div>
      <PhotoPageHero
        image="/gun-violence-awareness.jpg"
        eyebrow="National Program & Initiatives"
        title="Young, Black, and Safe"
        description="A National Community Safety and Advocacy Initiative of the Black Youth Empowerment Network. Building safer conditions for Black youth through education, advocacy, community engagement, and strategic partnership."
        accent="lime"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#partner"
            className="notch-md text-white bg-brand-chili hover:bg-brand-brown text-xs font-semibold uppercase tracking-wide py-3 px-8 transition-colors duration-200 text-center"
          >
            Partner With Us
          </a>
          <a href="#join" className="notch-md group bg-brand-brown p-0.5 transition-colors duration-200">
            <span className="notch-md-inner flex items-center justify-center h-full bg-white group-hover:bg-brand-brown text-brand-brown group-hover:text-white text-xs font-semibold uppercase tracking-wide py-3 px-8 transition-colors duration-200 text-center">
              Join the Initiative
            </span>
          </a>
        </div>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6 border-b-2 border-brand-chili inline-block pb-2">
            Overview
          </h2>
          <div className="text-sm text-brand-brown/70 space-y-4 leading-relaxed">
            <p>Young, Black, and Safe is the Black Youth Empowerment Network's national community safety and advocacy initiative.</p>
            <p>
              The initiative unites Black youth, BYEN chapters, community organizations, public institutions, and advocates around a shared goal: expanding access to resources, strengthening awareness, and advancing solutions that protect the safety and well-being of Black young people.
            </p>
            <p>
              Through national campaigns, local programming, public advocacy, community conversations, and strategic partnerships, Young, Black, and Safe keeps the safety of Black youth visible, urgent, and central to the decisions that shape their communities.
            </p>
            <p>
              The initiative draws on BYEN's national network of more than 700 members and multiple collegiate chapters across the Southeast and East Coast.
            </p>
            <p className="font-semibold text-brand-brown text-base mt-6 italic leading-relaxed">
              &ldquo;How can young people fully learn, lead, and pursue opportunity if they are not safe?&rdquo;
            </p>
          </div>
        </section>

        <section className="mb-20 notch-lg bg-brand-cream p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6">Why This Work Matters</h2>
          <div className="text-sm text-brand-brown/70 space-y-6 leading-relaxed">
            <p>
              Gun violence remains one of the leading causes of death among Black youth. Its impact reaches far beyond the immediate loss of life, shaping how young people experience their schools, neighborhoods, relationships, and futures.
            </p>
            <p>
              Young, Black, and Safe responds to the urgent need for gun violence prevention while recognizing that safety extends well beyond protection from physical harm. For Black youth, safety also means access to mental health support, accurate legal information, trusted community resources, responsive institutions, and a genuine voice in the decisions that affect their lives.
            </p>

            <h3 className="text-lg font-bold text-brand-brown mt-8 mb-4">Our work is organized around three areas:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="notch-md bg-white p-6 shadow-md border-t-4 border-brand-chili">
                <div className="text-brand-chili text-2xl mb-3"><FaShieldAlt /></div>
                <h4 className="text-base font-bold text-brand-brown mb-3">Physical Safety</h4>
                <p className="text-sm text-brand-brown/70">
                  Advancing education, prevention strategies, partnerships, and youth-led action in response to gun violence and other threats to the physical safety of Black youth.
                </p>
              </div>
              <div className="notch-md bg-white p-6 shadow-md border-t-4 border-brand-chili">
                <div className="text-brand-chili text-2xl mb-3"><FaBrain /></div>
                <h4 className="text-base font-bold text-brand-brown mb-3">Mental Well-Being</h4>
                <p className="text-sm text-brand-brown/70">
                  Connecting young people with information, professionals, support systems, and community spaces that recognize the effects of violence, grief, discrimination, and trauma.
                </p>
              </div>
              <div className="notch-md bg-white p-6 shadow-md border-t-4 border-brand-chili">
                <div className="text-brand-chili text-2xl mb-3"><FaBalanceScale /></div>
                <h4 className="text-base font-bold text-brand-brown mb-3">Legal Awareness</h4>
                <p className="text-sm text-brand-brown/70">
                  Equipping Black youth with accessible information to understand their rights, navigate public systems, and advocate for fair treatment in their schools, campuses, and communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6 border-b-2 border-brand-chili inline-block pb-2">
            Our Track Record
          </h2>
          <p className="text-sm text-brand-brown/70 mb-8 font-medium">
            BYEN&apos;s commitment to community safety is established and ongoing.
          </p>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-lg font-bold text-brand-brown">200+ Black Youth Engaged</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-sm text-brand-brown/70">
                  BYEN has hosted two in-person gun violence convenings, bringing together more than 200 young people, community members, advocates, and organizational leaders. Both convenings received local news coverage and opened new pathways for education, dialogue, and collective action.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-brand-brown/10"></div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-lg font-bold text-brand-brown">Established Partnerships</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-sm text-brand-brown/70">
                  BYEN has built formal partnerships with government officials and national and local organizations, including the Everytown Community Safety Fund, Students Demand Action, and the Atlanta Mayor&apos;s Office of Violence Reduction.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-brand-brown/10"></div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-lg font-bold text-brand-brown">BYEN Community Safety Fellowship</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-sm text-brand-brown/70">
                  The BYEN Community Safety Fellowship is a four-week leadership development experience equipping
                  emerging leaders with the knowledge, skills, and relationships to advance community safety,
                  address gun violence, and explore community violence intervention strategies. The program
                  includes virtual learning and an in-person convening in Memphis, Tennessee, held in partnership
                  with the Everytown Community Safety Fund.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6 border-b-2 border-brand-chili inline-block pb-2">
            What We Do
          </h2>
          <p className="text-sm text-brand-brown/70 mb-8 font-medium">
            Young, Black, and Safe delivers programming that gives Black youth practical knowledge, trusted resources, and real opportunities to shape community safety efforts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="notch-md bg-brand-brown/10 p-0.5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="notch-md-inner bg-white p-6 h-full">
                <div className="text-brand-chili text-2xl mb-3"><FaChalkboardTeacher /></div>
                <h3 className="text-base font-bold text-brand-brown mb-3">Workshops and Trainings</h3>
                <p className="text-sm text-brand-brown/70">
                  Educational sessions on gun violence prevention, personal safety, mental health awareness, legal rights, and community advocacy, designed so participants leave with information they can understand, apply, and share within their own networks.
                </p>
              </div>
            </div>
            <div className="notch-md bg-brand-brown/10 p-0.5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="notch-md-inner bg-white p-6 h-full">
                <div className="text-brand-chili text-2xl mb-3"><FaBullhorn /></div>
                <h3 className="text-base font-bold text-brand-brown mb-3">Public Advocacy</h3>
                <p className="text-sm text-brand-brown/70">
                  We engage young people in policy conversations, public education campaigns, and community initiatives addressing gun violence prevention and the broader safety and well-being of Black youth, ensuring they are not only represented in these conversations but prepared to shape the solutions.
                </p>
              </div>
            </div>
            <div className="notch-md bg-brand-brown/10 p-0.5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="notch-md-inner bg-white p-6 h-full">
                <div className="text-brand-chili text-2xl mb-3"><FaFolderOpen /></div>
                <h3 className="text-base font-bold text-brand-brown mb-3">Resource Development and Distribution</h3>
                <p className="text-sm text-brand-brown/70">
                  We create and distribute accessible materials that connect young people and families with information on legal rights, mental health services, safety resources, and community-based support systems.
                </p>
              </div>
            </div>
            <div className="notch-md bg-brand-brown/10 p-0.5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="notch-md-inner bg-white p-6 h-full">
                <div className="text-brand-chili text-2xl mb-3"><FaUsers /></div>
                <h3 className="text-base font-bold text-brand-brown mb-3">Community Convenings</h3>
                <p className="text-sm text-brand-brown/70">
                  We host forums, workshops, listening sessions, and public events that bring together young people, community leaders, professionals, and institutions, strengthening relationships and creating pathways for coordinated action.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 notch-lg bg-brand-brown text-white p-8 md:p-12 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Our Approach</h2>
          <div className="text-sm leading-relaxed space-y-6">
            <p>
              Young, Black, and Safe is grounded in the belief that Black youth must be active participants in shaping the systems, policies, and programs meant to protect them.
            </p>
            <p>
              The initiative pairs national visibility with local engagement. BYEN provides the infrastructure, partnerships, and shared direction, while chapters and community partners adapt programming to the needs of the young people and communities they serve. This structure allows Young, Black, and Safe to stay nationally aligned while remaining responsive to local conditions.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Our work is designed to:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-brand-lime">•</span> Increase access to practical safety information and resources
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-brand-lime">•</span> Strengthen youth knowledge of legal rights and public systems
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-brand-lime">•</span> Expand youth participation in community safety and policy discussions
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-brand-lime">•</span> Support prevention, healing, and community-based intervention
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-brand-lime">•</span> Build stronger relationships between young people and trusted institutions
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-brand-lime">•</span> Position Black youth as informed contributors to long-term solutions
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="partner" className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6 border-b-2 border-brand-chili inline-block pb-2">
            Partnership Opportunities
          </h2>
          <p className="text-sm text-brand-brown/70 mb-8">
            Young, Black, and Safe invites nonprofit organizations, corporations, foundations, educational institutions, government agencies, healthcare providers, legal professionals, and community leaders to support the initiative. Organizations may participate as an Institutional Partner or an Endorsing Organization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="notch-md bg-brand-brown/10 p-0.5">
              <div className="notch-md-inner bg-brand-cream p-8 flex flex-col h-full">
                <h3 className="text-lg font-bold text-brand-brown mb-4">Institutional Partners</h3>
                <p className="text-sm text-brand-brown/70 mb-6 flex-grow">
                  Institutional Partners provide substantial, ongoing support to Young, Black, and Safe, which may include financial investment, in-kind services, subject-matter expertise, professional training, research or data support, and access to facilities, speakers, or community resources. Institutional Partners are formally recognized across initiative programming and materials as core contributors to the sustainability and growth of Young, Black, and Safe.
                </p>
                <a href="#" className="self-start text-brand-chili font-bold border-b-2 border-brand-chili pb-1 hover:text-brand-brown hover:border-brand-brown transition-colors flex items-center text-sm">
                  Become an Institutional Partner <FiArrowRight className="ml-2" />
                </a>
              </div>
            </div>

            <div className="notch-md bg-brand-brown/10 p-0.5">
              <div className="notch-md-inner bg-brand-cream p-8 flex flex-col h-full">
                <h3 className="text-lg font-bold text-brand-brown mb-4">Endorsing Organizations</h3>
                <p className="text-sm text-brand-brown/70 mb-6 flex-grow">
                  Endorsing Organizations provide public support for Young, Black, and Safe and help extend awareness of the initiative within their networks. Endorsement does not require a financial contribution; it reflects an organization&apos;s public commitment to the safety and well-being of Black youth.
                </p>
                <a href="#" className="self-start text-brand-chili font-bold border-b-2 border-brand-chili pb-1 hover:text-brand-brown hover:border-brand-brown transition-colors flex items-center text-sm">
                  Endorse the Initiative <FiArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6">Join the Initiative</h2>
          <p className="text-sm text-brand-brown/70 mb-4">
            Young, Black, and Safe is building a national network of young people, institutions, and community partners committed to improving the conditions in which Black youth live, learn, and lead.
          </p>
          <p className="text-sm text-brand-brown/70 mb-4">
            Young people can take part through educational programming, community conversations, advocacy campaigns, local activations, and leadership opportunities offered through BYEN and its partners. Organizations can contribute funding, expertise, platforms, resources, and institutional access.
          </p>
          <p className="text-sm font-bold text-brand-brown mb-8">
            Together, we can move beyond awareness and build the partnerships, programs, and systems required to advance safer futures for Black youth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <a href="#" className="flex items-center justify-center notch-sm text-xs font-semibold uppercase tracking-wide text-white bg-brand-chili hover:bg-brand-brown py-3 px-6 transition-colors duration-200">
              Join Young, Black, and Safe
            </a>
            <a href="#" className="notch-sm group bg-brand-brown p-0.5 transition-colors duration-200">
              <span className="notch-sm-inner flex items-center justify-center h-full bg-white group-hover:bg-brand-brown text-xs font-semibold uppercase tracking-wide text-brand-brown group-hover:text-white py-3 px-6 transition-colors duration-200">
                Partner With BYEN
              </span>
            </a>
            <a
              href="https://givebutter.com/4zAepQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center notch-sm text-xs font-semibold uppercase tracking-wide text-brand-brown bg-brand-cream hover:bg-brand-brown/10 py-3 px-6 transition-colors duration-200"
            >
              Support the Initiative
            </a>
          </div>

          <p className="text-sm text-brand-brown/70 mt-8">
            Questions about the initiative? Email us at{" "}
            <a href="mailto:ybs@wearebyen.org" className="font-bold text-brand-chili hover:underline">
              ybs@wearebyen.org
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
