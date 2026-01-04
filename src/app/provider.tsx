// src/app/provider.tsx

'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TransitionRouter } from 'next-transition-router';
import { usePathname } from 'next/navigation';
import PreLoader from '@/components/Preloader';
import IntroOverlay from '@/components/Preloader/IntroOverlay';
import { useAppContext } from '@/components/context/AppContext';
import { AnimatePresence } from 'framer-motion';

export function Providers({ children }: { children: React.ReactNode }) {
  const firstLayer = useRef<HTMLDivElement | null>(null);
  const secondLayer = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const { startMainHeadingScramble, preloaderCompleted } = useAppContext();
  const [showPreloader, setShowPreloader] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setShowPreloader(true);
      setShowIntro(false);
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <TransitionRouter
      auto={true}
      leave={(next, from, to) => {
        console.log({ from, to });

        const tl = gsap
          .timeline({
            onComplete: next,
          })
          .fromTo(
            firstLayer.current,
            { y: '100%' },
            {
              y: 0,
              duration: 0.5,
              ease: 'circ.inOut',
            }
          )
          .fromTo(
            secondLayer.current,
            {
              y: '100%',
            },
            {
              y: 0,
              duration: 0.5,
              ease: 'circ.inOut',
            },
            '<50%'
          );

        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        const tl = gsap
          .timeline()
          .fromTo(
            secondLayer.current,
            { y: 0 },
            {
              y: '-100%',
              duration: 0.5,
              ease: 'circ.inOut',
            }
          )
          .fromTo(
            firstLayer.current,
            { y: 0 },
            {
              y: '-100%',
              duration: 0.5,
              ease: 'circ.inOut',
            },
            '<50%'
          )
          .call(next, undefined, '<50%');

        return () => {
          tl.kill();
        };
      }}
    >
      <main className="bg-hero-dark">
        {showPreloader ? (
          <PreLoader
            key={`pre-${pathname}`}
            onExitStart={() => {
              setShowIntro(true);
              startMainHeadingScramble();
            }}
            onFinished={() => setShowPreloader(false)}
          />
        ) : null}

        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            preloaderCompleted();
          }}
        >
          {showIntro ? (
            <IntroOverlay
              key={`intro-${pathname}`}
              onFinished={() => setShowIntro(false)}
            />
          ) : null}
        </AnimatePresence>
        {children}
      </main>

      <div
        ref={firstLayer}
        className="fixed inset-0 z-70 translate-y-full bg-[#ff6347]"
      />
      <div
        ref={secondLayer}
        className="fixed inset-0 z-70 translate-y-full bg-hero-dark"
      />
    </TransitionRouter>
  );
}
