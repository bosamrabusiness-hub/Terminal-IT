'use client';

import TerminalIcon from '../../common/TerminalIcon';
import PreviewImageBox from '@/components/common/PreviewImageBox';
import sonbola from '../../../../assets/Sonbola-dash-terminal.png';

const MobileHorizontalSection = () => {
  return (
    <section className="relative px-3 py-6">
      <h2 className="text-[1.6rem] leading-[2rem] mb-4 ml-1 text-primary">
        <span className="inline-block mr-3 text-details-red">
          <TerminalIcon />
        </span>
        <span>The last piece of art</span>
      </h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 pr-3">
          <div className="relative w-[14rem] h-[9rem] flex-shrink-0">
            <PreviewImageBox
              src={sonbola}
              alt="Preview"
              sizes="(max-width:520px) 14rem, 18rem"
              containerClassName="relative w-full h-full"
            />
          </div>
          <div className="relative w-[14rem] h-[9rem] flex-shrink-0">
            <PreviewImageBox
              src={sonbola}
              alt="Preview"
              sizes="(max-width:520px) 14rem, 18rem"
              containerClassName="relative w-full h-full"
            />
          </div>
          <div className="relative w-[14rem] h-[9rem] flex-shrink-0">
            <PreviewImageBox
              src={sonbola}
              alt="Preview"
              sizes="(max-width:520px) 14rem, 18rem"
              containerClassName="relative w-full h-full"
            />
          </div>
        </div>
      </div>
      <button className="absolute bottom-2 right-3 text-small">(Keep going ↓)</button>
    </section>
  );
};

export default MobileHorizontalSection;

