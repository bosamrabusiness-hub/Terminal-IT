import ProjectLayout from '@/app/projects/ProjectLayout';
import ParallaxIntro from './ParallaxIntro';
import Image from 'next/image';
import AnimatedButton from '@/components/common/AnimatedButton';

export default function ElysiumPage() {
  // Key marketing & web‑development challenges tackled in the redesign
  const challenges = [
    {
      number: '01',
      title: 'Complex Service Communication',
      description:
        'Elysium offers over 15 business lines. The challenge was to condense fiscal and legal expertise into a concise, conversion‑oriented message.',
    },
    {
      number: '02',
      title: 'Performance & Scalability',
      description:
        'The legacy site was slow and hard to scale. We needed a modern stack (Next.js + Tailwind+Headless CMS) with excellent Core Web Vitals.',
    },
    {
      number: '03',
      title: 'Startup Challenges',
      description:
        'With a small team and limited specialized staff, tight resources, and constant multitasking under strict time constraints, the project demanded efficient solutions and smart prioritization at every step.',
    },
  ];

  return (
    <ProjectLayout slug="elysium">
      {/* Hero & Heading */}
      <div className="relative flex h-[--about-heading--height] flex-col justify-center pl-[2.29rem] md:pl-[4.38rem] pr-2.5 md:pr-5 lg:pr-5">
        <h2 className="section-heading">Case Study</h2>
        <div className="mt-[0.62rem] flex justify-between items-center pb-5">
          <p className="text-small invisible" />
        </div>
      </div>

      {/* Parallax hero section with brand message */}
      <ParallaxIntro />

      {/* Context & Vision */}
      <section className="px-[10px] md:px-[20px] lg:px-[70px] pt-[4rem] md:pt-[6rem] lg:pt-[8rem]">
        <div className="lg:flex lg:gap-[3rem]">
          <h2 className="section-heading mb-8 lg:mb-0">Context & Vision</h2>

          <div className="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-4 text-left">
            <p className="text-medium">
              <strong>Elysium</strong> is a strategic consulting firm
              headquartered in Andorra that turns fiscal and legal complexity
              into global growth opportunities.
            </p>

            <a
              href="https://elysiumconsultingfirm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-medium mb-4"
            >
              Vie old website
            </a>

            <p className="text-medium">
              The redesign needed to align <strong>marketing</strong> and{' '}
              <strong>development</strong>: brand storytelling, lead generation,
              and a tech core ready for multilingual growth. Key initiatives
              included:
            </p>
            <ul className="list-disc list-inside mt-2 text-medium">
              <li>Branding guide</li>
              <li>Complete website redesign</li>
              <li>Viability workshops and usability testing</li>
              <li>
                Creation of an app to schedule first appointments with clients
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-mainbody-weg px-[10px] md:px-[20px] lg:px-[70px] py-[3rem] md:py-[4rem] lg:py-[6rem]">
        <div className="flex flex-col lg:flex-row gap-[1.5rem] md:gap-[2rem] lg:gap-[3rem]">
          <div className="relative w-full max-w-[580px] aspect-video mx-auto">
            <Image
              src="/elysiumintro.png"
              alt="Elysium redesign preview"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex-1">
            <h2 className="section-heading mb-8">The Challenge</h2>

            <div className="flex flex-col gap-4">
              {challenges.map((item, index) => (
                <div key={index} className="flex gap-[0.625rem] max-w-[55rem]">
                  <div className="text-medium active-number md text-details-red">
                    <strong>{item.number}</strong>
                  </div>
                  <div className="flex flex-col gap-[0.625rem]">
                    <h3 className="text-medium">
                      <strong>{item.title}</strong>
                    </h3>
                    <p className="text-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Goals & Objectives */}
      <section className="px-[10px] md:px-[20px] lg:px-[70px] pt-[4rem] md:pt-[6rem] lg:pt-[8rem]">
        <h2 className="section-heading mb-8">Project Goals & Objectives</h2>
        <div className="flex flex-col gap-4">
          <p className="text-medium">
            <strong>Communicate the Value Proposition:</strong> Craft a
            compelling visual story around “Building Lasting Partnerships” to
            lift conversion rates.
          </p>
          <p className="text-medium">
            <strong>Boost Performance:</strong> Hit 90+ Lighthouse scores
            (desktop & mobile) via responsive images, code‑splitting, and lazy
            loading.
          </p>
          <p className="text-medium">
            <strong>Seamless i18n:</strong> Implement locale‑based routing
            without content duplication.
          </p>
          <p className="text-medium">
            <strong>Marketing‑Friendly Editing:</strong> Integrate a headless
            CMS so content teams can update and edit blog posts without touching
            code.
          </p>
        </div>

        {/* Asset Overview */}
        <div className="mt-16 mb-8">
          <p className="text-medium mb-8">
            Here is a showcase of the web pages and components we used to build
            the site. Our branding process established a cohesive visual
            identity—colors, typography, and imagery—that brings consistency and
            personality to every page.
          </p>
        </div>
        {/* Insert three animated buttons below */}
        <div className="mt-16 mb-24 flex flex-wrap gap-4">
          <AnimatedButton
            text="Mockups Web (Spanish)"
            href="https://www.figma.com/design/FplnyN6b6KO3TmN0hmcilJ/BEISPIEL-ELYSIUM?node-id=350-384&t=w8xjcYkbR5b720cx-1"
          />
          <AnimatedButton
            text="Repository GitHub"
            href="https://github.com/Kano85/elysium-febe-gh-210924"
          />
          <AnimatedButton
            text="Brand Design (Spanish)"
            href="https://www.figma.com/proto/EoFDjKc42XrGWjNNPvrNa7/Elysium-case?page-id=506%3A423&node-id=860-4683&viewport=2028%2C-375%2C0.13&t=pXhftSLFikO5o7hn-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=860%3A4683"
          />
        </div>
      </section>

      {/* My Role */}
      {/* <section className="bg-mainbody-weg px-[10px] md:px-[20px] lg:px-[70px] py-[4rem] md:py-[6rem] lg:py-[8rem]">
        <h2 className="section-heading mb-8">My Role & Responsibilities</h2>
        <p className="text-medium mb-6">
          I led the <strong>UX/UI ↔ Front‑End</strong> integration, aligning
          brand aesthetics with performance goals. Key tasks included:
        </p>
        <ul className="text-medium list-disc ml-4 space-y-3">
          <li>User‑journey mapping and information architecture.</li>
          <li>Building a design system in Tailwind + Storybook.</li>
          <li>Optimizing Core Web Vitals (images, fonts, code‑splitting).</li>
          <li>
            Setting up a headless CMS and content workflows for marketing.
          </li>
        </ul>
      </section> */}
    </ProjectLayout>
  );
}
