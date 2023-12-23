import React from 'react';

interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type: "button" | "submit" | "reset";
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ className, style, type, handleClick, label }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      style={style}
      type={type}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
