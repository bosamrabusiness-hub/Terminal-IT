'use client';

// src/components/sections/Hero/index.tsx
import TerminalIcon from '../../common/TerminalIcon';
import SoftWindowFrame from '../stitch/SoftWindowFrame';
import { useEffect, useState } from 'react';
import { useScramble } from 'use-scramble';
import { useAppContext } from '@/components/context/AppContext';
import { ShowOnDesktop } from '@/components/mobile/Visibility';
import { motion } from 'framer-motion';

interface HeroProps {
  id?: string;
}

const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Ambient glow orbs */}
    <div className="absolute top-[15%] right-[10%] w-[300px] h-[300px] rounded-full bg-details-red/[0.03] blur-[80px] animate-float" />
    <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] rounded-full bg-details-red/[0.04] blur-[60px] animate-float-delayed" />
    {/* Small floating dots */}
    <div className="absolute top-[30%] right-[25%] w-1 h-1 rounded-full bg-details-red/30 animate-float" />
    <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 rounded-full bg-details-white/10 animate-float-delayed" />
    <div className="absolute top-[45%] left-[20%] w-1 h-1 rounded-full bg-details-white/8 animate-float" />
  </div>
);

const Hero: React.FC<HeroProps> = ({ id }) => {
  const { startSecondaryHeadingScramble } = useAppContext();
  const [displayText, setDisplayText] = useState('Database Solutions');
  const { ref } = useScramble({ text: displayText });

  useEffect(() => {
    if (!startSecondaryHeadingScramble) return;
    let currentIndex = 0;
    const texts = [
      'Database Solutions',
      'UI/UX Design',
      'Web Development',
      'Mobile App Development',
      'Analytics & Reporting',
    ];
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setDisplayText(texts[currentIndex]);
    }, 2400);
    return () => clearInterval(interval);
  }, [startSecondaryHeadingScramble]);

  return (
    <section
      id={id}
      className="position: sticky z-1 top-[var(--navbar-height)] h-[var(--hero-section--height)] bg-hero-dark text-details-white font-inter relative noise-overlay"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] lg:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <FloatingParticles />

      {/* Gradient accent line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-details-red/30 to-transparent" />

      <SoftWindowFrame className="fixed top-0 left-0 right-0 z-999 pointer-events-none h-[calc(var(--navbar-height)+var(--hero-section--height))]" />
      <div className="absolute bottom-16 md:bottom-24 left-[1.88rem] md:left-[4.38rem] lg:left-[4.38rem] right-[0.63rem] md:right-[1.25rem] lg:right-[1.25rem] z-5">
        <div className="grid grid-cols-[auto_1fr] items-baseline gap-2 md:gap-3">
          <div className="flex items-baseline">
            <TerminalIcon />
          </div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="display-heading display-heading--compact lg:whitespace-nowrap"
            >
              Terminal IT
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 flex items-start lg:items-center gap-8"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-jetbrains-mono text-sm md:text-base lg:text-lg text-details-red">-&gt;</span>
                <p className="text-sm md:text-base lg:text-lg opacity-70 max-w-[42rem] leading-relaxed">
                  Transforming ideas into powerful digital solutions with cutting-edge technology and innovative design.
                </p>
              </div>
              <ShowOnDesktop>
                <div className="flex items-center gap-6 opacity-30 hover:opacity-60 transition-opacity duration-500 font-jetbrains-mono">
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-details-red/30 group-hover:bg-details-red/5 transition-all duration-300">
                      <span className="material-icons-outlined text-2xl text-details-white group-hover:text-details-red transition-colors duration-300">lightbulb</span>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase opacity-70">Idea</span>
                  </div>
                  <div className="w-8 h-px bg-gradient-to-r from-white/20 to-white/5" />
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-details-red/30 group-hover:bg-details-red/5 transition-all duration-300">
                      <span className="material-icons-outlined text-2xl text-details-white group-hover:text-details-red transition-colors duration-300">terminal</span>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase opacity-70">Build</span>
                  </div>
                  <div className="w-8 h-px bg-gradient-to-r from-white/20 to-white/5" />
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-details-red/30 group-hover:bg-details-red/5 transition-all duration-300">
                      <span className="material-icons-outlined text-2xl text-details-white group-hover:text-details-red transition-colors duration-300">rocket_launch</span>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase opacity-70">Ship</span>
                  </div>
                </div>
              </ShowOnDesktop>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-details-red status-dot" />
                <span className="font-jetbrains-mono text-[10px] uppercase tracking-[0.2em] text-details-red/60">Currently Specializing In</span>
              </div>
              <span className="inline-flex items-baseline gap-0.5">
                <span
                  ref={ref}
                  className="text-large font-jetbrains-mono opacity-85"
                />
                <span className="inline-block w-[2px] h-[1.1em] bg-details-red animate-pulse" />
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
