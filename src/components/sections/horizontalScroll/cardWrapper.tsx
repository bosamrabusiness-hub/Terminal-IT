import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const CardWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex size-[22.6rem] flex-shrink-0 flex-grow-0 items-center justify-center border-2 bg-[transparent]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
