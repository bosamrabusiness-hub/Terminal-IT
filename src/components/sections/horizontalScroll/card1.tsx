import React from 'react';
import Image from 'next/image';
import CardWrapper from './cardWrapper';

const Card1 = () => (
  <CardWrapper>
    <div className="w-[15.23863rem] rounded-xl bg-white p-3 text-[0.5rem] text-[#212B36]">
      <div className="flex justify-between items-center py-3 font-bold">
        <div className="flex gap-1 items-center">
          {/* Bell Icon */}
          <div className="relative w-[1rem] h-[1rem]">
            <Image
              src="/bell.svg"
              alt="bell icon"
              fill
              sizes="16px"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p>Something we’d like to propose</p>
        </div>
        {/* Cross Icon */}
        <div className="relative w-[1rem] h-[1rem]">
          <Image
            src="/cross.svg"
            alt="cross icon"
            fill
            sizes="16px"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      <p className="font-normal leading-[0.75rem] text-[#637381] pr-2">
        In today’s net-savvy world it has become common for any business to have
        a website which they use mostly
      </p>

      <div className="buttons flex items-end justify-end gap-2 p-3 text-[0.4rem] font-bold">
        <button className="rounded-lg bg-[#212B36] p-1.5 text-white">
          Accept
        </button>
        <button className="rounded-lg border border-[rgba(145,_158,_171,_0.32)] p-1.5">
          Cancel
        </button>
      </div>
    </div>
  </CardWrapper>
);

export default Card1;
