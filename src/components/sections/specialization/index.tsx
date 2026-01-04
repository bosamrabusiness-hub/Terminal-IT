import React from 'react';
import { Card } from './card';

const Specialization = () => {
  return (
    <section className="w-full pl-2.5 pr-2.5 pt-20 md:pl-5 md:pr-5 md:pt-[60px] lg:pl-5 lg:pr-5 lg:pt-[100px] ">
      <div className="flex flex-col lg:flex-row lg:gap-16 w-full">
        {/* Sticky Main Heading (remains visible while scrolling cards 01→03) */}
        <div className="lg:basis-1/3">
          <h2 className="display-heading mb-8 lg:ml-20 sticky top-4 md:top-8 lg:top-16 z-30">
            Make it Work
          </h2>
        </div>
        <div className="flex flex-col gap-8 md:gap-12 w-full lg:basis-2/3">
          <Card
            number={1}
            heading="Collaboration with Stakeholders and Teams"
            paragraph="I effectively collaborate with management, developers, and stakeholders to align project goals with business objectives, ensuring smooth and efficient project execution."
          />
          <Card
            number={2}
            heading="Web Development Expertise"
            paragraph="Specializing in React/Next.js, I build robust and user-friendly web applications, leveraging the latest technologies like  Headless CMS, Tailwind, Vercel to provide long-term value to clients."
          />
          <Card
            number={3}
            heading="Design Excellence"
            paragraph="With a college degree and experience in large companies, I create visually appealing and intuitive user interfaces that maintain brand consistency and resonate with target audiences."
          />
          <button className="relative self-end text-right before:absolute before:-bottom-1 before:left-0 before:right-0 before:h-px before:w-full before:bg-hero-dark">
            Let&apos;s work together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
