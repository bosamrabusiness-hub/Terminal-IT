// src/components/Preloader/index.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const words = [
  'Hello',
  'Bonjour',
  'Ciao',
  'Ol\u00e0',
  '\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645',
  '\u3084\u3042',
  'Hall\u00e5',
  'Guten tag',
  'Hallo',
];

const slideUp: Variants = {
  initial: { top: 0 },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const fade: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
};

const MotionDiv = motion.div;

export default function PreLoader({
  onFinished,
  onExitStart,
}: {
  onFinished: () => void;
  onExitStart?: () => void;
}) {

  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const resizeHandlerRef = useRef<() => void>(() => {});

  useEffect(() => {
    const update = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    resizeHandlerRef.current = update;
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Progress bar animation
  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);
    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setProgress(100);
      onExitStart?.();
      setIsLoading(false);
    }, 2600);
    return () => clearTimeout(hideTimer);
  }, [onExitStart]);

  useEffect(() => {
    if (!isLoading) return;
    const duration = index === 0 ? 500 : 250;
    const t = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearTimeout(t);
  }, [index, isLoading]);

  const curve: Variants = useMemo(() => {
    const { width, height } = size;
    const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height}  L0 0`;
    const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height}  L0 0`;
    return {
      initial: {
        d: initialPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: targetPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
      },
    };
  }, [size]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onFinished}>
      {isLoading ? (
        <MotionDiv
          id="preloader"
          className="fixed z-80 h-screen w-screen cursor-wait bg-hero-dark noise-overlay"
          variants={slideUp}
          initial="initial"
          exit="exit"
        >
          {/* Grid background pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <MotionDiv
            className="flex h-full flex-col items-center justify-center text-3xl text-details-white md:text-4xl"
            variants={fade}
            initial="initial"
            animate="enter"
          >
            <div className="flex items-center">
              <span className="me-3 inline-block h-3 w-3 rounded-full bg-details-red status-dot" />
              <p className="font-inter">{words[index]}</p>
            </div>

            {/* Progress bar */}
            <div className="mt-8 w-48 md:w-64">
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #E44021, #ff6347)',
                    width: `${progress}%`,
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
              <p className="font-jetbrains-mono text-[10px] text-white/20 mt-2 text-center tracking-widest">
                {Math.round(progress)}%
              </p>
            </div>
          </MotionDiv>
          {size.width > 0 && (
            <motion.svg className="absolute top-0 -z-10 h-[calc(100%+300px)] w-full">
              <motion.path
                className="fill-hero-dark"
                variants={curve}
                initial="initial"
                exit="exit"
              />
            </motion.svg>
          )}
        </MotionDiv>
      ) : null}
    </AnimatePresence>
  );
}
