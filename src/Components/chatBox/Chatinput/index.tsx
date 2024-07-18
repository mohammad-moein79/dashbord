"use client";
import AddFile from "@/Components/AddFile/AddFile";
import Icon from "@/Components/Icon/Icon";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
function Chatinput({
  massage,
  setMassage,
}: {
  massage: string;
  setMassage: React.Dispatch<React.SetStateAction<string>>;
}) {
  const stylesButton = "group w-11  h-10";
  return (
    <div className=" w-[90%] md:w-full p-2  left-[50%] translate-x-[-50%]  absolute  bottom-2  md:bottom-3  border-2 dark:border-n-5 rounded-md   border-[#00000030] bg-[#fff] dark:bg-n-6 md:rounded-xl ">
      <div className="w-full h-full  flex items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action="#"
          className="w-full h-full  flex items-end justify-around  gap-1 "
        >
          <div className="h-full flex items-end">
            <AddFile />
          </div>
          <TextareaAutosize
            className="w-full h-10 flex py-2 resize-none outline-none  bg-transparent"
            placeholder="Ask Brainwave anything"
            autoFocus
            value={massage}
            maxRows={6}
            onChange={(e) => {
              setMassage(e.target.value);
            }}
          ></TextareaAutosize>{" "}
          {massage === "" ? (
            <button className={`${stylesButton}`} type="button">
              <Icon
                className="fill-n-4 transition-colors group-hover:fill-primary-1"
                name="recording"
              />
            </button>
          ) : (
            <button
              type="submit"
              className={`${stylesButton}  bg-primary-1 rounded-xl transition-colors hover:bg-primary-1/90`}
            >
              <Icon className="fill-n-1" name="arrow-up" />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Chatinput;
