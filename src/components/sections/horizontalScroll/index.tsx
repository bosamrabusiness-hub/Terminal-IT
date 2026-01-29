//src/components/sections/horizontalScroll/index.tsx

'use client';

import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import TerminalIcon from '../../common/TerminalIcon';
import { useEffect, useRef, useState } from 'react';
import Stacks from './stacks';

const HorizontalSection = () => {
  const container = useRef<null>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<{
    windowWidth: number;
    width: number;
  }>({
    windowWidth: 0,
    width: 0,
  });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start', 'end'],
  });
  const xRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, width.windowWidth - width.width - 40]
  );
  const x = useSpring(xRaw, { stiffness: 100, damping: 30, mass: 0.5 });

  // Scroll indicator opacity (fades as user scrolls)
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [0.6, 0]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => {
      setWidth({
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

  return (
    <>
      <section
        className="relative h-[250svh] overflow-x-clip px-[0.62rem] md:h-[200svh]"
        ref={container}
      >
        <div className="sticky top-12 h-svh pb-[1.88rem]">
          <div
            className="
mt-[2rem] md:mt-[3rem] lg:mt-[3.5rem]
ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem]
mr-[0.63rem] md:mr-[1.25rem] lg:mr-[1.25rem]
mb-[1.875rem] lg:mb-[2.5rem]
"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
                // SHOWCASE
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[80px]" />
            </div>
            <h2 className="section-heading">
              <span className="inline-block mr-[1.875rem] md:mr-[2.19rem] lg:mr-[2.19rem] text-details-red">
                <TerminalIcon />
              </span>
              <span className="inline-flex items-baseline gap-2">
                <span>The last piece of art</span>
                <img
                  src="/assets/piece-of-art.png"
                  alt="piece of art"
                  style={{ height: '1em', width: 'auto' }}
                />
              </span>
            </h2>
          </div>
          <Stacks ref={stackRef} x={x} progress={scrollYProgress} />

          <motion.button
            style={{ opacity: indicatorOpacity }}
            className="absolute bottom-[0.64rem] right-[0.64rem] py-3 px-4 font-jetbrains-mono text-xs hover:text-details-red transition-colors duration-300 flex items-center gap-2"
          >
            <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center animate-pulse-slow">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 1V7M4 7L1 4M4 7L7 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Keep going
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default HorizontalSection;
