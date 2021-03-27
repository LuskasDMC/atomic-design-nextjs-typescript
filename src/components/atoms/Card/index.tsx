import React from "react";

interface ICardProps {
  className?: string;
}

const Card: React.FC<ICardProps> = ({ children, className }) => {
  return (
    <div className={"bg-white border border-gray-500 " + className}>
      {children}
    </div>
  );
};

export default Card;
