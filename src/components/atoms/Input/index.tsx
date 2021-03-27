import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInputProps> = ({ className, ...rest }) => {
  return (
    <input
      className={
        "placeholder-gray-400::placeholder focus:outline-none rounded-sm bg-gray-100 w-full border border-color-grey h-9 " +
        className
      }
      placeholder="Telefone, nome de usuário ou email"
      type="text"
      {...rest}
    />
  );
};

export default Input;