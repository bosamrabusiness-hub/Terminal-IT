//src/components/sections/horizontalScroll/index.tsx

'use client';

import { useScroll, useSpring, useTransform } from 'framer-motion';
import HeadingArrow from '../../common/HeadingArrow';
import { useEffect, useRef, useState } from 'react';
import Stacks from './stacks';

const HorizontalSection = () => {
  const container = useRef<null>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<{
    windowWidth: number;
    width: number;
  }>({
    windowWidth: 0,
    width: 0,
  });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start', 'end'],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, width.windowWidth - width.width - 40]
  );
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => {
      setWidth({
        width: stackRef.current?.getBoundingClientRect().width || 0,
        windowWidth: window.innerWidth,
      });
    };
    const raf = requestAnimationFrame(update);
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <section
        className="relative h-[300svh] overflow-x-clip px-[0.62rem] md:h-[200svh]"
        ref={container}
      >
        <div className="sticky top-12 h-svh pb-[1.88rem]">
          <h2
            className="
section-heading
ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem]
mr-[0.63rem] md:mr-[1.25rem] lg:mr-[1.25rem]
mb-[1.875rem] lg:mb-[2.5rem]
"
          >
            <span className="inline-block mr-[1.875rem] md:mr-[2.19rem] lg:mr-[2.19rem]">
              <HeadingArrow />
            </span>
            <span>Engage your users with an attractive design</span>
          </h2>
          <Stacks ref={stackRef} x={x} />

          <button className="xs absolute bottom-[0.64rem] right-[0.64rem] py-4 px-0">
            (Keep going ↓ )
          </button>
        </div>
      </section>
    </>
  );
};

export default HorizontalSection;
