'use client';

import TerminalIcon from '../../common/TerminalIcon';
import SoftWindowFrame from '../stitch/SoftWindowFrame';
import { useEffect, useState } from 'react';
import { useScramble } from 'use-scramble';
import { useAppContext } from '@/components/context/AppContext';
import { motion } from 'framer-motion';

interface HeroMobileProps {
  id?: string;
}

const MobileHero: React.FC<HeroMobileProps> = ({ id }) => {
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
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[5%] w-[180px] h-[180px] rounded-full bg-details-red/[0.04] blur-[60px] animate-float" />
        <div className="absolute bottom-[30%] left-[5%] w-[120px] h-[120px] rounded-full bg-details-red/[0.03] blur-[50px] animate-float-delayed" />
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-details-red/30 to-transparent" />

      <SoftWindowFrame className="fixed top-0 left-0 right-0 z-999 pointer-events-none h-[calc(var(--navbar-height)+var(--hero-section--height))]" />
      <div className="absolute bottom-16 left-[1.25rem] right-[0.75rem] z-5">
        <div className="grid grid-cols-[auto_1fr] items-baseline gap-2">
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
              className="mt-3 flex items-start gap-4"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-jetbrains-mono text-sm text-details-red">-&gt;</span>
                <p className="text-small opacity-70 leading-relaxed">
                  Transforming ideas into powerful digital solutions with cutting-edge technology and innovative design.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-details-red status-dot" />
                <span className="font-jetbrains-mono text-[9px] uppercase tracking-[0.15em] text-details-red/60">Specializing In</span>
              </div>
              <span ref={ref} className="text-medium font-jetbrains-mono opacity-85" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex items-center gap-4 opacity-40 transition-opacity duration-300 font-jetbrains-mono"
            >
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center">
                  <span className="material-icons-outlined text-xl text-details-white">lightbulb</span>
                </div>
                <span className="text-[9px] tracking-widest uppercase opacity-70">Idea</span>
              </div>
              <div className="w-6 h-px bg-gradient-to-r from-white/20 to-white/5" />
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center">
                  <span className="material-icons-outlined text-xl text-details-white">terminal</span>
                </div>
                <span className="text-[9px] tracking-widest uppercase opacity-70">Build</span>
              </div>
              <div className="w-6 h-px bg-gradient-to-r from-white/20 to-white/5" />
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center">
                  <span className="material-icons-outlined text-xl text-details-white">rocket_launch</span>
                </div>
                <span className="text-[9px] tracking-widest uppercase opacity-70">Ship</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
