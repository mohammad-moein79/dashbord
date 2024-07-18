"use client";
import React, { ReactNode, useEffect, useState } from "react";
import TopChat from "./TopChat";
import MediaQuery from "react-responsive";
import { usePathname } from "next/navigation";
import { textPathEdit } from "@/Utils/textPath";
import Chatinput from "./Chatinput";
import Topbar from "../TopBar/Topbar";

function ChatBox({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [massage, setMassage] = useState<string>("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const path = usePathname();
  console.log(path, "path");
  return (
    <div className="w-full h-full relative items-center flex flex-col justify-between ">
      {mounted ? (
        <MediaQuery minWidth={800}>
          {textPathEdit(path) && <TopChat />}
        </MediaQuery>
      ) : (
        ""
      )}
      <div className="flex md:mt-2 absolute top-0 bottom-0 md:top-16 md:w-[90%] p-0 md:pb-2  mx-auto justify-center flex-col ">
        <div className="w-full mb-16  example flex flex-col items-center h-auto w overflow-y-auto exlample ">
          {children}
        </div>
        <Chatinput massage={massage} setMassage={setMassage} />
      </div>
    </div>
  );
}

export default ChatBox;
