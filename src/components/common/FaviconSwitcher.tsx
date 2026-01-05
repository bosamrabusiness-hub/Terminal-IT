'use client';

import { useEffect } from 'react';

export default function FaviconSwitcher() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => {
      const theme = media.matches ? 'dark' : 'light';
      let link = document.querySelector<HTMLLinkElement>('link#site-favicon[rel="icon"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        link.id = 'site-favicon';
        link.type = 'image/png';
        document.head.appendChild(link);
      }
      link.href = `/api/favicon?theme=${theme}&v=${theme}`;
    };
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return null;
}

