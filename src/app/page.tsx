// src/app/page.tsx
// 'use client';

import Hero from '@/components/sections/Hero';
import MobileHero from '@/components/sections/Hero/Mobile';
import { ShowOnMobile, ShowOnDesktop } from '@/components/mobile/Visibility';
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
      <ShowOnDesktop>
        <Hero id="hero" />
      </ShowOnDesktop>
      <ShowOnMobile>
        <MobileHero id="hero" />
      </ShowOnMobile>
      <main className="bg-mainbody-weg relative z-20">
        <About />
        <ShowOnDesktop>
          <StitchSection />
        </ShowOnDesktop>
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
