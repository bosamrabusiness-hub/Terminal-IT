'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <>
      {/* Glow layer behind the bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] origin-left z-[100] blur-[4px]"
        style={{
          scaleX,
          opacity,
          background: 'linear-gradient(90deg, #E44021, #ff6347, #E44021)',
        }}
      />
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
        style={{
          scaleX,
          opacity,
          background: 'linear-gradient(90deg, #E44021, #ff6347)',
        }}
      />
    </>
  );
}
