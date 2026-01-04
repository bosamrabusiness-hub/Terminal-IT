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
      {/* Header móvil */}
      <motion.div
        variants={navVariants}
        animate={hidden ? 'hidden' : 'visible'}
        className="lg:hidden fixed top-0 left-0 w-screen h-[var(--navbar-height)] px-4 bg-transparent backdrop-blur-none flex items-center justify-end z-50 overflow-hidden" // Ensure w-screen is used
      >
        <button onClick={() => setToggle(true)} aria-label="Abrir menú móvil">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className="w-8 h-8 text-mainbody-weg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </motion.div>

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
          >
            {/* Botón de cierre */}
            <div className="flex items-center justify-end h-[var(--navbar-height)] px-4 border-b border-gray-200/25">
              <button
                onClick={() => setToggle(false)}
                aria-label="Cerrar menú móvil"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-mainbody-weg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-6 mt-8 ml-4 section-heading text-mainbody-weg">
              {navItems.map((item) => (
                <li key={item.id} onClick={() => setToggle(false)}>
                  <NavItemLink item={item} />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
