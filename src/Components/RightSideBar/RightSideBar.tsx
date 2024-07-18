import React, { Dispatch, SetStateAction } from "react";
import Icon from "../Icon/Icon";
import Burger from "../Bugger/Bugger";

function RightSideBar({
  show,
  isMobile,
  setShow,
}: {
  show: boolean;
  isMobile: boolean;
  setShow: () => void;
}) {
  return (
    <div
      className={` ${isMobile ? "w-full " : "w-[40%]"}   ${
        show && "min-h-full "
      }  ${
        isMobile ? "" : "border-l border-slate-300 dark:border-n-5"
      } dark:bg-n-6  md:pl-0 bg-[#f1f1f1] md:rounded-br-[18px] md:rounded-tr-[18px]`}
    >
      <div className="border-b border-slate-300 gap-3 flex items-center px-5 dark:border-n-5 h-[4rem] ">
        <Burger
          visibleRightSidebar={show}
          onClick={() => {
            setShow();
          }}
        />
        {show && <div> hi </div>}
      </div>
      <div dir="ltr" className={` ${show ? "" : "hidden"} px-4 py-2`}>
        tcontent tium libero error porro rem eaque atque labore maiores. Ut
        necessitatibus explicabo dolorem aut, aliquam corporis sint. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Assumenda esse ipsam soluta
        qui molestiae, neque porro. Labore culpa cum ea voluptatem aliquam
        aliquid accusantium sit, maxime consequatur laudantium cumque natus.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aliquam
        error accusamus illum, minima saepe! Molestiae dicta aperiam magnam,
        expedita excepturi mollitia ipsa, at deleniti, consectetur debitis eum
        accusantium commodi?
      </div>
    </div>
  );
}

export default RightSideBar;
