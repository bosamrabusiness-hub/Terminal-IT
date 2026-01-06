'use client';

import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Props {
  lines: string[];
  className?: string;
  header?: React.ReactNode;
}

export default function ScrollLines({ lines, className, header }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  const safeLines = useMemo(
    () => lines.filter((l) => l && l.trim().length > 0),
    [lines]
  );
  const pairs = useMemo(() => {
    const out: { title: string; desc?: string }[] = [];
    for (let i = 0; i < safeLines.length; i += 2) {
      out.push({ title: safeLines[i], desc: safeLines[i + 1] });
    }
    return out;
  }, [safeLines]);

  const Icon = ({ title }: { title: string }) => {
    if (title === 'Lightning Fast') {
      return (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M26 2L14 26H24L22 46L34 22H24L26 2Z"></path>
          <path stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8 14H14"></path>
          <path stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 22H10"></path>
          <path stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8 30H12"></path>
        </svg>
      );
    }
    if (title === 'Enterprise Security') {
      return (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M24 4L6 10V22C6 31.5 13.5 40.5 24 44C34.5 40.5 42 31.5 42 22V10L24 4Z"></path>
          <path stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M16 22L22 28L32 16"></path>
        </svg>
      );
    }
    if (title === 'Cloud Native') {
      return (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M35 38H13C8.02944 38 4 33.9706 4 29C4 24.5028 7.29977 20.7628 11.609 20.0936C12.1866 14.3725 17.0094 10 22.8 10C27.9946 10 32.4285 13.5135 33.6841 18.2565C38.3073 18.9954 42 22.8447 42 27.8C42 33.4333 38.866 38 35 38Z"></path>
          <circle fill="#000000" cx="16" cy="28" r="2"></circle>
          <circle fill="#000000" cx="24" cy="24" r="2"></circle>
          <circle fill="#000000" cx="32" cy="28" r="2"></circle>
          <path stroke="#000000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M16 28L24 24L32 28"></path>
        </svg>
      );
    }
    return null;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !stickyRef.current || itemsRef.current.length === 0)
      return;

    // Hint GPU acceleration for animated elements
    gsap.set(itemsRef.current, { willChange: 'transform,opacity', force3D: true });
    gsap.set(stickyRef.current, { willChange: 'transform' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: stickyRef.current,
        anticipatePin: 1,
      },
    });

    // Keep header always visible on landing; no scroll animation for it

    itemsRef.current.forEach((el, i) => {
      tl.fromTo(
        el,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'none' },
        i * 0.6
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [pairs]);

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="relative min-h-[180svh] md:min-h-[220svh] lg:min-h-[260svh]"
    >
      <div ref={stickyRef} className="sticky top-0 h-svh flex flex-col justify-start">
        {header ? <div ref={headerRef} className="w-full">{header}</div> : null}
        <div className={`flex flex-col items-center text-center gap-8 md:gap-10 ${className || ''}`}>
          {pairs.map((pair, idx) => (
            <div
              key={`pair-${idx}`}
              ref={(el) => {
                if (el) itemsRef.current[idx] = el as HTMLDivElement;
              }}
              className="group"
            >
              <div className="flex items-center justify-center gap-5 md:gap-6 mb-3">
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon title={pair.title} />
                </div>
                <h3 className="text-3xl md:text-[2.125rem] font-semibold leading-tight">
                  {pair.title}
                </h3>
              </div>
              {pair.desc ? (
                <p className="text-medium md:text-[1.125rem] opacity-90 max-w-3xl mx-auto">
                  {pair.desc}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
