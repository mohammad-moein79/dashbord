"use client";
import { useState } from "react";
import Title from "../Title/Title";
import Text from "../Text/Text";
import { twMerge } from "tailwind-merge";

type FaqItemProps = {
  item: any;
};

const FaqItem = ({ item }: FaqItemProps) => {
  const [open, setOpen] = useState(item.defaultOpen || false);

  return (
    <div
      className="border-t group mt-2 relative border-n-3 cursor-pointer select-none p-4 px-12 dark:border-n-5/60"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div
        className={twMerge(
          "flex absolute left-0  top-6 flex-col items-start gap-1",
          open && "gap-0"
        )}
      >
        <span
          className={`w-6 h-[4px]  bg-n-5 rounded-full transition-all dark:bg-n-4 ${
            open && "translate-y-[0px] rotate-90"
          }`}
        ></span>
        <span
          className={`w-6 h-[4px]  bg-n-5 rounded-full transition-all dark:bg-n-4 ${
            open && "-translate-y-[5px] -rotate-0"
          }`}
        ></span>
      </div>
      <div className="flex   relative flex-col">
        <div className="">
          <Title
            title={item.title}
            className="text-[19px] group-hover:text-blue-500 font-medium"
          />
        </div>
        <div className={twMerge(" overflow-hidden  ", !open && "h-0")}>
          <Text text={item.content} className="text-[16px] mt-3" />
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
