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
          <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/40 via-hero-dark/10 to-transparent" />
          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
            <div>
              <span className="font-jetbrains-mono text-[10px] text-white/50 uppercase tracking-wider">Est. 2025</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <span className="material-icons-outlined text-lg text-white/70">photo_camera</span>
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
        <motion.div variants={itemVariants}>
          <div className="rounded-2xl glass-card-light p-5 md:p-6 transition-all duration-500 hover:shadow-card-hover">
            <p className="text-medium leading-relaxed">
              <b className="text-details-red">Terminal was founded in 2025</b> with a simple yet ambitious vision:
              to <b>bridge the gap between cutting-edge technology</b> and real-world
              business needs.<br /><br />
              What started as a small team of passionate developers has grown into a
              <b> full-service digital agency</b>.<br /><br />
              Today, we continue to push boundaries, embrace new technologies, and
              maintain our commitment to <b>delivering exceptional results</b>.<br /><br />
              Our success is measured not just by the code we write, but by the
              <b className="text-details-red"> impact we create</b> for our clients and their users.
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
          {[
            { number: '50+', label: 'Projects' },
            { number: '30+', label: 'Clients' },
            { number: '99%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass-card-light rounded-xl p-4 transition-all duration-300 hover:shadow-card-hover group">
              <p className="text-2xl md:text-3xl font-bold text-details-red group-hover:scale-110 transition-transform duration-300 inline-block">{stat.number}</p>
              <p className="text-xs font-jetbrains-mono uppercase tracking-wider opacity-50 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Process;
