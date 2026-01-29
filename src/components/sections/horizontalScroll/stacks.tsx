import { motion, MotionValue } from 'framer-motion';
import PreviewImageBox from '@/components/common/PreviewImageBox';
import Card8 from './card8';
import { RefObject } from 'react';

import sonbola from '../../../../assets/Sonbola-dash-terminal.png';
import sonbolaLesson from '../../../../assets/sonbola-lesson-terminal.png';
import sonbolaAdmin from '../../../../assets/sonbola-admin-terminal.png';
import mo5talef from '../../../../assets/mo5talef-terminal.png';
import getfit from '../../../../assets/Getfit-terminal.png';
import commity from '../../../../assets/commity-co-terminal.png';
import commityMembers from '../../../../assets/commity-members-terminal.png';

const showcaseItems = [
  { src: sonbola, alt: 'Sonbola Dashboard', url: 'sonbola-edu.com' },
  { src: sonbolaLesson, alt: 'Sonbola Lesson', url: 'sonbola-edu.com/lesson' },
  { src: sonbolaAdmin, alt: 'Sonbola Admin', url: 'sonbola-edu.com/admin' },
  { src: mo5talef, alt: 'Mo5talef', url: 'mo5talef.app' },
  { src: getfit, alt: 'GetFit', url: 'getfit.app' },
  { src: commity, alt: 'Commity.co', url: 'commity.co' },
  { src: commityMembers, alt: 'Commity Members', url: 'commity.co/members' },
];

const Stacks = ({
  x,
  progress,
  ref,
}: {
  x: MotionValue;
  progress: MotionValue<number>;
  ref: RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="h-svh mt-[20px] md:mt-[30px] lg:mt-[40px]">
      <motion.div
        style={{ x, willChange: 'transform' }}
        ref={ref}
        className="flex w-auto min-w-max gap-6 overflow-hidden"
      >
        {showcaseItems.map((item, i) => (
          <div key={i} className="flex-shrink-0 flex-grow-0">
            <div className="group rounded-xl overflow-hidden border border-white/[0.08] bg-hero-dark shadow-xl hover:shadow-2xl hover:border-white/[0.15] transition-all duration-500">
              {/* Browser mockup header */}
              <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.02]">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="rounded-md bg-white/[0.05] border border-white/[0.06] px-3 py-0.5 font-jetbrains-mono text-[9px] text-white/25 tracking-wider">
                    {item.url}
                  </div>
                </div>
              </div>
              {/* Image content */}
              <PreviewImageBox
                src={item.src}
                alt={item.alt}
                sizes="(min-width:800px) 480px, (min-width:520px) 400px, 320px"
                containerClassName="relative w-[20rem] h-[13rem] md:w-[26rem] md:h-[16rem] lg:w-[30rem] lg:h-[18.5rem]"
              />
            </div>
          </div>
        ))}
        <Card8 progress={progress} />
      </motion.div>
    </div>
  );
};

export default Stacks;
