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

  const iconMap: Record<string, string> = {
    'Lightning Fast': 'bolt',
    'Enterprise Security': 'shield',
    'Cloud Native': 'cloud',
  };

  const colorMap: Record<string, string> = {
    'Lightning Fast': 'from-[#f59e0b]/20 to-[#f59e0b]/5',
    'Enterprise Security': 'from-details-red/20 to-details-red/5',
    'Cloud Native': 'from-[#3b82f6]/20 to-[#3b82f6]/5',
  };

  const Icon = ({ title }: { title: string }) => {
    const iconName = iconMap[title];
    if (!iconName) return null;
    const gradientColor = colorMap[title] || 'from-details-red/20 to-details-red/5';
    return (
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${gradientColor} border border-details-red/10 flex items-center justify-center shadow-glow-sm`}>
        <span className="material-icons-outlined text-2xl md:text-3xl text-details-red">
          {iconName}
        </span>
      </div>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !stickyRef.current || itemsRef.current.length === 0)
      return;

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

    itemsRef.current.forEach((el, i) => {
      tl.fromTo(
        el,
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'none' },
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
              className="group glass-card-light rounded-2xl p-5 md:p-6 max-w-2xl w-full transition-all duration-500 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-center gap-5 md:gap-6 mb-3">
                <div className="transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                  <Icon title={pair.title} />
                </div>
                <h3 className="text-3xl md:text-[2.125rem] font-semibold leading-tight group-hover:text-details-red transition-colors duration-300">
                  {pair.title}
                </h3>
              </div>
              {pair.desc ? (
                <p className="text-medium md:text-[1.125rem] opacity-70 max-w-3xl mx-auto leading-relaxed">
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
