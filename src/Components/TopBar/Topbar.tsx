import React from "react";

function Topbar({
  setShowSideBar,
  isShowSideBar,
}: {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  isShowSideBar: boolean;
}) {
  return (
    <div className="p-2 bg-blue-400 w-full ">
      <div
        className=""
        onClick={() => {
          setShowSideBar(!isShowSideBar);
        }}
      >
        {isShowSideBar ? "close" : "open"}
      </div>
    </div>
  );
}

export default Topbar;
