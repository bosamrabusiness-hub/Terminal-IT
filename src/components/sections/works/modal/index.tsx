import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ModalProjectData {
  id: string;
  title: string;
  date: string;
  companyName: string;
  slug: string;
  imageUrl: string; // Added imageUrl here
  externalUrl?: string;
  comingSoon?: boolean;
  headingImage?: string | StaticImageData;
  gallery?: (string | StaticImageData)[];
}

interface ModalProps {
  index: number;
  projectsData: ModalProjectData;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Modal({
  index,
  projectsData,
  manageModal,
}: ModalProps) {
  const {
    id,
    title,
    date,
    companyName,
    slug,
    imageUrl,
    externalUrl,
    comingSoon,
    headingImage,
    gallery,
  } = projectsData;

  const handleHover = (e: React.MouseEvent, active: boolean) => {
    if (window.innerWidth >= 768) {
      manageModal(active, index, e.clientX, e.clientY);
    }
  };

  const content = (
    <div
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
      className="group cursor-pointer border-t border-hero-dark/15 transition-all duration-300 ease-out md:hover:bg-hero-dark md:hover:text-white w-full px-[10px] pt-[10px] md:px-0 md:pt-0"
    >
      <div className="flex flex-row sm:flex-row p-5 justify-between items-top w-full">
        <div className="flex flex-col gap-[10px] md:flex-row md:items-center md:gap-4 lg:gap-8">
          <h2 className="number section-heading font-jetbrains-mono text-details-red">{
            id
          }</h2>
          <div className="flex flex-col items-start">
            <h3 className="company-name text-small font-jetbrains-mono transition-colors duration-200 ease-out md:text-hero-dark/60 md:group-hover:text-mainbody-weg/70">
              {companyName}
            </h3>
            <h3 className="date subheading mt-[4px] lg:mt-[4px]">{date}</h3>
          </div>
        </div>

        <h3 className="name text-large flex justify-end md:inline-flex md:justify-end">
          <span className="transition-colors duration-200 ease-out md:group-hover:text-details-red">
            {title}
          </span>
          <span className="relative inline-flex items-center justify-center w-[1.63rem] h-[1.63rem] md:w-[2.625rem] md:h-[2.625rem] md:group-hover:text-details-red transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[1.3rem] md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9-9M7 8h8v8" />
            </svg>
          </span>
        </h3>
      </div>

      {/* Mobile preview image */}
      <div className="relative my-[0.63rem] h-72 w-[calc(100%-20px)] mx-[10px] bg-hero-dark rounded-xl overflow-hidden md:hidden">
        <div className="relative w-full h-full">
          {(headingImage ?? (gallery && gallery[0]) ?? imageUrl) ? (
            <Image
              src={(headingImage ?? (gallery && gallery[0]) ?? imageUrl) as string | StaticImageData}
              alt={`${title} image`}
              fill
              sizes="(max-width: 768px) calc(100vw - 20px), 400px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-white/5 text-small">
              No preview
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (comingSoon) {
    return (
      <div className="block w-full border-t-[3px] p-5">
        <h2 className="number section-heading active-number text-details-red">{id}</h2>
        <p>Coming soon</p>
      </div>
    );
  } else if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        {content}
      </a>
    );
  } else {
    return (
      <Link href={`/projects/${slug}`} className="block w-full">
        {content}
      </Link>
    );
  }
}
