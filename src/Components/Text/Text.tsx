import React from "react";
import { twMerge } from "tailwind-merge";

function Text({ className, text }: { className: string; text: string }) {
  return (
    <h1
      className={twMerge(
        " dark:text-neutral-400 text-neutral-700 text-[25px]",
        className
      )}
    >
      {text}
    </h1>
  );
}

export default Text;
