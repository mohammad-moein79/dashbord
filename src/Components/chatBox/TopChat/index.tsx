import React, { useState } from "react";

function TopChat({ title }: { title?: string }) {
  return (
    <div
      className={`w-full flex items-center justify-around rounded  bg-white  dark:bg-n-6  md:rounded-none border-b border-slate-300 dark:border-stone-700  h-[4.3rem]`}
    >
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default TopChat;
