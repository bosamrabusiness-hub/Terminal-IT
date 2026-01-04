//src/app/projects/ProjectLayout.tsx

'use client';

import {
  projectData,
  ProjectData,
} from '@/components/sections/works/projectData';
import RelatedProjectsSection from '@/app/projects/RelatedProjectsSection';
import { ReactNode, useEffect } from 'react';
import { useAppContext } from '@/components/context/AppContext';
import { motion } from 'framer-motion';

interface HeroArrowProps {
  gradient?: boolean;
}

const HeroArrow = ({ gradient = false }: HeroArrowProps) => {
  const { heroIconControl } = useAppContext();
  const gradId = 'heroArrowGradient';

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 35 35"
      className="inline-block [--size:3.6rem] md:[--size:4.1rem] lg:[--size:5.56rem] -mt-[10px] md:-mt-[12px] lg:-mt-[20px]"
      style={{ verticalAlign: 'middle' }}
      variants={{
        hidden: { width: '0rem', height: '0rem' },
        visible: { width: 'var(--size)', height: 'var(--size)' },
      }}
      initial="hidden"
      transition={{ ease: [0.86, 0, 0.07, 0.995], duration: 1 }}
      animate={heroIconControl}
    >
      <defs>
        {gradient && (
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D6B973" />
            <stop offset="100%" stopColor="#D6B973" />
          </linearGradient>
        )}
        <clipPath id="clip0_2748_1578">
          <path fill="#fff" d="M0 0h35v35H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip0_2748_1578)">
        {/* fondo */}
        <path
          fill={gradient ? `url(#${gradId})` : '#E44021'}
          d="M0 0h35v35H0z"
        />
        {/* flecha */}
        <path
          fill="#F8F7F3"
          d="m30.171 25.7-3.464.023V11.368L8.118 29.957l-2.49-2.49 18.589-18.59L9.884 8.9V5.413h20.287z"
        />
      </g>
    </motion.svg>
  );
};

export { HeroArrow };

/* ────────────────────────────────────────────────────────────────────────── */
/* Helper: pick the next three projects                                      */
function getNextProjects(
  allProjects: ProjectData[],
  currentSlug: string
): ProjectData[] {
  const total = allProjects.length;
  if (total < 2) return [];

  const currentIndex = allProjects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return allProjects.slice(0, 3);

  const results: ProjectData[] = [];
  for (let i = 1; i < total; i++) {
    const nextIndex = (currentIndex + i) % total;
    const candidate = allProjects[nextIndex];
    if (candidate.slug !== currentSlug) {
      results.push(candidate);
      if (results.length === 3) break;
    }
  }
  return results;
}
/* ────────────────────────────────────────────────────────────────────────── */

interface ProjectLayoutProps {
  slug: string;
  children: ReactNode;
}

export default function ProjectLayout({ slug, children }: ProjectLayoutProps) {
  // ── ensure the hero arrow becomes visible whenever this layout mounts ──
  const { heroIconControl } = useAppContext();
  useEffect(() => {
    heroIconControl.start('visible');
  }, [heroIconControl]);
  // ────────────────────────────────────────────────────────────────────────

  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex items-center justify-center h-screen bg-mainbody-weg">
        <h1 className="text-2xl text-hero-dark">Project Not Found</h1>
      </main>
    );
  }

  const relatedProjects = getNextProjects(projectData, slug);

  return (
    <main className="bg-mainbody-weg text-hero-dark">
      {/* 1. HERO / PROJECT OVERVIEW */}
      <section
        className="
          relative
          min-h-[calc(var(--hero-section--height)+3rem)]
          bg-hero-dark text-details-white
          overflow-hidden 
          px-[1.88rem] md:px-[4.38rem]
        "
      >
        {/* Details + image wrapper */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 pb-24 pt-12 lg:pt-20">
          {/* Project details */}
          <div className="flex flex-col gap-6 lg:gap-10 max-w-full lg:max-w-[60%]">
            <p className="text-medium">
              <strong>Project&nbsp;Name:</strong> {project.companyName} <br />
              <strong>Client:</strong> {project.title} <br />
              <strong>Sector:</strong> {project.sector}
            </p>

            <p className="text-medium">
              <strong>Timeframe:</strong> {project.date} <br />
              <strong>My&nbsp;Role:</strong> {project.myRole}
            </p>
          </div>
        </div>

        {/* Main headline */}
        <h1
          className="
            display-heading pt-[6rem]
            absolute bottom-9
            left-[1.88rem] md:left-[4.38rem]
            right-[0.63rem] md:right-[1.25rem] lg:right-[1.25rem]
          "
        >
          <HeroArrow gradient /> <span>{project.title}</span>
        </h1>
      </section>

      {/* 2. UNIQUE PROJECT CONTENT */}
      {children}

      {/* 3. RELATED PROJECTS */}
      <RelatedProjectsSection relatedProjects={relatedProjects} />
    </main>
  );
}
