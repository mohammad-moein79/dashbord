"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Topbar from "../TopBar/Topbar";
import { usePathname } from "next/navigation";
import LeftSideBar from "../LeftSideBar";
import { useTheme } from "next-themes";
import RightSideBar from "@/Components/RightSideBar/RightSideBar";
import { ClassNames } from "@emotion/react";
import { Toaster } from "react-hot-toast";

function Layout({
  className,
  hiddenLeftBar,
  children,
}: {
  className?: string;
  hiddenLeftBar: true | false;
  children: ReactNode;
}) {
  const reactResponsive = useMediaQuery({ query: "(max-width: 624px)" });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [ShowSideBar, setShowSideBar] = useState<boolean>(true);
  const [openLeftSideBar, setOpenLeftSideBar] = useState<boolean>(true);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setIsMobile(reactResponsive);
    setShowSideBar(!reactResponsive);
    setOpenLeftSideBar(!reactResponsive);
  }, [reactResponsive]);

  const path = usePathname();

  return (
    <>
      <div
        className={`flex bg-n-7 ${
          isMobile && ShowSideBar ? "overflow-hidden" : ""
        } h-full`}
      >
        <LeftSideBar
          open={openLeftSideBar}
          show={ShowSideBar}
          setOpen={setOpenLeftSideBar}
        />
        <div
          dir={hiddenLeftBar ? "ltr" : "rtl"}
          className={`min-h-screen   ${
            theme === "dark" ? "dark" : ""
          } w-full flex flex-col md:flex-row   md:px-2 md:py-5 `}
        >
          {!hiddenLeftBar && (
            <RightSideBar
              setShow={() => {
                setShowSideBar((preve) => !preve);
              }}
              isMobile={isMobile}
              show={ShowSideBar}
            />
          )}

          <div
            dir="ltr"
            className={`w-full h-full ${
              isMobile && ShowSideBar && "hidden"
            }  dark:bg-n-6 overflow-hidden trasntion bg-[#ffff] ${className}`}
          >
            {children}
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </>
  );
}

export default Layout;
