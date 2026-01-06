 'use client';
 
 import ProjectLayout from '@/app/projects/ProjectLayout';
 import PreviewImageBox from '@/components/common/PreviewImageBox';
 import CardWrapper from '@/components/sections/horizontalScroll/cardWrapper';
 import { useEffect, useRef, useState } from 'react';
 import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/common/AnimatedButton';
import sonbolaDash from '../../../../assets/Sonbola-dash-terminal.png';
import sonbolaLesson from '../../../../assets/sonbola-lesson-terminal.png';
import sonbolaAdmin from '../../../../assets/sonbola-admin-terminal.png';
import sonbolaDashboard from '../../../../assets/sonbola-dashboard.png';

export default function SonbolaEduPage() {
  const container = useRef<null>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [w, setW] = useState({ windowWidth: 0, width: 0 });
  const { scrollYProgress } = useScroll({ target: container, offset: ['start', 'end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, w.windowWidth - w.width - 40]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => {
      setW({
        width: stackRef.current?.getBoundingClientRect().width || 0,
        windowWidth: window.innerWidth,
      });
    };
    const raf = requestAnimationFrame(update);
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', update);
    };
  }, []);
  const images = [sonbolaDashboard, sonbolaDash, sonbolaLesson, sonbolaAdmin];
  return (
    <ProjectLayout slug="sonbola-edu">
      <section className="px-[10px] md:px-[20px] lg:px-[70px] pt-[4rem] md:pt-[6rem] lg:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-[22rem_1fr] lg:grid-cols-[24rem_1fr] items-start gap-[1.5rem] md:gap-[3rem]">
          <h2 className="section-heading mb-0 scale-[0.86] md:scale-[0.92] origin-left">Overview</h2>
          <div className="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-4 text-left pt-[0.25rem]">
            <p className="text-[clamp(0.9rem,2vw+0.65rem,1.38rem)] leading-[clamp(1.1rem,2vw+0.9rem,1.72rem)]">
              <strong>Gamified</strong>, <strong>community‑driven</strong> learning platform for
              <strong> tracks</strong>, <strong> lessons</strong>, <strong> quizzes</strong> and
              <strong> analytics</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[10px] md:px-[20px] lg:px-[70px] py-[3rem] md:py-[4rem] lg:py-[6rem] bg-mainbody-weg">
        <div className="grid grid-cols-1 md:grid-cols-[22rem_1fr] lg:grid-cols-[24rem_1fr] items-start gap-[1.5rem] md:gap-[3rem]">
          <h2 className="section-heading mb-0 scale-[0.86] md:scale-[0.92] origin-left">Description</h2>
          <div className="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-4 text-left pt-[0.25rem]">
            <p className="text-[clamp(0.9rem,2vw+0.65rem,1.38rem)] leading-[clamp(1.1rem,2vw+0.9rem,1.72rem)]">
              <strong>Modern education app</strong> blending
              <strong> structured courses</strong> with <strong>social features</strong>,
              <strong> streaks</strong> and <strong>leaderboards</strong>. Frontend delivers
              marketing pages and an <strong>authenticated dashboard</strong> for
              <strong> tracks</strong>, <strong> lessons</strong>, <strong> quizzes</strong>,
              <strong> community posts</strong> and <strong>profiles</strong>. <strong>Admin suite</strong>{' '}
              provides <strong>user</strong>, <strong>content</strong>, <strong>analytics</strong> and
              <strong> system settings</strong> management with <strong>role‑based permissions</strong>.
              <strong> Backend</strong> exposes <strong>REST APIs</strong> backed by a
              <strong> relational database</strong>. <strong>Rich UI</strong> with
              <strong> animations</strong>, <strong>guided tours</strong> and a
              <strong> global sticky‑note widget</strong>.
            </p>
          </div>
       </div>
      </section>

      <section className="relative h-[300svh] overflow-x-clip px-[0.62rem] md:h-[200svh]" ref={container}>
        <div
          className="sticky top-[var(--navbar-height)] h-svh pb-[1.88rem]"
          style={{
            paddingLeft: 'calc(env(safe-area-inset-left) + 0.63rem)',
            paddingRight: 'calc(env(safe-area-inset-right) + 0.63rem)',
          }}
        >
          <div
            className="
 section-heading
 mt-[2rem] md:mt-[3rem] lg:mt-[3.5rem]
 ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem]
 mr-[0.63rem] md:mr-[1.25rem] lg:mr-[1.25rem]
 mb-[1.5rem] md:mb-[1.875rem] lg:mb-[2.5rem] scale-[0.86] md:scale-[0.92] origin-left
 flex items-center justify-between
 "
          >
            <h2>Preview</h2>
            <AnimatedButton
              text="Live Preview: Sonbola-edu.com"
              href="https://sonbola-edu.com"
              className="ml-4"
            />
          </div>
          <div className="h-svh mt-[16px] md:mt-[30px] lg:mt-[40px]">
            <motion.div
              style={{ x, willChange: 'transform', transform: 'translateZ(0)' }}
              ref={stackRef}
              className="flex w-auto min-w-max gap-2 overflow-hidden pr-[0.63rem]"
            >
              {images.map((img, i) => (
                <CardWrapper key={i}>
                  <PreviewImageBox
                    src={img}
                    alt={`Preview ${i + 1}`}
                    sizes="(min-width:800px) 384px, (min-width:520px) 352px, 288px"
                    containerClassName="relative w-[18rem] h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[24rem] lg:h-[15rem]"
                  />
                </CardWrapper>
              ))}
            </motion.div>
          </div>
          <button className="xs absolute bottom-[0.64rem] right-[0.64rem] py-4 px-0">
            (Keep going ↓ )
          </button>
        </div>
      </section>

      <section className="px-[10px] md:px-[20px] lg:px-[70px] py-[3rem] md:py-[4rem] lg:py-[6rem]">
        <h2 className="section-heading mb-8 scale-[0.86] md:scale-[0.92] origin-left">Technologies Used</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="subheading mb-4 scale-[0.9] md:scale-[0.95] origin-left">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'React',
                'Vite',
                'TypeScript',
                'React Router',
                'Tailwind CSS',
                'shadcn/ui',
                'Radix UI',
                'Clerk',
                '@tanstack/react-query',
                'axios',
                'framer-motion',
                'lucide-react',
                'sonner',
                'react-quill',
                'driver.js',
                'recharts',
                '@react-three/fiber',
                '@react-three/drei',
                'gsap',
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-hero-dark/20 bg-details-white px-3 py-1 text-small text-hero-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="subheading mb-4 scale-[0.9] md:scale-[0.95] origin-left">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express', 'Prisma', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-hero-dark/20 bg-details-white px-3 py-1 text-small text-hero-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
