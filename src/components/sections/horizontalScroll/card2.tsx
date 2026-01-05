import React from 'react';
import CardWrapper from './cardWrapper';
import PreviewImageBox from '@/components/common/PreviewImageBox';
import sonbolaLesson from '../../../../assets/sonbola-lesson-terminal.png';

const Card2 = () => (
  <CardWrapper>
    <PreviewImageBox
      src={sonbolaLesson}
      alt="Sonbola lesson"
      sizes="(min-width:800px) 384px, (min-width:520px) 352px, 288px"
      containerClassName="relative w-[18rem] h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[24rem] lg:h-[15rem]"
    />
  </CardWrapper>
);

export default Card2;
