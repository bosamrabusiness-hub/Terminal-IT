// src/app/projects/RelatedProjectsSection.tsx

'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface RelatedProject {
  slug: string;
  title: string;
  companyName: string;
  date: string;
  imageUrl: string;
  externalUrl?: string;
  comingSoon?: boolean;
  headingImage?: string | StaticImageData;
}

interface RelatedProjectsSectionProps {
  relatedProjects: RelatedProject[];
}

const RelatedProjectsSection: React.FC<RelatedProjectsSectionProps> = ({
  relatedProjects,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  // filter out projects not ready
  const visibleProjects = relatedProjects.filter((p) => !p.comingSoon);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-hero-dark text-mainbody-weg py-16 px-[1.88rem] md:px-[4.38rem] overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[84.2rem] mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
              // MORE PROJECTS
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[100px]" />
          </div>
          <h2 className="section-heading">Other Projects You Might Like</h2>
        </motion.div>

        {/* Card Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {visibleProjects.map((relatedProject) => {
            const isExternal = Boolean(relatedProject.externalUrl);
            const href = isExternal
              ? relatedProject.externalUrl!
              : `/projects/${relatedProject.slug}`;
            const linkProps = isExternal
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <motion.div
                key={relatedProject.slug}
                variants={cardVariants}
                className="group"
              >
                <Link href={href} className="block" {...linkProps}>
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                    {/* Terminal-style header */}
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      </div>
                      <span className="font-jetbrains-mono text-[10px] text-white/30 uppercase tracking-wider ml-auto">
                        {relatedProject.slug}.tsx
                      </span>
                    </div>

                    {/* Image */}
                    <div className="overflow-hidden transition-transform transform duration-700 ease-in-out relative h-[200px] w-full">
                      <Image
                        src={
                          (relatedProject.headingImage ??
                            relatedProject.imageUrl) as string | StaticImageData
                        }
                        alt={relatedProject.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Text Container */}
                    <div className="p-5 flex flex-col gap-3">
                      <h3 className="text-lg font-medium text-white group-hover:text-details-red transition-colors duration-300">
                        {relatedProject.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="font-jetbrains-mono text-xs text-white/50">
                          {relatedProject.companyName}
                        </span>
                        <span className="font-jetbrains-mono text-xs text-white/30">
                          {relatedProject.date}
                        </span>
                      </div>

                      {/* View project link */}
                      <div className="flex items-center gap-2 mt-2 text-details-red opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-jetbrains-mono text-xs">
                          {isExternal ? 'Visit site' : 'View project'}
                        </span>
                        <span className="material-icons-outlined text-sm">
                          {isExternal ? 'open_in_new' : 'arrow_forward'}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedProjectsSection;
