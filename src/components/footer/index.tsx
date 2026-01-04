// src/components/footer/index.tsx
'use client';

import { useInView } from 'framer-motion';
import HeroArrow from '../common/HeroArrow';
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
            <HeroArrow /> <span>Let’s talk</span>
          </h1>
        </div>
        <div className="mt-auto space-y-4 mb-[15px] lg:mb-[30px] not-italic">
          <p className="text-medium text-left">
            Berlin, Germany <br />
            Phone: (+49) 17627744274 <br />
            <a
              href="https://linkedin.com/in/harold-cano-cardenas-3a77a92b3"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              href="https://www.xing.com/profile/Harold_Cano"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Xing
            </a>
            <br />
            <a
              href="mailto:hcanocardenas@gmail.com"
              className="font-bold hover:underline"
            >
              hcanocardenas@gmail.com
            </a>
          </p>
          <p className="text-medium text-left">
            open-source project that I created and made freely available in{' '}
            <a
              href="https://github.com/Kano85/landingpage-1124-nextjs15-ts-gsap"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              GitHub
            </a>
            <br />
            Feel free to visit my{' '}
            <a
              href="https://github.com/Kano85"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Github Profile
            </a>{' '}
            to discover more projects.
            <br />{' '}
            <a
              href="https://www.figma.com/design/cOPSeeYp8TCOYwPmMr1lqT/PORTFOLIO-WEB?node-id=1720-25274"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Responsive Figma Mockups
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
