import React from "react";

export const Button = ({ children, disabled, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-[44px] text-center rounded-[6px] cursor-pointer transition-all flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};
