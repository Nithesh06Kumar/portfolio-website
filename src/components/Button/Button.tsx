import React from "react";

interface ButtonProps {
  className?: string;
  onClick: () => void;
  children: string | any;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-black text-white p-4 rounded-full dark:bg-themecolor-white dark:text-themecolor-black ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
