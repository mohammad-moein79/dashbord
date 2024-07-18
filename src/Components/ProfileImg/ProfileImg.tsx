import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

function ProfileImg({
  src,
  isOnline,
  hightImg,
  withImg,
  bgD,
  className,
  showOnline,
}: {
  className?: string;
  showOnline?: boolean;
  bgD?: boolean;
  withImg?: number | number;
  hightImg?: number | number;
  src: string;
  isOnline?: boolean;
}) {
  return (
    <div className="relative">
      <Image
        src={src}
        width={withImg || 48}
        height={hightImg || 48}
        className={twMerge("rounded-full", className)}
        alt="profile"
      />
      {showOnline && (
        <div
          className={twMerge(
            "absolute bottom-0 right-0 bg-white dark:bg-n-6 flex justify-center items-center  p-1 rounded-full",
            bgD ? "bg-n-6" : "bg-white dark:bg-n-6"
          )}
        >
          {isOnline ? (
            <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileImg;
