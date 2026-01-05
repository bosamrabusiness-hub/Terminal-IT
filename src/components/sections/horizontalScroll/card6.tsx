import React from 'react';
import PreviewImageBox from '@/components/common/PreviewImageBox';
import CardWrapper from './cardWrapper';
import commity from '../../../../assets/commity-co-terminal.png';

const Card6 = () => {
  return (
    <CardWrapper>
      <PreviewImageBox
        src={commity}
        alt="Commity.co terminal"
        sizes="(min-width:800px) 384px, (min-width:520px) 352px, 288px"
        containerClassName="relative w-[18rem] h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[24rem] lg:h-[15rem]"
      />
    </CardWrapper>
  );
};

export default Card6;
