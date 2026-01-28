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
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      zIndex: {
        '0': '0',
        '1': '1',
        '5': '5',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '999': '999',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(228, 64, 33, 0.2)',
        'glow-md': '0 0 20px rgba(228, 64, 33, 0.3), 0 0 60px rgba(228, 64, 33, 0.1)',
        'glow-lg': '0 0 30px rgba(228, 64, 33, 0.4), 0 0 80px rgba(228, 64, 33, 0.15)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)',
        'card-dark': '0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 1px 1px rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'line-grow': 'line-grow 1s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'red-gradient': 'linear-gradient(135deg, #E44021, #ff6347)',
        'dark-gradient': 'linear-gradient(135deg, #0C0C0C, #1a1a1a)',
      },
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
