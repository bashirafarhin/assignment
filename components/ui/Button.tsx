"use client";

import React from "react";
import { clsx } from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  onClick,
}) => {
  const baseStyles = "px-2 py-1 cursor-pointer border border-bg rounded-full w-fit mx-auto";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(baseStyles, className, disabled && "opacity-50 cursor-not-allowed")}
    >{children}
    </button>
  );
};

export default Button;
