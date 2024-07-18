import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import CloseBtn from "../CloseBtn/CloseBtn";
import Item from "./Item";
import Select from "../Select";

type list = {
  id: string;
  author: string;
  title: string;
  content: string;
  time: string;
  avatar: string;
  online: boolean;
  url: string;
};

type items = (
  | {
      id: string;
      title: string;
      date: string;
      list: list[];
    }
  | {
      id: string;
      title: string;
      list: list[];
      date?: undefined;
    }
)[];

const createdOptions = [
  {
    id: "0",
    title: "Video",
  },
  {
    id: "1",
    title: "Audio",
  },
  {
    id: "2",
    title: "Code",
  },
];

const dates = [
  {
    id: "0",
    title: "Today",
  },
  {
    id: "1",
    title: "Last week",
  },
  {
    id: "2",
    title: "Last 30 days",
  },
];

function Search({ onclose, items }: { items: items; onclose: () => void }) {
  const [value, setValue] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="flex flex-col items-end w-full gap-y-4 ">
      <form className=" relative    dark:border-n-5   border-[#00000030] w-full border-b">
        <div className="absolute left-4 top-[50%] translate-y-[-50%]">
          <div className="md:hidden">
            <CloseBtn onclose={onclose} />
          </div>
          <div className="hidden md:block">
            <button className="ml-1">
              <Icon name={"search"} className="dark:fill-n-2/50 scale-150" />
            </button>
          </div>
        </div>
        <input
          type="text"
          className="w-full h-full outline-none p-8 pl-16 bg-transparent text-[18px] overflow-ellipsis"
          placeholder="Search..."
          value={value}
          autoFocus={true}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
      <div className="w-full px-8 pb-10">
        <div className="w-full flex flex-col md:flex-row gap-2 ">
          <div className="relative md:w-[10.31rem] mr-3 w-full md:mr-0">
            <button
              className="group absolute top-[50%] translate-y-[-50%] left-4 text-0"
              type="submit"
            >
              <Icon
                className="w-5 h-5 fill-n-7 transition-colors group-hover:fill-primary-1 dark:fill-n-1"
                name="search-1"
              />
            </button>
            <input
              className="w-full h-11 pl-11 pr-4 bg-transparent shadow-[inset_0_0_0_0.0625rem_#DADBDC] rounded-full outline-none caption1 text-n-7 transition-shadow focus:shadow-[inset_0_0_0_0.125rem_#0084FF] placeholder:text-n-4 dark:shadow-[inset_0_0_0_0.0625rem_#2A2E2F] dark:text-n-1 dark:focus:shadow-[inset_0_0_0_0.125rem_#0084FF]"
              type="text"
              name="search"
              placeholder="Search ..."
              value={searchTitle}
              onChange={(e: any) => setSearchTitle(e.target.value)}
            />
          </div>
          <Select
            className="md:w-[10.31rem] mr-3 w-full md:mr-0"
            classButton="h-11 rounded-full shadow-[inset_0_0_0_0.0625rem_#DADBDC] caption1 dark:shadow-[inset_0_0_0_0.0625rem_#2A2E2F] dark:bg-transparent"
            classOptions="min-w-full"
            classIcon="w-5 h-5 fill-n-4/50"
            classArrow="dark:fill-n-4"
            icon="user-check"
            placeholder="Created by"
            items={createdOptions}
            value={createdBy}
            onChange={setCreatedBy}
          />
          <Select
            className="md:w-[10.31rem] w-full md:mr-0"
            classButton="h-11 rounded-full shadow-[inset_0_0_0_0.0625rem_#DADBDC] caption1 dark:shadow-[inset_0_0_0_0.0625rem_#2A2E2F] dark:bg-transparent"
            classOptions="min-w-full"
            classIcon="w-5 h-5 fill-n-4/50"
            classArrow="dark:fill-n-4"
            icon="clock"
            placeholder="Date"
            items={dates}
            value={date}
            onChange={setDate}
          />
        </div>
        <div>
          {items.map((x) => (
            <Item item={x} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
