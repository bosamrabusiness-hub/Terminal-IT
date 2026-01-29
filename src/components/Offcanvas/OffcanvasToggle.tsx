'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import MagneticButton from '../common/MagneticButton';
import classes from './index.module.css';
import useMedia from '../hooks/useMedia';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function OffcanvasToggle({ isOpen, onToggle }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['500px 500px', 'end start'],
  });
  const isMobile = useMedia('(max-width: 1023px)');

  return (
    <motion.div
      ref={containerRef}
      initial={false}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      style={{ scale: isMobile ? 1 : scrollYProgress }}
      className={classes.wrapper}
    >
      <MagneticButton
        onClick={onToggle}
        aria-label="Offcanvas Toggle"
        className="grid h-11 w-11 md:h-14 md:w-14 place-items-center rounded-full overflow-hidden border border-white/30 bg-black text-details-white shadow-md"
        enableMagnet={!isMobile}
        hoverScale={isMobile ? null : 1.08}
      >
        <span
          className={`${classes.burger} ${isOpen ? classes.burgerActive : ''}`}
        />
        <span className="sr-only">Toggle</span>
      </MagneticButton>
    </motion.div>
  );
}
