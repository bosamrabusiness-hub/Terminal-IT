// src/components/Preloader/IntroOverlay.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import PreLoaderText from './PreLoaderText';

const slideUp: Variants = {
  initial: { top: 0 },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export default function IntroOverlay({ onFinished }: { onFinished: () => void }) {
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
    const t = setTimeout(() => {
      onFinished();
    }, 1500);
    return () => clearTimeout(t);
  }, [onFinished]);

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
    <motion.div
      id="intro-overlay"
      className="fixed z-80 h-screen w-screen bg-white text-black"
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      <div className="flex h-full items-center justify-center">
        <PreLoaderText />
      </div>
      <motion.svg className="absolute top-0 -z-10 h-[calc(100%+300px)] w-full">
        <motion.path
          className="fill-white"
          variants={curve}
          initial="initial"
          exit="exit"
        />
      </motion.svg>
    </motion.div>
  );
}
