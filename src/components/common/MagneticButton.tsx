'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'default' | 'md' | 'lg' | 'xl';
  enableMagnet?: boolean;
  hoverScale?: number | null;
};

export default function MagneticButton({
  children,
  className = '',
  size = 'md',
  enableMagnet = true,
  hoverScale = 1.08,
  ...props
}: Props) {
  const elementRef = useRef<HTMLButtonElement | null>(null);
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

  const sizeClass =
    size === 'xl'
      ? 'px-6 py-3 text-3xl'
      : size === 'lg'
        ? 'px-5 py-2.5 text-2xl'
        : size === 'md'
          ? 'px-4 py-2 text-xl'
          : 'px-3 py-2 text-base';

  const MotionButton = motion.button as any;

  return (
    <MotionButton
      ref={elementRef}
      className={`rounded-full border border-white/30 bg-transparent text-details-white ${sizeClass} ${className}`}
      animate={enableMagnet ? { x, y } : undefined}
      transition={{ type: 'spring', damping: 15, stiffness: 150, mass: 0.1 }}
      onPointerMove={enableMagnet ? handleMagneticMove : undefined}
      onPointerOut={enableMagnet ? handleMagneticOut : undefined}
      whileHover={hoverScale ? { scale: hoverScale } : undefined}
      {...props}
    >
      <span className="relative">{children}</span>
    </MotionButton>
  );
}
