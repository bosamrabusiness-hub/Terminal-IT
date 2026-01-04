import React from 'react';
import CardWrapper from './cardWrapper';
import Image from 'next/image';

const Card8 = () => {
  return (
    <CardWrapper className="px-6">
      <div className="w-[15rem] rounded-lg bg-white text-[#212B36] filter-custom-drop-shadow">
        {/* Cover Image */}
        <div className="relative w-full h-[11.25rem] rounded-t-lg overflow-hidden">
          <Image
            src="/card7.png"
            alt=""
            fill
            sizes="240px"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <div className="mt-3 px-3 pt-3 text-[0.5rem] font-bold leading-[0.75rem]">
          <h2 className="text-[#212B36]">Something we’d like to propose</h2>
          <p className="mt-2 font-normal text-[#637381] pb-1">
            In today’s net-savvy world it has become common for any business to
            have a website which they use mostly for advertising their products
            and services.
          </p>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card8;
