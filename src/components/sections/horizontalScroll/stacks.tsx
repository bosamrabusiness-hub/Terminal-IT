import { motion, MotionValue } from 'framer-motion';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';
import Card6 from './card6';
import Card7 from './card7';
import Card8 from './card8';
import { RefObject } from 'react';

const Stacks = ({
  x,
  ref,
}: {
  x: MotionValue;
  ref: RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="h-svh mt-[20px] md:mt-[30px] lg:mt-[40px] ">
      <motion.div
        style={{ x, willChange: 'transform' }}
        ref={ref}
        className="flex w-auto min-w-max gap-2 overflow-hidden"
      >
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
        <Card7 />
        <Card8 />
      </motion.div>
    </div>
  );
};

export default Stacks;
