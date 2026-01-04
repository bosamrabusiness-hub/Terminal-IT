'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

interface AnimatedButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  href,
  onClick,
  className = '',
}) => {
  // Create a ref directly on the button element.
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Click handler: play the letter and bounce animations then open the link.
  const handleClick = () => {
    console.log('Button clicked');
    const buttonEl = buttonRef.current;
    if (!buttonEl) return;

    // Query all letter elements inside the button.
    const letters = buttonEl.querySelectorAll('.letter');

    // Create a GSAP timeline for the click animations.
    gsap
      .timeline({
        onComplete: () => {
          // Call any extra onClick functionality.
          if (onClick) onClick();
          // If a link is provided, open it in a new tab.
          if (href) {
            window.open(href, '_blank');
          }
        },
      })
      // Animate each letter upward with a stagger effect.
      .to(letters, { y: -48, duration: 0.2, stagger: 0.05 })
      // Bounce effect: scale the button down.
      .to(buttonEl, { scale: 0.8, duration: 0.1 })
      // Bounce effect: scale the button back up.
      .to(buttonEl, { scale: 1, duration: 0.1 })
      // Reset the letters to their original position.
      .to(letters, { y: 0, duration: 0.2 });
  };

  // Hover handlers: apply a bounce effect on hover using GSAP.
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'bounce.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power1.out',
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Note: you can remove the Tailwind hover:bg-blue-100 if you don't want
      // the background color change; we now rely on GSAP for the bounce.
      className={`animated-button relative rounded-full border-2 border-details-red px-6 py-2 text-2xl ] ${className}`}
    >
      {/* Screen-reader only text */}
      <span className="sr-only">{text}</span>
      {/* Visible text: each letter wrapped in its own span */}
      <span
        className="flex items-center h-8 overflow-hidden"
        aria-hidden="true"
      >
        {text.split('').map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="letter relative inline-block h-8"
          >
            {letter}
          </span>
        ))}
      </span>
    </button>
  );
};

export default AnimatedButton;
