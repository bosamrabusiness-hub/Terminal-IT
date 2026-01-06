'use client';

import { motion } from 'framer-motion';
import WindowsExplorer from './WindowsExplorer';
import { ShowOnDesktop } from '@/components/mobile/Visibility';

const ease = [0.76, 0, 0.24, 1] as const;

export default function StitchSection() {
  return (
    <motion.section className="relative text-details-white">
      <div className="relative min-h-svh">
        <div className="relative min-h-svh bg-transparent">
          <div
            className="absolute inset-0 -z-10 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
            }}
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)',
              backdropFilter: 'blur(40px)',
            }}
          />
          <div className="py-8 md:py-12 lg:py-16">
            <ShowOnDesktop>
              <WindowsExplorer />
            </ShowOnDesktop>
          </div>
        </div>
      </div>
      <div className="relative h-20 md:h-24 lg:h-28">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 100%)',
            backdropFilter: 'blur(28px)',
          }}
        />
      </div>
    </motion.section>
  );
}
