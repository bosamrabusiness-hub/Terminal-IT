'use client';

import Link from 'next/link';
import Image from 'next/image';
import TerminalIcon from '@/components/common/TerminalIcon';
import { projectData } from './projectData';

interface WorksMobileProps {
  id?: string;
}

const MobileWorks: React.FC<WorksMobileProps> = ({ id }) => {
  return (
    <section id={id} className="relative pt-12 px-3">
      <h2 className="text-[1.6rem] leading-[2rem] mb-4 ml-1 text-primary">
        <span className="inline-block mr-3 text-details-red">
          <TerminalIcon />
        </span>
        <span>Recent projects</span>
      </h2>
      <div className="flex flex-col gap-4">
        {projectData.map((project) => {
          const href = project.externalUrl ?? `/projects/${project.slug}`;
          const previewImage =
            project.headingImage ??
            (project.gallery && project.gallery[0]) ??
            project.imageUrl;
          if (project.comingSoon) {
            return (
              <div
                key={project.id}
                className="block w-full border-t-[3px] p-5 bg-white rounded-none"
              >
                <h2 className="number text-[1.6rem] leading-[2rem] text-details-red">
                  {project.id}
                </h2>
                <div className="mt-3 text-small text-primary/70">
                  Coming soon
                </div>
              </div>
            );
          }
          return (
            <Link
              href={href}
              key={project.id}
              className="block rounded-lg border border-primary/10 bg-white shadow-sm overflow-hidden"
            >
              <div className="p-3">
                <span className="text-details-red text-[1.2rem] font-semibold">
                  {project.id}
                </span>
              </div>
              <div className="relative w-full h-48 bg-hero-dark">
                {previewImage ? (
                  <Image
                    src={previewImage as any}
                    alt={`${project.title} image`}
                    fill
                    sizes="(max-width: 520px) 100vw, 520px"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/5 text-small">
                    No preview
                  </div>
                )}
              </div>
              <div className="p-3">
                <span className="text-medium text-primary">{project.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MobileWorks;
