import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import Icon from "../Icon/Icon";
import CloseBtn from "../CloseBtn/CloseBtn";

type ModalProps = {
  className?: string;
  classWrap?: string;
  classOverlay?: string;
  classButtonClose?: string;
  isOpen: boolean;
  onclose: () => void;
  initialFocus?: any;
  children: React.ReactNode;
  video?: boolean;
  haveHeader?: boolean;
  title?: string;
};

const Modal = ({
  className,
  classWrap,
  classOverlay,
  classButtonClose,
  isOpen,
  onclose,
  initialFocus,
  haveHeader,
  title,
  children,
  video,
}: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      initialFocus={initialFocus}
      className={`fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex example md:p-6 overflow-auto scroll-smooth md:px-4 ${className}`}
      onClose={onclose}
    >
      <div
        className={twMerge(
          "fixed inset-0 w-screen overflow-y-auto p-4",
          classOverlay
        )}
      >
        <div className="flex min-h-full items-center justify-center">
          <Dialog.Panel
            className={twMerge(
              `relative z-10 w-full  flex flex-col gap-6 md:w-[35%] m-auto p-8  bg-n-1 rounded-3xl  dark:bg-n-7 ${
                video &&
                "static max-w-[64rem] aspect-video rounded-[1.25rem] bg-n-7 overflow-hidden shadow-[0_2.5rem_8rem_rgba(0,0,0,0.5)]"
              }`,
              classWrap
            )}
          >
            {haveHeader && (
              <div className="flex w-full justify-between items-center ">
                <h1 className="h3"> {title}</h1>
                <CloseBtn onclose={onclose} />
              </div>
            )}
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
