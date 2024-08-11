"use client";

import React from "react";

const LiftUpButton = ({
  text,
  onClick,
}: {
  text: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button className="p-[3px] relative" onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {text}
      </div>
    </button>
  );
};
export default LiftUpButton;
