import React from "react";
import { twMerge } from "tailwind-merge";

function Title({ className, title }: { className: string; title: string }) {
  return (
    <h1
      className={twMerge(
        "text-[25px]  font-bold text-n-7 dark:text-white",
        className
      )}
    >
      {title}
    </h1>
  );
}

export default Title;
