"use client";
import React from "react";
import Icon from "../Icon/Icon";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import CloseBtn from "../CloseBtn/CloseBtn";

type Props = { className?: string };

function Heading({ className }: Props) {
  const router = useRouter();

  const goBalck = () => {
    router.push("/");
  };
  return (
    <div
      className={twMerge(
        " w-full flex-col items-end flex justify-center p-2   md:rounded-t-[1.25rem] md:rounded-none ",
        className
      )}
    >
      <CloseBtn onclose={goBalck} />
    </div>
  );
}

export default Heading;
