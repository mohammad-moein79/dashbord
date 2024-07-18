"use client";
import Icon from "@/Components/Icon/Icon";
import Image from "next/image";
import { useTheme } from "@emotion/react";

type UpdatesItems = {
  id: string;
  title: string;
  date: string;
  icon: string;
  imageLight: string;
  imageDark: string;
  content: string;
};

type UpdatesProps = {
  items: UpdatesItems[];
};

const Updates = ({ items }: UpdatesProps) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <>
      <div className="w-full">
        {items.map((item) => (
          <div
            className="flex w-full  flex-col lg:justify-between py-16 border-t border-n-3 lg:flex-row md:py-8 dark:border-n-5"
            key={item.id}
          >
            <div className=" pr-20  2xl:pr-12  lg:mb-10 lg:pr-0">
              <div className="flex justify-center items-center w-10 h-10 mb-5 rounded-full bg-accent-1/20">
                <Icon className="fill-accent-1" name={item.icon} />
              </div>
              <div className="mb-5 h6">{item.title}</div>
              <div className="base1 font-semibold text-n-4/50">{item.date}</div>
            </div>
            <div className="flex flex-col w-full items-end  ">
              <div>
                <Image
                  className="w-[500px]  rounded-3xl md:rounded-xl"
                  src={isDarkMode ? item.imageDark : item.imageLight}
                  width={400}
                  height={800}
                  alt=""
                />
              </div>
              <div className="mt-8 base1 text-n-4 max-w-[500px]">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn-stroke-light">Load more</button>
      </div>
    </>
  );
};

export default Updates;
