import React from 'react';
import CardWrapper from './cardWrapper';
import Image from 'next/image';

const Card6 = () => {
  return (
    <CardWrapper className="px-6">
      <div className="flex h-[8.31rem] rounded-lg bg-white text-[#212B36] filter-custom-drop-shadow">
        {/* Cover Image */}
        <div className="relative basis-20 h-full">
          <Image
            src="/card6.png"
            alt="cover card 6 image"
            fill
            sizes="80px"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="rounded-bl-lg rounded-tl-lg"
          />
        </div>

        <div className="p-3 text-[0.75rem] font-bold">
          <h2>Advertising</h2>
          <p className="text-[#212B36] mt-2 text-[0.5rem] font-normal">
            In today’s net-savvy world it has become common for any business to
            have a website which they use.
          </p>

          <div className="relative mt-5 h-[1.69rem] rounded-lg border border-[rgba(145,_158,_171,_0.20)]">
            <div className="absolute h-full w-full text-[0.4rem] font-normal text-[#919EAB]">
              <span className="absolute left-2 top-1/2 inline-block -translate-y-1/2">
                your-email@.com
              </span>
            </div>
            <button className="absolute right-2 top-1/2 flex h-[1.25rem] w-[2.31rem] -translate-y-1/2 items-center justify-center rounded-lg bg-[#212B36] text-[0.4rem] text-white">
              Notify
            </button>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card6;
