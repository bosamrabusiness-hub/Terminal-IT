'use client';

import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { navItems } from '@/config/navItems';
import { NavItemLink } from '@/components/Navbar/NavItemLink';
import useMedia from '@/components/hooks/useMedia';

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
  const isMobile = useMedia('(max-width: 1023px)');
  const items = isMobile ? navItems.filter((i) => i.label !== 'Explorer') : navItems;

  return (
    <div className="mt-6">
      <div className="mb-6 border-b border-white/20">
        <h5 className="text-xs uppercase text-mainbody-weg/70">Navigation</h5>
      </div>
      <ul onPointerLeave={() => setActiveLink(pathname)}>
        {items.map((item, index) => {
          const isActive = activeLink === item.href;
          return (
          <motion.li
            key={item.id}
            className="relative my-4 flex items-center md:pl-8"
            variants={slideOut}
            custom={index}
            initial="initial"
            animate="enter"
            exit="exit"
            onClick={onItemClick}
            onPointerEnter={() => setActiveLink(item.href)}
          >
            <motion.div
              className="hidden md:block absolute left-0 h-4 w-4 rounded-full bg-details-white"
              variants={scaleDot}
              animate={isActive ? 'open' : 'closed'}
            />
            <div className="capitalize text-[clamp(1.75rem,8vw,3rem)] md:text-6xl">
              <NavItemLink
                item={item}
                extraClassName="block py-3"
                plain={isMobile}
              />
            </div>
          </motion.li>
        );
      })}
    </ul>
    </div>
  );
}
