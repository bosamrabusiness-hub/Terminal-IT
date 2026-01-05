// src/components/Navbar/NavItemLink.tsx
'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { NavItem } from '@/config/navItems';
import TextHover from './TextHover';

gsap.registerPlugin(ScrollToPlugin);

interface NavItemLinkProps {
  item: NavItem;
  extraClassName?: string; // optional className prop
}

export const NavItemLink: React.FC<NavItemLinkProps> = ({
  item,
  extraClassName = '',
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!item.href.includes('#')) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: 0, offsetY: item.offset ?? 0 },
        ease: 'power2.out',
      });
      return;
    }
    const [, hash] = item.href.split('#');
    const target = `#${hash}`;

    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: target, offsetY: item.offset ?? 0 },
      ease: 'power2.out',
    });
  };

  // Render anchor link with minimal default styling
  const commonProps = {
    className: `z-10 ${extraClassName}`, // now you can pass extra classes from DesktopNav if needed
  };

  if (item.type === 'anchor' && pathname === '/') {
    return (
      <a href={item.href} onClick={handleSmoothScroll} {...commonProps}>
        <TextHover titile1={item.label} titile2={item.label} />
      </a>
    );
  }

  if (item.type === 'anchor' && pathname !== '/') {
    return (
      <a
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          router.push(item.href);
        }}
        {...commonProps}
      >
        <TextHover titile1={item.label} titile2={item.label} />
      </a>
    );
  }

  return (
    <a href={item.href} {...commonProps}>
      <TextHover titile1={item.label} titile2={item.label} />
    </a>
  );
};
