'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const marqueeItems = [
  'Web Development',
  'UI/UX Design',
  'Mobile Apps',
  'Cloud Solutions',
  'Database Architecture',
  'Analytics',
  'DevOps',
  'API Design',
];

const Purpose: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const marqueeX2 = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

  return (
    <section
      ref={ref}
      className="bg-mainbody-weg py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-details-red/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Top marquee row */}
      <motion.div
        style={{ x: marqueeX }}
        className="flex gap-4 md:gap-6 mb-4 md:mb-6 whitespace-nowrap"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={`top-${i}`}
            className="inline-flex items-center gap-3 rounded-full border border-hero-dark/[0.08] px-5 py-2.5 text-sm md:text-base font-jetbrains-mono text-hero-dark/30 transition-colors duration-300 hover:text-details-red hover:border-details-red/30"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-details-red/40" />
            {item}
          </span>
        ))}
      </motion.div>

      {/* Center heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center py-10 md:py-16 lg:py-20 px-4"
      >
        <span className="font-jetbrains-mono text-xs text-details-red tracking-widest mb-4 block">
          // WHAT WE DO
        </span>
        <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold leading-[0.95] tracking-tight">
          <span className="text-hero-dark/80">Let&apos;s design with </span>
          <span className="bg-gradient-to-r from-details-red to-[#ff6347] bg-clip-text text-transparent">
            purpose
          </span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="w-16 h-0.5 bg-details-red mx-auto mt-6 origin-center"
        />
      </motion.div>

      {/* Bottom marquee row (moves opposite direction) */}
      <motion.div
        style={{ x: marqueeX2 }}
        className="flex gap-4 md:gap-6 mt-4 md:mt-6 whitespace-nowrap"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={`bot-${i}`}
            className="inline-flex items-center gap-3 rounded-full border border-hero-dark/[0.08] px-5 py-2.5 text-sm md:text-base font-jetbrains-mono text-hero-dark/30 transition-colors duration-300 hover:text-details-red hover:border-details-red/30"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-details-red/40" />
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Purpose;
