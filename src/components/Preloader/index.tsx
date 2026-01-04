// src/components/Preloader/index.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
// import { usePathname } from 'next/navigation';

const words = [
  'Hello',
  'Bonjour',
  'Ciao',
  'Olà',
  'السلام عليكم',
  'やあ',
  'Hallå',
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

  useEffect(() => {
    const hideTimer = setTimeout(() => {
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
      {isLoading && size.width > 0 ? (
        <MotionDiv
          id="preloader"
          className="fixed z-80 h-screen w-screen cursor-wait bg-hero-dark"
          variants={slideUp}
          initial="initial"
          exit="exit"
        >
          <MotionDiv
            className="flex h-full items-center justify-center text-3xl text-details-white md:text-4xl"
            variants={fade}
            initial="initial"
            animate="enter"
          >
            <span className="me-3 inline-block h-3 w-3 rounded-full bg-details-white" />
            <p>{words[index]}</p>
          </MotionDiv>
          <motion.svg className="absolute top-0 -z-10 h-[calc(100%+300px)] w-full">
            <motion.path
              className="fill-hero-dark"
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </motion.svg>
        </MotionDiv>
      ) : null}
    </AnimatePresence>
  );
}
