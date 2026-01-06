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
      <div className="absolute right-0 top-0 h-screen w-full md:w-[600px] bg-hero-dark text-details-white">
        <div
          className="flex h-full flex-col justify-between p-6 md:p-10 lg:p-24"
          style={{
            paddingLeft: 'calc(env(safe-area-inset-left) + 1rem)',
            paddingRight: 'calc(env(safe-area-inset-right) + 1rem)',
            paddingTop: 'calc(env(safe-area-inset-top) + 0.75rem)',
          }}
        >
          <Links onItemClick={onClose} />
          <div className="mt-10 hidden md:flex gap-6 text-sm text-mainbody-weg/70">
            <span className="opacity-60 cursor-not-allowed" aria-disabled="true">
              Facebook
            </span>
            <span className="opacity-60 cursor-not-allowed" aria-disabled="true">
              Instagram
            </span>
            <span className="opacity-60 cursor-not-allowed" aria-disabled="true">
              Youtube
            </span>
            <span className="opacity-60 cursor-not-allowed" aria-disabled="true">
              LinkedIn
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
