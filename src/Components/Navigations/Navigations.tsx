import Link from "next/link";
import React from "react";
import Icon from "../Icon/Icon";
import { usePathname } from "next/navigation";

type NavigationType = {
  title: string;
  icon: string;
  color: string;
  url?: string;
  onClick?: () => void;
};

type NavigationProps = {
  isOpen?: boolean;
  items: NavigationType[];
};

function Navigations({ items, isOpen }: NavigationProps) {
  const pathName = usePathname();

  return (
    <>
      {items.map((item) =>
        item.url ? (
          <Link
            key={"5"}
            href={item.url}
            className={`w-full text-n-4 p-3 hover:text-white  ${
              pathName === item.url
                ? "text-white font-medium bg-n-6  rounded"
                : ""
            } flex justify-start  gap-5`}
          >
            <Icon name={item.icon} size={60} className={item.color} />
            {isOpen && item.title}
          </Link>
        ) : (
          <button
            key={"5"}
            onClick={item.onClick}
            className={`w-full text-n-4 p-3 hover:text-white  ${
              pathName === item.url ? "text-white font-medium" : ""
            } flex justify-start gap-5`}
          >
            <Icon name={item.icon} size={60} className={item.color} />
            {isOpen && item.title}
          </button>
        )
      )}
    </>
  );
}

export default Navigations;
