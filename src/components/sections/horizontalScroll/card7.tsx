import React from 'react';
import PreviewImageBox from '@/components/common/PreviewImageBox';
import CardWrapper from './cardWrapper';
import commityMembers from '../../../../assets/commity-members-terminal.png';

const Card7 = () => {
  return (
    <CardWrapper>
      <PreviewImageBox
        src={commityMembers}
        alt="Commity members terminal"
        sizes="(min-width:800px) 384px, (min-width:520px) 352px, 288px"
        containerClassName="relative w-[18rem] h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[24rem] lg:h-[15rem]"
      />
    </CardWrapper>
  );
};

export default Card7;
