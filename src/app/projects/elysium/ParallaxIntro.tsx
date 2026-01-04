// src/components/ParallaxIntro.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function ParallaxIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animaciones de imágenes
    const setupParallax = () => {
      if (
        image1Ref.current &&
        image2Ref.current &&
        image3Ref.current &&
        parallaxRef.current
      ) {
        gsap.fromTo(
          image1Ref.current,
          { y: 0 },
          {
            y: 300,
            ease: 'none',
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );

        gsap.fromTo(
          image2Ref.current,
          { y: 0 },
          {
            y: 600,
            ease: 'none',
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          }
        );

        gsap.fromTo(
          image3Ref.current,
          { y: 0 },
          {
            y: 600,
            ease: 'none',
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    };

    // Animación del título
    const setupTitleAnimation = () => {
      if (titleRef.current && sectionRef.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 20%',
              end: 'bottom 80%',
              scrub: 1,
              markers: false, // Activar true para debug
            },
          })
          .fromTo(
            titleRef.current,
            { opacity: 0, y: -300 },
            { opacity: 1, y: 0, duration: 1 }
          )
          .to(titleRef.current, { opacity: 0, y: -100, duration: 1 });
      }
    };

    setupParallax();
    setupTitleAnimation();

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="bg-black text-white relative">
      {/* Sección Intro */}

      {/* Sección Parallax */}
      <section ref={sectionRef} className="relative min-h-[300vh]">
        {/* Capa de texto */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-[999] pointer-events-none">
          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl text-center px-4 text-hero-dark
            

                    "
          >
            “Behind the Scenes of ELYSIUM’s High‑Impact Client Partnerships.”
          </h2>
        </div>

        {/* Capa de imágenes */}
        <div ref={parallaxRef} className="absolute inset-0 min-h-[300vh] z-0">
          <div
            ref={image1Ref}
            className="absolute top-[15%] left-[5%] overflow-hidden rounded-xl"
          >
            <Image
              src="/elysiumparallax1.png"
              alt="Dashboard"
              width={1440}
              height={900}
              className="max-w-[90vw] md:max-w-[65vw] lg:max-w-[50vw] h-auto"
              priority
            />
          </div>

          <div
            ref={image2Ref}
            className="absolute top-[35%] right-[10%] overflow-hidden rounded-xl"
          >
            <Image
              src="/elysiumparallax2.png"
              alt="Collaboration"
              width={1440}
              height={900}
              className="max-w-[90vw] md:max-w-[65vw] lg:max-w-[50vw] h-auto"
              priority
            />
          </div>

          <div
            ref={image3Ref}
            className="absolute top-[60%] left-[20%] overflow-hidden rounded-xl"
          >
            <Image
              src="/elysiumparallax3.png"
              alt="Progress"
              width={1440}
              height={900}
              className="max-w-[90vw] md:max-w-[65vw] lg:max-w-[50vw] h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Sección de Transición */}
    </div>
  );
}
