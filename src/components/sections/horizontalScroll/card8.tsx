'use client';
import React, { useEffect, useRef, useState } from 'react';
import CardWrapper from './cardWrapper';

const Card8 = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <CardWrapper>
      <div ref={ref} className="flex h-full w-full items-center justify-center">
        <span
          className={`text-center text-xl md:text-2xl lg:text-3xl font-bold transition-opacity duration-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          You are the next
        </span>
      </div>
    </CardWrapper>
  );
};

export default Card8;
