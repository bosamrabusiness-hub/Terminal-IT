"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const ToggleButton = ({
  onToggle,
  className,
}: {
  className?: string;
  onToggle?: (toggled: boolean) => void;
}) => {
  const [toggled, setToggled] = useState(true);

  const handleToggle = () => {
    const newState = !toggled;
    setToggled(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className={twMerge("flex items-center gap-1", className)}>
      <button
        className="relative h-[0.63rem] w-[1.03rem] cursor-pointer rounded-full duration-200"
        onClick={handleToggle}
        style={{
          backgroundColor: toggled ? "#24252d50" : "#fb3a5d",
        }}
      >
        <span
          className={`absolute left-0 top-1/2 inline-block -translate-y-1/2 transform rounded-full bg-white shadow-lg transition-all duration-200 ${toggled ? "size-[0.4rem] translate-x-[20%]" : "size-[0.5rem] translate-x-[90%]"} `}
        />
      </button>
      <span>All the day</span>
    </div>
  );
};

export default ToggleButton;
