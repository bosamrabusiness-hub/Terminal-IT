// src/components/Navbar/index.tsx
import React from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export default function Navbar() {
  return (
    <>
      {/* Desktop (lg+) version */}
      <DesktopNav />

      {/* Mobile (below lg) version */}
      <MobileNav />
    </>
  );
}
