'use client';

import React, { useRef } from 'react';
import TerminalIcon from '../../common/TerminalIcon';
import { motion, useInView } from 'framer-motion';

const Purpose: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-mainbody-weg pb-4 relative overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-details-red/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2 mb-3 ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem]">
          <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
            // PURPOSE
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[100px]" />
        </div>
        <h2
          className="
            section-heading
            ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem]
            mr-[0.63rem] md:mr-[1.25rem] lg:mr-[1.25rem]
            mb-[1.875rem] lg:mb-[2.5rem]
          "
        >
          <span className="inline-block mr-[1.875rem] md:mr-[2.19rem] lg:mr-[2.19rem] text-details-red">
            <TerminalIcon />
          </span>
          <span>Let&apos;s design with </span>
          <span className="gradient-text">purpose</span>
        </h2>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="h-px bg-gradient-to-r from-details-red/30 via-details-red/10 to-transparent ml-[1.88rem] md:ml-[4.38rem] origin-left"
      />
    </section>
  );
};

export default Purpose;
