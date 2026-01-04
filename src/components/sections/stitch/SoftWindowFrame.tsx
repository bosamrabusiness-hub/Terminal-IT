'use client';

import { twMerge } from 'tailwind-merge';
import React from 'react';

interface SoftWindowFrameProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SoftWindowFrame({ className, children }: SoftWindowFrameProps) {
  return (
    <div className={twMerge('relative', className)}>
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute left-4 right-4 top-2 bottom-0 overflow-hidden rounded-lg border-2 border-white/40 opacity-[0.08]">
          <div className="relative h-9 border-b-2 border-white/40 bg-white/5">
            <div className="absolute left-4 top-1.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#f87171] to-[#dc2626] ring-2 ring-white/30 shadow-[0_0_8px_rgba(248,113,113,0.25)]" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#facc15] to-[#eab308] ring-2 ring-white/30 shadow-[0_0_8px_rgba(250,204,21,0.25)]" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#4ade80] to-[#22c55e] ring-2 ring-white/30 shadow-[0_0_8px_rgba(74,222,128,0.25)]" />
            </div>
          </div>
          <div className="relative h-[calc(100%-2.25rem)]">
            <svg className="absolute inset-0 h-full w-full text-white" style={{ opacity: 0.45 }}>
              <path d="M40 60 H120 L140 90 H200" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="200" cy="90" r="4" fill="currentColor" />
              <path d="M80 200 L80 160 L120 120" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="80" cy="200" r="4" fill="currentColor" />
            </svg>
            <span className="material-icons-outlined absolute top-8 right-12 text-6xl text-white opacity-35">
              settings
            </span>
            <span className="material-icons-outlined absolute bottom-4 right-4 text-[180px] md:text-[200px] lg:text-[240px] text-[#4ade80] opacity-55 leading-none">
              settings
            </span>
            <span className="material-icons-outlined absolute top-24 left-10 text-4xl text-white opacity-35">
              memory
            </span>
          </div>
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
