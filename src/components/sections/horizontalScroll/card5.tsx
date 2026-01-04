import React from 'react';
import Image from 'next/image';
import CardWrapper from './cardWrapper';

const Card5 = () => {
  return (
    <CardWrapper className="relative">
      <div className="flex w-60 flex-col items-center justify-center rounded-lg bg-white pt-5 filter-custom-drop-shadow">
        <div className="flex w-48 flex-col items-center justify-center gap-2">
          {/* Chat Icon */}
          <div className="relative w-10 h-10">
            <Image
              src="/ic-chat.png"
              alt="Chat icon"
              fill
              sizes="40px"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h4 className="text-[0.75rem]">Advertising</h4>
          <p className="text-center text-[0.5rem] text-[#637381]">
            In today’s net-savvy world it has become common for any business to
            have a website which they use mostly
          </p>
        </div>
        <div className="flex w-48 gap-1 py-6 text-[0.475rem] font-bold">
          <button className="basis-1/2 rounded-lg bg-hero-dark py-0.5 text-mainbody-weg">
            Accept
          </button>
          <button className="basis-1/2 rounded-lg border border-[#919EAB52] py-0.5">
            Cancel
          </button>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card5;
