import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import useDebounce from "@/Utils/inputsMethod";

function Search() {
  const [value, setValue] = useDebounce(() => {
    console.log(`feching => and the content is ${value}`);
  }, 1300);

  const Coustom = [{}];

  return (
    <div className="flex flex-col w-full gap-5 ">
      <form className=" relative flex items-center w-full rounded  p-2">
        <input
          type="text"
          className="w-full outline-none p-3 bg-transparent text-[17px] overflow-ellipsis"
          placeholder="Search..."
          value={value}
          autoFocus={true}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit" className="absolute bg-white dark:bg-n-6 right-3">
          <Icon
            name={"search"}
            className="fill-n-5   dark:fill-white"
            size={50}
          />
        </button>
      </form>
      <div className="w-full">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Search;
