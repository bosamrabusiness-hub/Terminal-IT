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
import TerminalIcon from '@/components/common/TerminalIcon';



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
          min-h-[calc(var(--hero-section--height)-6rem)]
          bg-hero-dark text-details-white
          overflow-hidden 
          px-[1.88rem] md:px-[4.38rem]
        "
      >
        <div className="pb-10 pt-6 lg:pt-12" />

        {/* Main headline */}
        <h1
          className="
            display-heading
            absolute bottom-9
            left-[1.88rem] md:left-[4.38rem]
            right-[0.63rem] md:right-[1.25rem] lg:right-[1.25rem]
          "
        >
          <TerminalIcon /> <span>{project.title}</span>
        </h1>
      </section>

      {/* 2. UNIQUE PROJECT CONTENT */}
      {children}

      {/* 3. RELATED PROJECTS */}
      <RelatedProjectsSection relatedProjects={relatedProjects} />
    </main>
  );
}
