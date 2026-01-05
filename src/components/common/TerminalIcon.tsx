'use client';

import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const TerminalIcon = () => {
  const { heroIconControl } = useAppContext();
  return (
    <motion.div
      className="relative inline-block [--size:3.6rem] md:[--size:4.1rem] lg:[--size:5.56rem]"
      style={{ verticalAlign: 'baseline' }}
      variants={{
        hidden: { width: '0rem', height: '0rem' },
        visible: { width: 'var(--size)', height: 'var(--size)' },
      }}
      initial="visible"
      transition={{ ease: [0.86, 0, 0.07, 0.995], duration: 1 }}
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
          points="18,30 52,50 18,70"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.rect
          x="60"
          y="72"
          width="26"
          height="6"
          rx="3"
          fill="currentColor"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default TerminalIcon;
