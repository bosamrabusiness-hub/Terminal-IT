// src/components/Card4.tsx
import PreviewImageBox from '@/components/common/PreviewImageBox';
import CardWrapper from './cardWrapper';
import mo5talef from '../../../../assets/mo5talef-terminal.png';

const Card4 = () => {
  return (
    <CardWrapper>
      <PreviewImageBox
        src={mo5talef}
        alt="Mo5talef terminal"
        sizes="(min-width:800px) 384px, (min-width:520px) 352px, 288px"
        containerClassName="relative w-[18rem] h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[24rem] lg:h-[15rem]"
      />
    </CardWrapper>
  );
};

export default Card4;
