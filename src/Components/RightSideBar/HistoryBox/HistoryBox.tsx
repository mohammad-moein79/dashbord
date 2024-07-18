import ProfileImg from "@/Components/ProfileImg/ProfileImg";
import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import React, { use, useState } from "react";
import Users from "../Users/Users";
import Icon from "@/Components/Icon/Icon";
import { twMerge } from "tailwind-merge";
type chatHistoryObj = {
  id: string;
  title: string;
  content: string;
  users: string[];
  time: string;
  image?: string;
  url: string;
};
function HistoryBox({
  content,
  time,
  title,
  url,
  users,
  image,
}: chatHistoryObj) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={twMerge(
        "w-full flex gap-4 p-2 py-4 select-none rounded-[10px]",
        active && "bg-n-4/10"
      )}
    >
      <div
        onClick={() => setActive(!active)}
        className={twMerge(
          "border border-n-4/50 min-w-6 flex items-center justify-center cursor-pointer max-h-6 rounded-md overflow-hidden ",
          active && "bg-blue-500"
        )}
      >
        <Icon
          name={"check"}
          className={twMerge(
            "fill-white opacity-0 scale-75",
            active && "opacity-100"
          )}
        ></Icon>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Title title={title} className="text-[17px]" />
          <Text
            text={content.slice(0, 30) + "..."}
            className="overflow-ellipsis overflow-hidden  text-[14px]"
          />
        </div>
        {image && (
          <div>
            <img className="rounded-xl w-full" src={image} alt="some thing" />
          </div>
        )}
        <div className="relative flex">
          <Users items={users} />
        </div>
      </div>
    </div>
  );
}

export default HistoryBox;
