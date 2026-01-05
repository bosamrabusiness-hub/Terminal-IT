import React from 'react';
import PreviewImageBox from '@/components/common/PreviewImageBox';
import CardWrapper from './cardWrapper';
import getfit from '../../../../assets/Getfit-terminal.png';

const Card5 = () => {
  return (
    <CardWrapper>
      <PreviewImageBox
        src={getfit}
        alt="Getfit terminal"
        sizes="(min-width:800px) 384px, (min-width:520px) 352px, 288px"
        containerClassName="relative w-[18rem] h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[24rem] lg:h-[15rem]"
      />
    </CardWrapper>
  );
};

export default Card5;
