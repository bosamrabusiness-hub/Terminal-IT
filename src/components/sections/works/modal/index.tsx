import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ModalProjectData {
  id: string;
  title: string;
  date: string;
  companyName: string;
  slug: string;
  imageUrl: string; // Added imageUrl here
  externalUrl?: string;
  comingSoon?: boolean;
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
      className="group cursor-pointer border-t-[3px] transition-colors duration-300 ease-in md:hover:bg-hero-dark md:hover:text-white w-full px-[10px] pt-[10px] md:px-0 md:pt-0"
    >
      <div className="flex flex-row sm:flex-row p-5 justify-between items-top w-full">
        <div className="flex flex-col gap-[10px] md:flex-row md:items-center md:gap-4 lg:gap-8">
          <h2 className="number section-heading">{id}</h2>
          <div className="flex flex-col items-start">
            <h3 className="company-name text-small transition-colors duration-200 ease-out md:text-hero-dark md:group-hover:text-mainbody-weg">
              {companyName}
            </h3>
            <h3 className="date subheading mt-[4px] lg:mt-[4px]">{date}</h3>
          </div>
        </div>

        <h3 className="name text-large flex justify-end md:inline-flex md:justify-end">
          <span className="transition-colors duration-200 ease-out">
            {title}
          </span>
          <span className="relative w-[1.63rem] h-[1.63rem] md:w-[2.625rem] md:h-[2.625rem] md:group-hover:invert">
            <Image
              src="/arrow-up.svg"
              alt="arrow icon"
              fill
              sizes="26px"
              style={{ objectFit: 'contain' }}
            />
          </span>
        </h3>
      </div>

      {/* Updated to use the imageUrl dynamically */}
      <div className="relative my-[0.63rem] h-72 w-[calc(100%-20px)] mx-[10px] bg-hero-dark p-[1.41rem_3.1rem] md:hidden">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl} // Dynamically use the imageUrl from projectData
            alt={`${title} image`}
            fill
            sizes="(max-width: 768px) calc(100vw - 20px), 400px"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </div>
    </div>
  );

  if (comingSoon) {
    return (
      <div className="block w-full border-t-[3px] p-5">
        <h2 className="number section-heading">{id}</h2>
        <p>{title} is coming soon</p>
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
