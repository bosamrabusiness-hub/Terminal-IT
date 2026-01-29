'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, MotionValue, useTransform, useMotionValueEvent } from 'framer-motion';

const Card8 = ({ progress }: { progress: MotionValue<number> }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const segment = useTransform(progress, [0.6, 1], [0, 1]);
  const [seg, setSeg] = useState(0);
  useMotionValueEvent(segment, 'change', (v) => setSeg(v));
  const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(n, max));

  const wordT = (i: number, total: number) => {
    const gateStart = 0.975;
    const gated = clamp((seg - gateStart) / (1 - gateStart), 0, 1);
    const start = i / total;
    const span = 0.8;
    const end = Math.min(start + span, 1);
    return clamp((gated - start) / (end - start), 0, 1);
  };

  // CTA button reveal (appears after text)
  const ctaGateStart = 0.99;
  const ctaGated = clamp((seg - ctaGateStart) / (1 - ctaGateStart), 0, 1);

  const handleClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex-shrink-0 flex-grow-0">
      <div
        ref={ref}
        className="relative flex h-[14.5rem] md:h-[17.5rem] lg:h-[20rem] w-[20rem] md:w-[26rem] lg:w-[30rem] flex-col items-center justify-center gap-5 md:gap-7 rounded-xl border border-white/[0.08] bg-hero-dark overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-details-red/[0.07] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-details-red/[0.05] blur-3xl pointer-events-none" />

        {/* Terminal comment line */}
        <motion.span
          style={{
            opacity: visible ? clamp(wordT(0, 6) * 2, 0, 1) : 0,
            y: visible ? 12 * (1 - clamp(wordT(0, 6) * 2, 0, 1)) : 8,
          }}
          className="font-jetbrains-mono text-[10px] md:text-xs text-details-red/60 tracking-widest"
        >
          {'// READY TO START?'}
        </motion.span>

        {/* Headline */}
        <div className="flex items-baseline gap-2 md:gap-3 text-2xl md:text-3xl lg:text-4xl font-bold">
          {['You', 'are', 'the'].map((w, i) => {
            const t = wordT(i, 5);
            return (
              <motion.span
                key={w + i}
                style={{ opacity: visible ? t : 0, y: visible ? 24 * (1 - t) : 8 }}
                className="text-details-white/70"
              >
                {w}
              </motion.span>
            );
          })}
          {(() => {
            const t = wordT(3, 5);
            return (
              <motion.span
                style={{ opacity: visible ? t : 0, y: visible ? 24 * (1 - t) : 8 }}
                className="bg-gradient-to-r from-details-red to-[#ff6347] bg-clip-text text-transparent"
              >
                next
              </motion.span>
            );
          })()}
          {(() => {
            const t = wordT(4, 5);
            return (
              <motion.span
                style={{ opacity: visible ? t : 0, y: visible ? 24 * (1 - t) : 8, scale: visible ? 0.8 + 0.2 * t : 0.8 }}
                className="inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="size-6 md:size-7 lg:size-8 text-details-red"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.span>
            );
          })()}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleClick}
          style={{
            opacity: visible ? ctaGated : 0,
            y: visible ? 16 * (1 - ctaGated) : 16,
          }}
          className="group relative rounded-full border border-details-red/40 bg-details-red/10 px-6 py-2.5 font-jetbrains-mono text-xs md:text-sm text-details-red tracking-wider transition-all duration-300 hover:bg-details-red hover:text-white hover:border-details-red hover:shadow-[0_0_30px_rgba(228,64,33,0.3)] cursor-pointer"
        >
          <span className="relative z-10 flex items-center gap-2">
            {"Let's work together"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default Card8;
