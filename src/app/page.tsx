// src/app/page.tsx
// 'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/about';
import HorizontalSection from '@/components/sections/horizontalScroll';
import StitchSection from '@/components/sections/stitch';
import Specialization from '@/components/sections/specialization';
import Works from '@/components/sections/works';
import Process from '@/components/sections/process';
import Purpose from '@/components/sections/purpose';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Hero id="hero" />
      <main className="bg-mainbody-weg relative z-20">
        <About />
        <StitchSection />
        <HorizontalSection />
        <Specialization />
        <Works id="projects" />
        <Process />
        <Purpose />
      </main>
      <Footer id="contact" />
    </>
  );
}
