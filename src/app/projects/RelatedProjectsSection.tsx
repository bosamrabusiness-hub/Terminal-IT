// src/app/projects/RelatedProjectsSection.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedProject {
  slug: string;
  title: string;
  companyName: string;
  date: string;
  imageUrl: string;
  externalUrl?: string;
  comingSoon?: boolean;
}

interface RelatedProjectsSectionProps {
  relatedProjects: RelatedProject[];
}

const RelatedProjectsSection: React.FC<RelatedProjectsSectionProps> = ({
  relatedProjects,
}) => {
  // filter out projects not ready
  const visibleProjects = relatedProjects.filter((p) => !p.comingSoon);

  return (
    <section className="w-full bg-hero-dark text-mainbody-weg py-16 px-[0.63rem] sm:px-[4rem_0.5rem] md:px-[1.25rem] lg:px-[10rem_4.5625rem_4rem_4.5625rem]">
      <div className="max-w-[84.2rem] mx-auto">
        {/* Section Heading */}
        <h2 className="section-heading mb-8">Other Projects You Might Like</h2>

        {/* Card Container - grid with 1 column in md and 3 columns in lg */}
        <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 md:gap-[3rem] lg:gap-[3rem]">
          {visibleProjects.map((relatedProject) => {
            const isExternal = Boolean(relatedProject.externalUrl);
            const href = isExternal
              ? relatedProject.externalUrl!
              : `/projects/${relatedProject.slug}`;
            const linkProps = isExternal
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <div
                key={relatedProject.slug}
                className="group relative overflow-hidden border-2 border-[#ffffff33] w-full"
              >
                <Link href={href} className="block" {...linkProps}>
                  {/* Image (no padding) */}
                  <div className="overflow-hidden transition-transform transform duration-700 ease-in-out mb-4 relative h-[200px] w-full">
                    <Image
                      src={relatedProject.imageUrl}
                      alt={relatedProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>

                  {/* Text Container with padding and spacing */}
                  <div className="p-4 flex flex-col gap-3 text-medium">
                    <h3 className="font-semibold text-mainbody-weg leading-snug">
                      {relatedProject.title}
                    </h3>
                    <p className="text-small">
                      <strong></strong> {relatedProject.companyName}
                    </p>
                    <p className="text-small">
                      <strong></strong> {relatedProject.date}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjectsSection;
