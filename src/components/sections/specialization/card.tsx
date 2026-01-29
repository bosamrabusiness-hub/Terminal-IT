// src/components/sections/specialization/card.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardInterface {
  number: number;
  paragraph: string;
  heading: string;
  icon?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Card = ({ heading, paragraph, number, icon }: CardInterface) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex gap-5 md:gap-6 max-w-full rounded-xl glass-card-light p-5 md:p-6 transition-all duration-500 hover:shadow-card-hover hover:bg-white/80 overflow-hidden border-l-2 border-l-transparent hover:border-l-details-red"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(228, 64, 33, 0.06), transparent 60%)',
        }}
      />

      {/* Left: step indicator */}
      <div className="relative flex flex-col items-center gap-3 shrink-0">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-details-red/10 border border-details-red/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-details-red group-hover:border-details-red group-hover:shadow-glow-sm transition-all duration-500">
          {icon ? (
            <span className="material-icons-outlined text-xl md:text-2xl text-details-red group-hover:text-white transition-colors duration-300">
              {icon}
            </span>
          ) : (
            <span className="text-details-red group-hover:text-white text-lg font-jetbrains-mono font-bold transition-colors duration-300">
              0{number}
            </span>
          )}
        </div>
        <span className="font-jetbrains-mono text-xs text-details-red/50 group-hover:text-details-red transition-colors duration-300">
          0{number}
        </span>
        {/* Connecting line to next card */}
        {number < 4 && (
          <div className="hidden md:block w-px h-8 bg-gradient-to-b from-details-red/20 to-transparent absolute -bottom-11" />
        )}
      </div>

      {/* Right: content */}
      <div className="relative flex flex-col gap-2 md:gap-3">
        <h3 className="text-large group-hover:text-details-red transition-colors duration-300">{heading}</h3>
        <p className="text-medium opacity-60 group-hover:opacity-80 transition-opacity duration-300 leading-relaxed">{paragraph}</p>
      </div>
    </motion.div>
  );
};
