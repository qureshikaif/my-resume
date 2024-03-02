import React from "react";

type DividerProps = {
  className?: string;
};

const Divider = ({ className }: DividerProps) => {
  return <div className={`bg-black w-full h-1 my-2 ${className}`}></div>;
};

export default Divider;
