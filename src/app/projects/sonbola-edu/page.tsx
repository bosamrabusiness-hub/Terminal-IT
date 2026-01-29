'use client';

import ProjectLayout from '@/app/projects/ProjectLayout';
import PreviewImageBox from '@/components/common/PreviewImageBox';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/common/AnimatedButton';
import sonbolaDash from '../../../../assets/Sonbola-dash-terminal.png';
import sonbolaLesson from '../../../../assets/sonbola-lesson-terminal.png';
import sonbolaAdmin from '../../../../assets/sonbola-admin-terminal.png';
import sonbolaDashboard from '../../../../assets/sonbola-dashboard.png';

export default function SonbolaEduPage() {
  const container = useRef<null>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: '-100px' });
  const descInView = useInView(descRef, { once: true, margin: '-100px' });
  const techInView = useInView(techRef, { once: true, margin: '-100px' });
  const [w, setW] = useState({ windowWidth: 0, width: 0 });
  const { scrollYProgress } = useScroll({ target: container, offset: ['start', 'end'] });
  const xRaw = useTransform(scrollYProgress, [0, 1], [0, w.windowWidth - w.width - 40]);
  const x = useSpring(xRaw, { stiffness: 100, damping: 30, mass: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

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
      {/* Overview Section */}
      <section ref={overviewRef} className="px-[1.88rem] md:px-[4.38rem] pt-[4rem] md:pt-[6rem] lg:pt-[8rem]">
        <motion.div
          initial="hidden"
          animate={overviewInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-[22rem_1fr] lg:grid-cols-[24rem_1fr] items-start gap-[1.5rem] md:gap-[3rem]"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
                // OVERVIEW
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[80px]" />
            </div>
            <h2 className="section-heading mb-0 scale-[0.86] md:scale-[0.92] origin-left">Overview</h2>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-4 text-left pt-[0.25rem]">
            <p className="text-[clamp(0.9rem,2vw+0.65rem,1.38rem)] leading-[clamp(1.1rem,2vw+0.9rem,1.72rem)]">
              <strong className="text-details-red">Gamified</strong>, <strong className="text-details-red">community‑driven</strong> learning platform for
              <strong> tracks</strong>, <strong> lessons</strong>, <strong> quizzes</strong> and
              <strong> analytics</strong>.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Description Section */}
      <section ref={descRef} className="relative px-[1.88rem] md:px-[4.38rem] py-[3rem] md:py-[4rem] lg:py-[6rem] bg-hero-dark text-mainbody-weg overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          initial="hidden"
          animate={descInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative z-10 grid grid-cols-1 md:grid-cols-[22rem_1fr] lg:grid-cols-[24rem_1fr] items-start gap-[1.5rem] md:gap-[3rem]"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
                // DESCRIPTION
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[80px]" />
            </div>
            <h2 className="section-heading mb-0 scale-[0.86] md:scale-[0.92] origin-left">Description</h2>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-4 text-left pt-[0.25rem]">
            {/* Terminal-style code block */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-jetbrains-mono text-[10px] text-white/30 uppercase tracking-wider ml-auto">
                  project_details.md
                </span>
              </div>
              <p className="text-[clamp(0.9rem,2vw+0.65rem,1.25rem)] leading-[clamp(1.3rem,2vw+1rem,1.8rem)] text-white/80">
                <strong className="text-details-red">Modern education app</strong> blending
                <strong className="text-white"> structured courses</strong> with <strong className="text-white">social features</strong>,
                <strong className="text-white"> streaks</strong> and <strong className="text-white">leaderboards</strong>. Frontend delivers
                marketing pages and an <strong className="text-white">authenticated dashboard</strong> for
                <strong className="text-white"> tracks</strong>, <strong className="text-white"> lessons</strong>, <strong className="text-white"> quizzes</strong>,
                <strong className="text-white"> community posts</strong> and <strong className="text-white">profiles</strong>.
              </p>
              <p className="text-[clamp(0.9rem,2vw+0.65rem,1.25rem)] leading-[clamp(1.3rem,2vw+1rem,1.8rem)] text-white/80 mt-4">
                <strong className="text-details-red">Admin suite</strong>{' '}
                provides <strong className="text-white">user</strong>, <strong className="text-white">content</strong>, <strong className="text-white">analytics</strong> and
                <strong className="text-white"> system settings</strong> management with <strong className="text-white">role‑based permissions</strong>.
                <strong className="text-details-red"> Backend</strong> exposes <strong className="text-white">REST APIs</strong> backed by a
                <strong className="text-white"> relational database</strong>. <strong className="text-details-red">Rich UI</strong> with
                <strong className="text-white"> animations</strong>, <strong className="text-white">guided tours</strong> and a
                <strong className="text-white"> global sticky‑note widget</strong>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Preview Section */}
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
              mt-[2rem] md:mt-[3rem] lg:mt-[3.5rem]
              ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem]
              mr-[0.63rem] md:mr-[1.25rem] lg:mr-[1.25rem]
              mb-[1.5rem] md:mb-[1.875rem] lg:mb-[2.5rem]
              flex items-center justify-between flex-wrap gap-4
            "
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
                  // PREVIEW
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[80px]" />
              </div>
              <h2 className="section-heading scale-[0.86] md:scale-[0.92] origin-left">Preview</h2>
            </div>
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
              className="flex w-auto min-w-max gap-6 overflow-hidden pr-[0.63rem]"
            >
              {images.map((img, i) => {
                const labels = ['Dashboard', 'Student View', 'Lesson Builder', 'Admin Panel'];
                return (
                  <div key={i} className="flex-shrink-0 flex-grow-0">
                    <div className="group rounded-xl overflow-hidden border border-white/[0.08] bg-hero-dark shadow-xl hover:shadow-2xl hover:border-white/[0.15] transition-all duration-500">
                      {/* Browser mockup header */}
                      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.02]">
                        <div className="flex items-center gap-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                        </div>
                        <div className="flex-1 flex justify-center">
                          <div className="rounded-md bg-white/[0.05] border border-white/[0.06] px-3 py-0.5 font-jetbrains-mono text-[9px] text-white/25 tracking-wider">
                            sonbola-edu.com/{labels[i]?.toLowerCase().replace(/\s+/g, '-')}
                          </div>
                        </div>
                      </div>
                      {/* Image content */}
                      <PreviewImageBox
                        src={img}
                        alt={labels[i] || `Preview ${i + 1}`}
                        sizes="(min-width:800px) 480px, (min-width:520px) 400px, 320px"
                        containerClassName="relative w-[20rem] h-[13rem] md:w-[26rem] md:h-[16rem] lg:w-[30rem] lg:h-[18.5rem]"
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-[0.64rem] right-[0.64rem] py-3 px-4 font-jetbrains-mono text-xs text-hero-dark/60 hover:text-details-red transition-colors duration-300"
          >
            (Keep going ↓)
          </motion.button>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={techRef} className="relative px-[1.88rem] md:px-[4.38rem] py-[3rem] md:py-[4rem] lg:py-[6rem] bg-hero-dark text-mainbody-weg overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          initial="hidden"
          animate={techInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
                // TECH STACK
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[80px]" />
            </div>
            <h2 className="section-heading scale-[0.86] md:scale-[0.92] origin-left">Technologies Used</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Frontend */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-lg bg-details-red/10 border border-details-red/20 flex items-center justify-center">
                  <span className="material-icons-outlined text-lg text-details-red">code</span>
                </div>
                <div>
                  <h3 className="font-jetbrains-mono text-sm font-medium text-white">Frontend</h3>
                  <p className="text-xs text-white/40">Client-side technologies</p>
                </div>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={techInView ? 'visible' : 'hidden'}
                className="flex flex-wrap gap-2"
              >
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
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    variants={techVariants}
                    custom={index}
                    className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-jetbrains-mono text-white/80 hover:border-details-red/30 hover:bg-details-red/10 hover:text-details-red transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-lg bg-details-red/10 border border-details-red/20 flex items-center justify-center">
                  <span className="material-icons-outlined text-lg text-details-red">dns</span>
                </div>
                <div>
                  <h3 className="font-jetbrains-mono text-sm font-medium text-white">Backend</h3>
                  <p className="text-xs text-white/40">Server-side technologies</p>
                </div>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={techInView ? 'visible' : 'hidden'}
                className="flex flex-wrap gap-2"
              >
                {['Node.js', 'Express', 'Prisma', 'PostgreSQL'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    variants={techVariants}
                    custom={index}
                    className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-jetbrains-mono text-white/80 hover:border-details-red/30 hover:bg-details-red/10 hover:text-details-red transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </ProjectLayout>
  );
}
