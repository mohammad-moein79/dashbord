"use client";
import { useTheme } from "next-themes";
import Icon from "../Icon/Icon";
import { useEffect, useState } from "react";

type ToggleThemeProps = {
  open?: boolean;
};

const ToggleTheme = ({ open }: ToggleThemeProps) => {
  const { setTheme, theme } = useTheme();

  const items = [
    {
      id: 1,
      title: "Dark",
      icon: "moon",
      active: theme == "dark",
      onClick: () => setTheme("dark"),
    },
    {
      id: 2,
      title: "Light",
      icon: "sun",
      active: theme == "light",
      onClick: () => setTheme("light"),
    },
  ];

  return (
    <div
      className={`${
        open &&
        `relative flex w-full p-1 bg-n-6 rounded-xl before:absolute before:left-1 before:top-1 before:bottom-1 before:w-[calc(50%-0.25rem)] before:bg-n-7 before:rounded-[0.625rem] before:transition-all ${
          theme === "light" && "before:translate-x-full"
        }`
      }`}
    >
      {items.map((item, index) => (
        <button
          className={`relative z-1 group flex justify-center items-center ${
            !open
              ? `flex w-full p-3 rounded-xl bg-n-6 md:mx-auto ${
                  item.active && "hidden"
                }`
              : `h-10 basis-1/2 base2 font-semibold text-n-4 transition-colors hover:text-n-1 ${
                  item.active && "text-n-1"
                }`
          }`}
          key={item.id}
          onClick={item.onClick}
        >
          <Icon
            className={`fill-n-4 transition-colors group-hover:fill-n-1 ${
              open && "mr-3"
            } ${item.active && open && "fill-n-1"}`}
            name={item.icon}
          />
          {open && item.title}
        </button>
      ))}
    </div>
  );
};

export default ToggleTheme;
