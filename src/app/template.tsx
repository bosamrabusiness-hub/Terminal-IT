//src/app/template.tsx

'use client';
import { ReactLenis } from 'lenis/react';

const Template = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default Template;
