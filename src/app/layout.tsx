// src/app/layout.tsx

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { AppProvider } from '../components/context/AppContext';
import { Providers } from './provider';
import Offcanvas from '@/components/Offcanvas/Offcanvas';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Terminal Software House',
  description: 'Terminal Software House Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
        <AppProvider>
          <Providers>
            {/* Dynamic favicon switcher */}
            {/* mounts early and updates <link rel="icon"> based on color scheme */}
            {/* It ensures favicon changes instantly without relying on static metadata */}
            {/* client-only and has no visual output */}
            {(() => {
              const FaviconSwitcher = require('@/components/common/FaviconSwitcher').default;
              return <FaviconSwitcher />;
            })()}
            <Offcanvas />
            <Navbar />
            {children}
          </Providers>
        </AppProvider>
      </body>
    </html>
  );
}
