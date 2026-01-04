import React from 'react';
import Image from 'next/image';
import CardWrapper from './cardWrapper';

const Card2 = () => (
  <CardWrapper>
    <div className="w-[15.23863rem] rounded-xl bg-white p-3 text-[0.5rem] text-[#212B36]">
      <div className="flex items-center justify-between py-3 font-bold">
        <div className="flex items-center justify-center gap-1">
          {/* Delete Icon */}
          <div className="relative w-[1rem] h-[1rem]">
            <Image
              src="/delete.svg"
              alt="delete icon"
              fill
              sizes="16px"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p>Delete Something?</p>
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

      <p className="pr-2 font-normal leading-[0.75rem] text-[#637381]">
        Digital computers use binary code and Boolean logic to store and process
        information, allowing.
      </p>

      <div className="buttons flex items-end justify-end gap-2 p-3 text-[0.4rem] font-bold">
        <button className="rounded-lg border border-[rgba(145,_158,_171,_0.32)] p-1.5">
          Cancel
        </button>
        <button className="bg-error rounded-lg p-1.5 text-white">Delete</button>
      </div>
    </div>
  </CardWrapper>
);

export default Card2;
