// src/components/sections/specialization/card.tsx

import React from 'react';

interface CardInterface {
  number: number;
  paragraph: string;
  heading: string;
}

export const Card = ({ heading, paragraph, number }: CardInterface) => {
  return (
    <div className="flex gap-[0.625rem] max-w-full">
      {' '}
      <div className="active-number text-details-red text-large">0{number}</div>
      <div className="flex flex-col gap-[0.625rem] md:gap-[1.875rem]">
        <h3 className="text-large">{heading}</h3>
        <p className="text-medium">{paragraph}</p>
      </div>
    </div>
  );
};
