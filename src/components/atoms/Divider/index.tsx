import React from "react";

interface IDividerProps {
  text?: string;
  className?: string;
}

const Divider: React.FC<IDividerProps> = ({ text, className }) => (
  <div className={"flex justify-between	items-center w-full " + className}>
    <div
      style={{ height: 1, width: "inherit" }}
      className="w-max bg-gray-300"
    />
    <div className="px-3 text-gray-400 font-bold text-sm">{text}</div>
    <div
      style={{ height: 1, width: "inherit" }}
      className="w-max bg-gray-300"
    />
  </div>
);

export default Divider;
