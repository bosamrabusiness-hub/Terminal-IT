// src/components/context/AppContext.tsx
'use client';

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { animate, useAnimationControls } from 'framer-motion';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useScramble } from 'use-scramble';
import useMedia from '../hooks/useMedia';
import { navItems } from '@/config/navItems';

// Register the ScrollToPlugin once:
gsap.registerPlugin(ScrollToPlugin);

// Define the context type including the missing properties:
interface AppContextType {
  scrambleRef: React.RefObject<HTMLElement>;
  label: React.RefObject<HTMLParagraphElement>;
  scrollButton: React.RefObject<HTMLButtonElement>;
  heroIconControl: ReturnType<typeof useAnimationControls>;
  startSecondaryHeadingScramble: boolean;
  preloaderCompleted: () => void;
  startMainHeadingScramble: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const isWide = useMedia('(min-width: 390px)');
  const heroIconControl = useAnimationControls();

  // On mount, reset scroll & lock body scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('lock-scroll');
  }, []);

  // Manages whether secondary heading scramble should start
  const [startSecondaryHeadingScramble, setStartSecondaryHeadingScramble] =
    useState(false);

  // Scramble references
  const { ref: label, replay: replayLabel } = useScramble({
    text: '',
    playOnMount: false,
  });
  const { ref: scrollButton, replay: replayScrollButton } = useScramble({
    text: '(This Way ↓)',
    playOnMount: false,
  });

  // Main Hero text scramble
  const { ref: scrambleRef, replay: replayScramble } = useScramble({
    text: !isWide
      ? 'The way you say it,<br/> is everything'
      : 'The way you say it, is everything',
    playOnMount: false,
  });

  const startMainHeadingScramble = () => {
    replayScramble();
  };

  const preloaderCompleted = () => {
    const completeSequence = async () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.display = 'none';
      }
      await heroIconControl.start('visible');
      setStartSecondaryHeadingScramble(true);

      if (label.current) {
        label.current.classList.remove('invisible');
        replayLabel();
      }
      if (scrollButton.current) {
        scrollButton.current.classList.remove('invisible');
        replayScrollButton();
      }

      document.body.classList.remove('lock-scroll');
      document.body.classList.remove('overflow-y-clip');

      const hash = window.location.hash;
      if (hash) {
        try {
          const navItem = navItems.find((item) => item.href.endsWith(hash));
          const offset = navItem?.offset ?? 0;
          const targetEl = document.querySelector(hash) as Element | null;
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: targetEl ?? hash,
              offsetY: offset,
              autoKill: false,
            },
            ease: 'power2.out',
          });
        } catch {
          // swallow scroll errors in dev
        }
      }
    };

    if (document.readyState === 'complete') {
      completeSequence();
    } else {
      const handler = () => {
        completeSequence();
        window.removeEventListener('load', handler);
      };
      window.addEventListener('load', handler);
    }
  };

  return (
    <AppContext.Provider
      value={{
        scrambleRef,
        label,
        scrollButton,
        heroIconControl,
        startSecondaryHeadingScramble,
        preloaderCompleted,
        startMainHeadingScramble,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
