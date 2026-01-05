// src/components/footer/index.tsx
'use client';

import { useInView } from 'framer-motion';
import TerminalIcon from '../common/TerminalIcon';
import { useEffect, useRef } from 'react';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  useEffect(() => {}, [inView]);

  return (
    <footer
      id={id}
      className="relative z-1 -mt-[100vh] h-[200vh] w-full bg-hero-dark"
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] lg:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="sticky top-0 flex h-svh flex-col text-mainbody-weg ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem] mr-[0.63rem] md:mr-[1.25rem] lg:mr-[1.25rem] mt-[1.25rem] mb-[1.25rem] [clip-path:_inset(0_0_0_0)] font-inter z-5">
        <div className="relative  mt-[2.25rem]">
          <h1 className="display-heading">
            <span className="inline-block mr-[1.875rem] md:mr-[2.19rem] lg:mr-[2.19rem] text-details-red">
              <TerminalIcon />
            </span>
            <span>Let’s talk</span>
          </h1>
        </div>
        <div className="mt-auto space-y-4 mb-[15px] lg:mb-[30px] not-italic">
          <div className="min-h-[9rem]" />
          <div className="min-h-[6rem]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
