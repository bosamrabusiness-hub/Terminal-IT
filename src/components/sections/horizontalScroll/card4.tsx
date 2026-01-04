// src/components/Card4.tsx

import Image from 'next/image';
import CardWrapper from './cardWrapper';

const Card4 = () => {
  return (
    <CardWrapper className="py-[3.31rem]">
      <div className="h-[18.88rem] w-[13.87rem] rounded-lg bg-white text-primary filter-custom-drop-shadow">
        {/* Header Section */}
        <div className="flex items-center justify-between gap-2 p-5">
          <h3 className="text-[0.56rem] font-bold">Cards</h3>
          <button className="inline-flex items-center justify-center gap-1 text-[0.475rem]">
            <div className="relative w-[9px] h-[10px]">
              <Image
                src="/new.svg"
                alt="New Icon"
                fill
                sizes="10px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span>New</span>
          </button>
        </div>

        {/* Search Input Section */}
        <div className="px-3">
          <div className="relative h-[1.69rem] w-full">
            <input
              type="text"
              className="w-full rounded-lg border border-[#919EAB] focus:outline-none pl-4 pr-4"
              placeholder="Search..."
            />
            <span className="absolute left-[0.53rem] top-1/2 transform -translate-y-1/2 scale-150 bg-search-svg"></span>
          </div>
        </div>

        {/* Card Items */}
        {/** Wrap each icon exactly the same way **/}
        <div className="px-[0.62rem] mt-[0.69rem] space-y-[0.69rem]">
          {/** First Card Item **/}
          <div className="rounded-lg border border-[#919EAB] p-[0.62rem]">
            <div className="flex items-center justify-between">
              <div className="relative w-[1.1rem] h-[1.1rem]">
              <Image
                src="/layer.svg"
                alt="Layer Icon"
                fill
                sizes="18px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="relative w-[1.1rem] h-[1.1rem]">
              <Image
                src="/3dots.svg"
                alt="More Options"
                fill
                sizes="18px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <p className="mt-1 text-[0.43rem]">**** **** **** 5678</p>
        </div>

          {/** Second Card Item **/}
          <div className="rounded-lg border border-[#212B36] p-[0.62rem]">
            <div className="flex items-center justify-between">
              <div className="inline-flex gap-2">
                <div className="relative w-[1.1rem] h-[1.1rem]">
                  <Image
                    src="/visa.png"
                    alt="Visa"
                    fill
                    sizes="18px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="relative w-[1.1rem] h-[1.1rem]">
                  <Image
                    src="/default.svg"
                    alt="Default"
                    fill
                    sizes="18px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="relative w-[1.1rem] h-[1.1rem]">
                <Image
                  src="/3dots.svg"
                  alt="More Options"
                  fill
                  sizes="18px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <p className="mt-1 text-[0.43rem]">**** **** **** 1243</p>
          </div>

          {/** Third Card Item **/}
          <div className="rounded-lg border border-[#919EAB] p-[0.62rem]">
            <div className="flex items-center justify-between">
              <div className="inline-flex gap-2">
                <div className="relative w-[1.1rem] h-[1.1rem]">
                  <Image
                    src="/visa.png"
                    alt="Visa"
                    fill
                    sizes="18px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="relative w-[1.1rem] h-[1.1rem]">
                <Image
                  src="/3dots.svg"
                  alt="More Options"
                  fill
                  sizes="18px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <p className="mt-1 text-[0.43rem]">**** **** **** 7892</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card4;
