'use client';

import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { navItems } from '@/config/navItems';
import { NavItemLink } from '@/components/Navbar/NavItemLink';

type Props = {
  onItemClick?: () => void;
};

const slideOut: Variants = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

const scaleDot: Variants = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

export default function Links({ onItemClick }: Props) {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  return (
    <div className="mt-6">
      <div className="mb-6 border-b border-white/20">
        <h5 className="text-xs uppercase text-mainbody-weg/70">Navigation</h5>
      </div>
      <ul onPointerLeave={() => setActiveLink(pathname)}>
        {navItems.map((item, index) => {
          const isActive = activeLink === item.href;
          return (
            <motion.li
              key={item.id}
              className="relative my-4 flex items-center"
              variants={slideOut}
              custom={index}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={onItemClick}
              onPointerEnter={() => setActiveLink(item.href)}
            >
              <motion.div
                className="absolute -left-8 h-4 w-4 rounded-full bg-details-white"
                variants={scaleDot}
                animate={isActive ? 'open' : 'closed'}
              />
              <div className="text-6xl capitalize">
                <NavItemLink item={item} />
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
