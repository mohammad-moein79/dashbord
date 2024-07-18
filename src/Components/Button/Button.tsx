import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  type?: "button" | "submit" | "reset";
  className?: string;
  text: string;
  onClick: () => void;
};

const Button = ({ onClick, className, type, text }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={twMerge(
        "bg-black dark:bg-white text-[17px] font-medium text-white dark:text-black py-1  px-4 rounded-xl",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
