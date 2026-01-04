'use client';

import { motion, Variants } from 'framer-motion';
import Backdrop from './Backdrop';
import Links from './Links';

type Props = {
  onClose: () => void;
};

const slideLeft: Variants = {
  initial: { x: 'calc(100% + 100px)' },
  enter: {
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function OffcanvasBody({ onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[55]"
      variants={slideLeft}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Backdrop />
      <div className="absolute right-0 top-0 h-screen w-[600px] bg-hero-dark text-details-white">
        <div className="flex h-full flex-col justify-between p-10 md:p-16 lg:p-24">
          <Links onItemClick={onClose} />
          <div className="mt-10 flex gap-6 text-sm text-mainbody-weg/70">
            <a href="https://awwwards.com" target="_blank" rel="noreferrer">
              Awwwards
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
              Dribbble
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
