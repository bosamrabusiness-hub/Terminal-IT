'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

export default function Backdrop() {
  const [height, setHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 0);

  useEffect(() => {
    const handler = () => setHeight(window.innerHeight);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`;

  const curve: Variants = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: -0.2 },
    },
  };

  return (
    <motion.svg className="absolute right-[600px] top-0 h-full w-24 fill-[#0C0C0C] stroke-none">
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
    </motion.svg>
  );
}
