// tailwind.config.ts

import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: { min: '520px' },
      lg: { min: '800px' },
    },
    colors: {
      'mainbody-weg': '#F8F7F3',
      'details-red': '#E44021',
      'hero-dark': '#0C0C0C',
      'details-white': '#FFFFFF',
      gray: '#637381',
      white: '#ffffff',
      error: '#FF5630',
      green: '#00A76F',
      primary: '#212B36',
    },
    extend: {
      // Ejemplo de escala de z-index centralizada:
      zIndex: {
        '0': '0', // Base layer
        '1': '1', //Footer
        '5': '5', //Hero
        '10': '10', // Main layer
        '20': '20', // Main body
        '30': '30', // parallax
        '40': '40', // parallax
        '50': '50', // desktop navigation
        '60': '60', // navegación
        '70': '70', // transitionrouter
        '80': '80', // preloader
        '999': '999', // indicador de Tailwind u otros elementos de debug
      },
      // Otras extensiones...
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        '.filter-custom-drop-shadow': {
          filter:
            'drop-shadow(-20px 20px 40px rgba(0, 0, 0, 0.24)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        },
      });
    },
  ],
} satisfies Config;
