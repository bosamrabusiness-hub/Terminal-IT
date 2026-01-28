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
      <div className="absolute right-0 top-0 h-screen w-full md:w-[600px] bg-hero-dark text-details-white overflow-hidden noise-overlay">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Left accent border */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-details-red/30 via-details-red/10 to-transparent" />

        <div
          className="relative flex h-full flex-col justify-between p-6 md:p-10 lg:p-24"
          style={{
            paddingLeft: 'calc(env(safe-area-inset-left) + 1rem)',
            paddingRight: 'calc(env(safe-area-inset-right) + 1rem)',
            paddingTop: 'calc(env(safe-area-inset-top) + 0.75rem)',
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-details-red status-dot" />
              <span className="font-jetbrains-mono text-xs text-details-red tracking-wider ml-1">
                // NAVIGATION
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[100px]" />
            </div>
            <Links onItemClick={onClose} />
          </div>
          <div className="mt-10 hidden md:flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-jetbrains-mono text-[10px] text-white/30 uppercase tracking-wider">
                // SOCIAL
              </span>
              <div className="h-px flex-1 bg-white/10 max-w-[60px]" />
            </div>
            <div className="flex gap-6 text-sm font-jetbrains-mono text-mainbody-weg/40">
              {['Facebook', 'Instagram', 'Youtube', 'LinkedIn'].map((social) => (
                <span key={social} className="hover:text-details-red transition-colors duration-300 cursor-pointer relative group">
                  {social}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-details-red group-hover:w-full transition-all duration-300" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
