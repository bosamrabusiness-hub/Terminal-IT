'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="
        bg-mainbody-weg
        flex flex-col
        p-4
        md:gap-[30px]
        md:flex md:flex-row
        lg:gap-[60px]
        md:py-20
        md:justify-center
      "
    >
      {/* IMAGE BLOCK */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="
          group md:sticky md:top-[3.75rem]
          lg:max-w-[380px]
          lg:flex-shrink-0
          h-[30.3125rem]
          w-full
          rounded-2xl overflow-hidden
          shadow-card-hover
        "
      >
        <div className="relative h-full w-full">
          <Image
            fill
            sizes="(max-width: 1024px) 100vw, 380px"
            src="/design-process.png"
            alt="design process"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/60 via-hero-dark/20 to-transparent" />
          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
            <div>
              <span className="font-jetbrains-mono text-[10px] text-white/40 uppercase tracking-wider block">Terminal IT</span>
              <span className="font-jetbrains-mono text-[10px] text-white/60 uppercase tracking-wider">Est. 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#28c840]" />
              <span className="font-jetbrains-mono text-[9px] text-white/50 uppercase tracking-wider">Active</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* TEXT BLOCK */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="
          flex flex-col
          gap-5
          md:gap-10
          lg:gap-10
          md:max-w-[380px]
          lg:max-w-[500px]
          mb-[200px]
          md:mb-[350px]
          lg:mb-[500px]
        "
      >
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-3 pt-12 md:pt-0">
            <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
              // OUR STORY
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[80px]" />
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold whitespace-nowrap">
            Our Story
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          {/* Terminal-style story block */}
          <div className="rounded-2xl border border-hero-dark/[0.08] bg-hero-dark p-5 md:p-6 transition-all duration-500 hover:shadow-card-dark">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-jetbrains-mono text-[10px] text-white/25 tracking-wider ml-auto">
                our_story.md
              </span>
            </div>
            <div className="space-y-4 font-inter text-[0.95rem] leading-relaxed text-white/70">
              <p>
                <strong className="text-details-red">Terminal was founded in 2025</strong> with a simple yet ambitious vision:
                to <strong className="text-white/90">bridge the gap between cutting-edge technology</strong> and real-world
                business needs.
              </p>
              <p>
                What started as a small team of passionate developers has grown into a
                <strong className="text-white/90"> full-service digital agency</strong>.
              </p>
              <p>
                Today, we continue to push boundaries, embrace new technologies, and
                maintain our commitment to <strong className="text-white/90">delivering exceptional results</strong>.
              </p>
              <p>
                Our success is measured not just by the code we write, but by the
                <strong className="text-details-red"> impact we create</strong> for our clients and their users.
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '2025', label: 'Founded' },
              { value: '100%', label: 'Remote' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-xl border border-hero-dark/[0.08] bg-hero-dark/[0.03] p-3 transition-all duration-300 hover:border-details-red/20 hover:bg-details-red/[0.03] group"
              >
                <p className="text-lg md:text-xl font-bold font-jetbrains-mono text-hero-dark group-hover:text-details-red transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-[10px] font-jetbrains-mono uppercase tracking-wider text-hero-dark/40 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Process;
