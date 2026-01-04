'use client';

import { motion } from 'framer-motion';
import WindowsExplorer from './WindowsExplorer';

const ease = [0.76, 0, 0.24, 1] as const;

export default function StitchSection() {
  return (
    <motion.section
      initial={{ backgroundColor: '#F8F7F3' }}
      whileInView={{ backgroundColor: 'rgba(12,12,12,0.6)' }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.8, ease }}
      className="relative text-details-white py-12 md:py-16 lg:py-20 mb-10 md:mb-14 lg:mb-16"
    >
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover bg-fixed"
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
      <WindowsExplorer />
    </motion.section>
  );
}
