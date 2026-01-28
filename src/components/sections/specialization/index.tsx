'use client';

import React, { useRef } from 'react';
import { Card } from './card';
import { motion, useInView } from 'framer-motion';
import AnimatedButton from '@/components/common/AnimatedButton';

const Specialization = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
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
      className="w-full px-[1.88rem] md:px-[4.38rem] pt-20 md:pt-[60px] lg:pt-[100px]"
    >
      <div className="flex flex-col lg:flex-row lg:gap-16 w-full">
        {/* Sticky Main Heading */}
        <div className="lg:basis-1/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-4 md:top-8 lg:top-16 z-30"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
                // PROCESS
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[80px]" />
            </div>
            <h2 className="display-heading mb-4">
              Make it Work
            </h2>
            <p className="text-medium opacity-50 hidden lg:block max-w-[280px] leading-relaxed">
              Our proven 4-step process takes your idea from concept to launch.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-6 md:gap-8 w-full lg:basis-2/3"
        >
          <Card
            number={1}
            heading="Discovery"
            paragraph="We analyze your requirements, goals, and technical constraints to create a comprehensive project roadmap."
            icon="search"
          />
          <Card
            number={2}
            heading="Design"
            paragraph="Our team creates detailed designs, architecture plans, and prototypes for your approval."
            icon="palette"
          />
          <Card
            number={3}
            heading="Development"
            paragraph="We build your solution using agile methodologies with regular updates and feedback cycles."
            icon="code"
          />
          <Card
            number={4}
            heading="Deployment"
            paragraph="We deploy, test, and optimize your solution with ongoing support and maintenance."
            icon="rocket_launch"
          />
          <motion.div variants={itemVariants} className="self-end mt-4">
            <AnimatedButton
              text="Let's work together"
              className="bg-transparent text-hero-dark"
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialization;
