import React from "react";
import Icon from "../Icon/Icon";
import TopChat from "./TopChat";
import Menu from "./Menu/Menu";
import { navigation } from "@/Constans/navigation";

function ChatBox() {
  return (
    <div className="w-full h-full   flex flex-col justify-center">
      <div></div>
      <div className="flex md:w-[80%]  mx-auto justify-center flex-col ">
        <div className="w-full example max-h-[82vh] p-4 h-auto w overflow-y-auto exlample ">
          <h1 className="text-[40px] text-center font-bold text-n-7 dark:text-white">
            Unlock the power of AI
          </h1>
          <p className="text-[20px] text-center dark:text-neutral-400 text-neutral-700">
            Chat with the smartest AI - Experience the power of AI with us
          </p>
          <Menu
            className=" w-full mt-8 p-3 flex flex-col items-center justify-center mx-auto"
            items={navigation}
          />
        </div>
        <div className=" p-1 w-full h-14  border-2 dark:border-n-5   border-[#00000030] rounded-xl "></div>
      </div>
    </div>
  );
}

export default ChatBox;
