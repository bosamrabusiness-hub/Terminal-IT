// src/components/Navbar/MobileNav.tsx

'use client';

import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { navItems } from '@/config/navItems';
import useMedia from '../hooks/useMedia';
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

const menuVariants = {
  initial: { y: '-100%' },
  animate: {
    y: 0,
    transition: { duration: 0.7, ease: [0.3, 0.86, 0.36, 0.95] },
  },
  exit: {
    y: '-100%',
    transition: { duration: 0.7, ease: [0.3, 0.86, 0.36, 0.95] },
  },
};

export function MobileNav() {
  const [toggle, setToggle] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const isMobile = useMedia('(max-width: 1023px)');
  const items = isMobile ? navItems.filter((i) => i.label !== 'Explorer') : navItems;

  // Evitar scroll en el fondo cuando el menú móvil está abierto
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup para restaurar el scroll si el componente se desmonta
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggle]);

  // إظهار الشريط العلوي فقط عند بداية الصفحة
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isHidden = latest > 10;
    setHidden(isHidden);
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('navbar-hidden', isHidden);
    }
  });

  return (
    <>
      {/* mobile header trigger removed intentionally */}

      {/* Menú móvil deslizante */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="mobile-nav"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 left-0 right-0 bottom-0 w-screen bg-hero-dark flex flex-col z-60 overflow-hidden" // Ensure w-screen is used
            style={{ willChange: 'transform' }}
          >
            {/* Botón de cierre */}
            <div
              className="flex items-center justify-end h-[var(--navbar-height)] border-b border-gray-200/25"
              style={{
                paddingLeft: 'calc(env(safe-area-inset-left) + 0.75rem)',
                paddingRight: 'calc(env(safe-area-inset-right) + 0.75rem)',
              }}
            >
              <button
                onClick={() => setToggle(false)}
                aria-label="Cerrar menú móvil"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  className="w-9 h-9 md:w-8 md:h-8 text-mainbody-weg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div
              className="flex-1 overflow-y-auto"
              style={{
                paddingLeft: 'calc(env(safe-area-inset-left) + 0.75rem)',
                paddingRight: 'calc(env(safe-area-inset-right) + 0.75rem)',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
              }}
            >
              <div className="mb-4">
                <span className="text-[12px] tracking-[0.2em] uppercase text-mainbody-weg/70">
                  Navigation
                </span>
                <div className="mt-2 h-px w-full bg-white/15" />
              </div>
              <ul className="flex flex-col gap-4 mt-2 md:mt-8 text-[clamp(1.75rem,8vw,3rem)] leading-[1.15] text-mainbody-weg">
                {items.map((item) => (
                  <li key={item.id} onClick={() => setToggle(false)}>
                    <NavItemLink item={item} extraClassName="block py-3" plain />
                  </li>
                ))}
              </ul>
              <div style={{ height: 'env(safe-area-inset-bottom)' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
