'use client';

import TerminalIcon from '../../common/TerminalIcon';
import PreviewImageBox from '@/components/common/PreviewImageBox';
import sonbola from '../../../../assets/Sonbola-dash-terminal.png';
import sonbolaLesson from '../../../../assets/sonbola-lesson-terminal.png';
import sonbolaAdmin from '../../../../assets/sonbola-admin-terminal.png';

const mobileItems = [
  { src: sonbola, alt: 'Sonbola Dashboard', url: 'sonbola-edu.com' },
  { src: sonbolaLesson, alt: 'Sonbola Lesson', url: 'sonbola-edu.com/lesson' },
  { src: sonbolaAdmin, alt: 'Sonbola Admin', url: 'sonbola-edu.com/admin' },
];

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
        <div className="flex gap-4 pr-3">
          {mobileItems.map((item, i) => (
            <div key={i} className="flex-shrink-0">
              <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-hero-dark shadow-xl">
                {/* Browser mockup header */}
                <div className="flex items-center gap-2.5 px-3 py-2 border-b border-white/[0.08] bg-white/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <div className="h-2 w-2 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="rounded-md bg-white/[0.05] border border-white/[0.06] px-2 py-0.5 font-jetbrains-mono text-[8px] text-white/25 tracking-wider">
                      {item.url}
                    </div>
                  </div>
                </div>
                <PreviewImageBox
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width:520px) 16rem, 18rem"
                  containerClassName="relative w-[16rem] h-[10rem]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute bottom-2 right-3 text-small">(Keep going ↓)</button>
    </section>
  );
};

export default MobileHorizontalSection;
