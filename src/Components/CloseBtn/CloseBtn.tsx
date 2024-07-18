import React from "react";
import Icon from "../Icon/Icon";

function CloseBtn({ onclose }: { onclose: () => void }) {
  return (
    <div
      onClick={onclose}
      className="bg-slate-500/15 cursor-pointer dark:bg-neutral-600/30 w-8 h-8 flex justify-center items-center rounded-full "
    >
      <Icon name={"close"} className="fill-n-5 dark:fill-white "></Icon>
    </div>
  );
}

export default CloseBtn;
