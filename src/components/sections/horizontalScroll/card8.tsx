'use client';
import React, { useEffect, useRef, useState } from 'react';
import CardWrapper from './cardWrapper';
import { motion, MotionValue, useTransform, useMotionValueEvent } from 'framer-motion';

const words = ['You', 'are', 'the', 'next'];

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

  return (
    <CardWrapper>
      <div ref={ref} className="flex h-full w-full items-center justify-center">
        <div className="flex items-baseline gap-2 text-xl md:text-2xl lg:text-3xl font-bold">
          {words.map((w, i) => {
            const gateStart = 0.975;
            const gated = clamp((seg - gateStart) / (1 - gateStart), 0, 1);
            const start = i / words.length;
            const span = 0.8;
            const end = Math.min(start + span, 1);
            const t = clamp((gated - start) / (end - start), 0, 1);
            const y = 24 * (1 - t);
            const opacity = t;
            return (
              <motion.span key={w + i} style={{ opacity: visible ? opacity : 0, y: visible ? y : 8 }}>
                {w}
              </motion.span>
            );
          })}
          {(() => {
            const gateStart = 0.985;
            const gated = clamp((seg - gateStart) / (1 - gateStart), 0, 1);
            const t = clamp(gated, 0, 1);
            const y = 24 * (1 - t);
            const opacity = t;
            return (
              <motion.span
                aria-hidden="true"
                style={{ opacity: visible ? opacity : 0, y: visible ? y : 8 }}
                className="inline-block"
              >
                👉
              </motion.span>
            );
          })()}
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card8;
