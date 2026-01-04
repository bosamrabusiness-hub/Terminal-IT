'use client';

import { useEffect, useState, useTransition } from 'react';
import { AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import OffcanvasBody from './OffcanvasBody';
import OffcanvasToggle from './OffcanvasToggle';

export default function Offcanvas() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const { scrollY } = useScroll();
  const TOP_THRESHOLD = 10;

  useEffect(() => {
    startTransition(() => setOpen(false));
  }, [pathname]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (isOpen && latest <= TOP_THRESHOLD) {
      setOpen(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen ? <OffcanvasBody onClose={() => setOpen(false)} /> : null}
      </AnimatePresence>
      <OffcanvasToggle isOpen={isOpen} onToggle={() => setOpen(!isOpen)} />
    </>
  );
}
