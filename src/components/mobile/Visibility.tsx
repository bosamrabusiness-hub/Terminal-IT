'use client';

import React, { ReactNode } from 'react';
import useMedia from '@/components/hooks/useMedia';

export function ShowOnMobile({ children }: { children: ReactNode }) {
  const isMobile = useMedia('(max-width: 799px)');
  return isMobile ? <>{children}</> : null;
}

export function ShowOnDesktop({ children }: { children: ReactNode }) {
  const isDesktop = useMedia('(min-width: 800px)');
  return isDesktop ? <>{children}</> : null;
}

