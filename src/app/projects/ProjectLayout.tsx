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
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06] lg:opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="pb-10 pt-6 lg:pt-12" />

        {/* Terminal-style label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-8 left-[1.88rem] md:left-[4.38rem] flex items-center gap-2"
        >
          <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
            // PROJECT
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[100px]" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="
            display-heading
            absolute bottom-9
            left-[1.88rem] md:left-[4.38rem]
            right-[0.63rem] md:right-[1.25rem] lg:right-[1.25rem]
            scale-[0.88] md:scale-[1] origin-left
          "
        >
          <span className="text-details-red"><TerminalIcon /></span> <span>{project.title}</span>
        </motion.h1>
      </section>

      {/* 2. UNIQUE PROJECT CONTENT */}
      {children}

      {/* 3. RELATED PROJECTS */}
      <RelatedProjectsSection relatedProjects={relatedProjects} />
    </main>
  );
}
