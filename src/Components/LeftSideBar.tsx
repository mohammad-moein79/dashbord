import React, { useEffect, useState } from "react";
import Logo from "./Logo/Logo";
import Icon from "./Icon/Icon";
import Navigations from "./Navigations/Navigations";
import Profile from "./Profile/Profile";
import ToggleThem from "./ToggleThem/ToggleThem";
import Search from "./Search/Search";
import ModalC from "./Modals/Modal";

function LeftSideBar({
  open,
  setOpen,
  show,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}) {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [visibleSettings, setVisibleSettings] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", handleWindowKeyDown);
    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
    };
  }, []);

  const handleWindowKeyDown = (event: any) => {
    if (event.key === "g" && event.key === "f") {
      event.preventDefault();
      setVisibleSearch(true);
    }
  };

  const navigation = [
    {
      title: "Chats",
      icon: "chat",
      color: "fill-accent-2",
      url: "/",
    },
    {
      title: "Search",
      icon: "search",
      color: "fill-primary-2",
      onClick: () => setVisibleSearch(true),
    },
    {
      title: "Manage subscription",
      icon: "card",
      color: "fill-accent-4",
      url: "/pricing",
    },
    {
      title: "Updates & FAQ",
      icon: "barcode",
      color: "fill-accent-1",
      url: "/updates-and-faq",
    },
    {
      title: "Settings",
      icon: "settings",
      color: "fill-accent-3",
      onClick: () => setVisibleSettings(true),
    },
  ];
  return (
    <div
      className={`${show ? "" : "hidden"}  ${open ? "w-[410px]" : "w-[95px]"}`}
    >
      <div
        className={`fixed h-[100%] bg-n-7  left-0 top-0 p-4 flex flex-col justify-between`}
      >
        <div className="flex  items-center flex-col gap-8">
          <div className="flex items-center gap-5 h-16 justify-between">
            {open && <Logo />}
            <div className="cursor-pointer" onClick={() => setOpen(!open)}>
              <Icon
                name={open ? "toggle-on" : "toggle-off"}
                className="fill-n-4"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <Navigations items={navigation} isOpen={open} />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full gap-5">
          <Profile open={open} />
          <ToggleThem open={open} />
        </div>
      </div>
      <ModalC open={visibleSearch} handleClose={() => setVisibleSearch(false)}>
        <Search />
      </ModalC>
    </div>
  );
}

export default LeftSideBar;