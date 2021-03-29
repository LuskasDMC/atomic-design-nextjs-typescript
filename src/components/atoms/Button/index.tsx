import React, { memo } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = ({ children, className, ...rest }) => (
  <button
    className={
      "rounded-sm focus:outline-none bg-blue-400 h-8 w-full flex items-center justify-center disabled:opacity-50 " +
      className
    }
    {...rest}
  >
    <span className="font-semibold text-white text-sm">{children}</span>
  </button>
);

export default memo(Button);
