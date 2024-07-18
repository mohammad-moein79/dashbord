import Image from "next/image";
import React from "react";

function ProfileImg({
  src,
  isOnline,
  open,
}: {
  open?: boolean;
  src: string;
  isOnline?: boolean;
}) {
  return (
    <div className="relative">
      <Image
        src={src}
        width={open ? 60 : 50}
        height={open ? 60 : 50}
        className="rounded-full"
        alt="profile"
      />
      <div className="absolute bottom-0 right-0 bg-white dark:bg-n-6 flex justify-center items-center  p-1 rounded-full">
        {isOnline ? (
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
        ) : (
          <div className="bg-gray-600-500 w-3 h-3 rounded-full"></div>
        )}
      </div>
    </div>
  );
}

export default ProfileImg;
