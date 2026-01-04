// src/components/sections/Hero/HeroArrow.tsx

'use client';

import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const HeroArrow = () => {
  const { heroIconControl } = useAppContext();
  return (
    <motion.div
      className="relative inline-block [--size:3.6rem] md:[--size:4.1rem] lg:[--size:5.56rem]"
      style={{ verticalAlign: 'baseline' }}
      variants={{
        hidden: {
          width: '0rem',
          height: '0rem',
        },
        visible: {
          width: 'var(--size)',
          height: 'var(--size)',
        },
      }}
      initial="hidden"
      transition={{
        ease: [0.86, 0, 0.07, 0.995],
        duration: 1,
      }}
      animate={heroIconControl}
    >
      <motion.svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <polyline
          points="18,22 54,50 18,78"
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.rect
          x="60"
          y="78"
          width="26"
          height="5"
          rx="2"
          fill="currentColor"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.15, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default HeroArrow;
