"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import Burger from "../Bugger/Bugger";
import TopChat from "../chatBox/TopChat";
import { usePathname } from "next/navigation";
import { textPathEdit } from "@/Utils/textPath";
import ProfileImg from "../ProfileImg/ProfileImg";
import Button from "../Button/Button";
import { chatHistory } from "@/mock/chatHistory";
import HistoryBox from "./HistoryBox/HistoryBox";
import Title from "../Title/Title";
import { twMerge } from "tailwind-merge";
import ModalShareChat from "../ModalShareChat";

type chatHistoryObj = {
  id: string;
  title: string;
  content: string;
  users: string[];
  time: string;
  url: string;
  image?: string;
}[];

function RightSideBar({
  show,
  isMobile,
  setShow,
}: {
  show: boolean;
  isMobile: boolean;
  setShow: () => void;
}) {
  const [clean, setClean] = useState<boolean>(false);

  const [openShareModal, setOpenShareModal] = useState<boolean>(false);
  const [chatHistoryState, setChatHistoryState] =
    useState<chatHistoryObj>(chatHistory);
  const path = usePathname();

  const onClickonShareOpen = () => {
    setOpenShareModal(true);
  };
  const onClickonShareClose = () => {
    setOpenShareModal(false);
  };

  return (
    <div
      className={` ${isMobile ? "w-full " : "min-w-fit"}   ${
        show && "min-h-full "
      }  ${
        isMobile ? "" : "border-l border-slate-300 p-2 md:p-0 dark:border-n-5"
      } dark:bg-n-6  md:pl-0 relative bg-white md:bg-[#fffefefb] md:rounded-br-[18px] md:rounded-tr-[18px]`}
    >
      <div
        className={twMerge(
          " border-slate-300 gap-6 flex justify-start items-center px-5 dark:border-n-5 h-[4.3rem] ",
          show && "border-b"
        )}
      >
        <Burger
          visibleRightSidebar={show}
          onClick={() => {
            setShow();
          }}
        />
        {show && (
          <div className=" flex w-full gap-6 items-center ">
            <Button text="Share" className="btn" onClick={onClickonShareOpen} />
            <ProfileImg
              hightImg={45}
              withImg={45}
              src="/images/avatar.jpg"
              isOnline={true}
            />
            <Icon name={"notification"} className="fill-n-5  dark:fill-n-4 " />
          </div>
        )}
        {!show && isMobile && textPathEdit(path) && <TopChat />}
      </div>
      <div
        dir="ltr"
        className={` ${
          show ? "" : "hidden"
        } md:h-[80vh] h-[88.6vh] flex flex-col gap-4 overflow-auto px-4 py-2`}
      >
        <div className="mb-10 flex flex-col w-full gap-4">
          {chatHistoryState.map((item) => (
            <HistoryBox key={item.id} {...item} />
          ))}
        </div>
        <button className="btn-blue text-center absolute left-[50%] translate-x-[-50%]  w-[90%] rounded-xl text-white  bottom-6  md:bottom-3">
          <Icon name={"plus"} fill="white"></Icon>
          <Title
            title="add new chat"
            className="text-[18px] text-white font-medium"
          />
        </button>
      </div>
      <ModalShareChat onClose={onClickonShareClose} visible={openShareModal} />
    </div>
  );
}

export default RightSideBar;
