import Image from "next/image";
import CardWrapper from "./cardWrapper";

const Card3 = () => {
  return (
    <CardWrapper>
      <div className="filter-custom-drop-shadow flex w-60 flex-col rounded-lg h-72 items-center justify-center bg-white py-5">
        <Image
          src="/card-image-1.png"
          width={120}
          height={120}
          alt=""
          
          className="mb-5 rounded-full object-cover object-center"
        />
        <h3 className="mb-2 text-[12px]">Advertising</h3>
        <p className="mb-5 px-[0.75rem] text-center text-[8px] leading-[0.75rem]">
          In today’s net-savvy world it has become common for any business to
          have a website which they use mostly
        </p>
        <button className="w-[12rem] rounded-xl bg-green text-[0.9375rem] font-bold leading-[1.625rem] text-white shadow-custom">
          Install
        </button>
      </div>
    </CardWrapper>
  );
};

export default Card3;
