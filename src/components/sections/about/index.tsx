//src/components/sections/about/index.tsx

'use client';

import { motion } from 'framer-motion';
import { useAppContext } from '@/components/context/AppContext';
import { useEffect, useState, useRef } from 'react';
import { useScramble } from 'use-scramble';
import ScrollLines from './ScrollLines';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const { label, scrollButton } = useAppContext();
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavHidden(document.body.classList.contains('navbar-hidden'));
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section className="mt-12 md:mt-12 lg:mt-[3.38rem]">
      <div className="pt-[3.12rem] mb-[200px] md:mb-[280px] lg:mb-[340px]">
        <ScrollLines
          header={
            <div className="relative flex min-h-0 overflow-visible flex-col justify-start items-center text-center pl-[2.29rem] md:pl-[4.38rem] pr-2.5 md:pr-5 lg:pr-5">
              <Heading />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.4, once: true }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="flex flex-col items-center text-center space-y-6 md:space-y-8 lg:space-y-10 mt-10 md:mt-14 lg:mt-20"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
                    // ABOUT US
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[80px]" />
                </div>
                <h3 className="section-heading mt-2">Why Choose Terminal?</h3>
                <p className="text-medium mt-3 md:mt-6 max-w-3xl mx-auto">
                  We combine cutting-edge technology with proven methodologies to deliver exceptional results.
                </p>
              </motion.div>
              <div className="pointer-events-none h-2 md:h-3 lg:h-4" />
              {navHidden && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="mt-8 md:mt-10 lg:mt-12 flex justify-between items-center pb-5"
                >
                  <p className="text-small invisible" ref={label} />
                  <button
                    className="text-small invisible"
                    ref={scrollButton}
                    aria-label="Scroll Down"
                  >
                    (This Way ↓)
                  </button>
                </motion.div>
              )}
            </div>
          }
          className="px-5 md:px-8 lg:px-8"
          lines={[
            'Lightning Fast',
            'Optimized performance with cutting-edge technologies and best practices for speed and scalability.',
            'Enterprise Security',
            'Military-grade security implementation with comprehensive testing and vulnerability assessments.',
            'Cloud Native',
            'Built for the cloud with microservices architecture, auto-scaling, and global deployment capabilities.',
          ]}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-none h-24 md:h-28 lg:h-32"
        style={{
          background:
            'linear-gradient(to bottom, rgba(248,247,243,0) 0%, rgba(12,12,12,0.85) 100%)',
        }}
      />
    </section>
  );
};

export default About;

const Heading = () => {
  const { startSecondaryHeadingScramble } = useAppContext();
  const [displayText, setDisplayText] = useState('Database Solutions');
  const [hidden, setHidden] = useState(false);
  const { ref } = useScramble({
    text: displayText,
  });
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (startSecondaryHeadingScramble) {
      if (ref.current) {
        ref.current.classList.remove('invisible');
      }

      const texts = [
        'Database Solutions',
        'UI/UX Design',
        'Web Development',
        'Mobile App Development',
        'Analytics & Reporting',
      ];
      let currentIndex = 0;

      intervalRef.current = window.setInterval(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        setDisplayText(texts[currentIndex]);
      }, 2800); // Change sentence every 6000ms (6 seconds)

      gsap.registerPlugin(ScrollTrigger);
      const st = ScrollTrigger.create({
        trigger: '#about-section',
        start: 'top bottom', // when section top reaches bottom of viewport
        once: true,
        onEnter: () => {
          setDisplayText('Why Choose Terminal?');
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setHidden(true);
        },
      });

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        st.kill();
      };
    }
  }, [startSecondaryHeadingScramble, ref]);

  if (hidden) return null;
  return <h2 className="section-heading invisible" ref={ref} />;
};
