'use client';

// src/components/sections/Hero/index.tsx
import TerminalIcon from '../../common/TerminalIcon';
import SoftWindowFrame from '../stitch/SoftWindowFrame';
import { useEffect, useState } from 'react';
import { useScramble } from 'use-scramble';
import { useAppContext } from '@/components/context/AppContext';
import { ShowOnDesktop } from '@/components/mobile/Visibility';

interface HeroProps {
  id?: string;
}

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
      className="position: sticky z-1 top-[var(--navbar-height)] h-[var(--hero-section--height)] bg-hero-dark text-details-white font-inter relative"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] lg:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <SoftWindowFrame className="fixed top-0 left-0 right-0 z-999 pointer-events-none h-[calc(var(--navbar-height)+var(--hero-section--height))]" />
      <div className="absolute bottom-16 md:bottom-24 left-[1.88rem] md:left-[4.38rem] lg:left-[4.38rem] right-[0.63rem] md:right-[1.25rem] lg:right-[1.25rem] z-5">
        <div className="grid grid-cols-[auto_1fr] items-baseline gap-2 md:gap-3">
          <div className="flex items-baseline">
            <TerminalIcon />
          </div>
          <div>
            <h1 className="display-heading display-heading--compact lg:whitespace-nowrap">
              Terminal Software House
            </h1>
            <div className="mt-4 flex items-start lg:items-center gap-8">
              <div className="flex items-baseline gap-2">
                <span className="font-jetbrains-mono text-sm md:text-base lg:text-lg opacity-70">-&gt;</span>
                <p className="text-sm md:text-base lg:text-lg opacity-80 max-w-[42rem]">
                  Transforming ideas into powerful digital solutions with cutting-edge technology and innovative design.
                </p>
              </div>
              <ShowOnDesktop>
                <div className="flex items-center gap-6 opacity-30 hover:opacity-60 transition-opacity duration-300 font-jetbrains-mono">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-icons-outlined text-3xl text-details-white">lightbulb</span>
                    <span className="text-[10px] tracking-widest uppercase opacity-70">Idea</span>
                  </div>
                  <div className="w-12 h-px bg-white/20" />
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-icons-outlined text-3xl text-details-white">terminal</span>
                    <span className="text-[10px] tracking-widest uppercase opacity-70">Build</span>
                  </div>
                  <div className="w-12 h-px bg-white/20" />
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-icons-outlined text-3xl text-details-white">rocket_launch</span>
                    <span className="text-[10px] tracking-widest uppercase opacity-70">Ship</span>
                  </div>
                </div>
              </ShowOnDesktop>
            </div>
            <div className="mt-8">
              <span
                ref={ref}
                className="text-large font-jetbrains-mono opacity-85"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
