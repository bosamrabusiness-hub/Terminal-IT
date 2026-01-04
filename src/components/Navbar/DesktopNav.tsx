// src/components/Navbar/DesktopNav.tsx
'use client';

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { navItems } from '@/config/navItems';
import { NavItemLink } from './NavItemLink';

const navVariants = {
  hidden: {
    y: '-100%',
    transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 },
  },
};

export function DesktopNav() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isHidden = latest > 10;
    setHidden(isHidden);
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('navbar-hidden', isHidden);
    }
  });

  return (
    <motion.nav
      variants={navVariants}
      animate={hidden ? 'hidden' : 'visible'}
      className="
        fixed top-0 z-50 w-full 
        h-[var(--navbar-height)] bg-transparent backdrop-blur-none
        py-4 hidden lg:flex justify-end text-details-white
      "
    >
      <ul className="flex gap-14 text-medium mr-[10px] md:mr-[35px] lg:mr-[70px] ">
        {navItems.map((item) => (
          <li key={item.id}>
            {/* Pass extraClassName if you need additional classes */}
            <NavItemLink item={item} extraClassName="" />
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
