import Link from "next/link";
import React from "react";
import ProfileImg from "../ProfileImg/ProfileImg";

function Profile({ open }: { open: boolean | undefined }) {
  return (
    <div
      className={`flex flex-col  items-start justify-between w-full gap-4 ${
        open ? "bg-n-6  p-3" : ""
      } rounded`}
    >
      <div className="flex gap-2 w-full  justify-center items-start">
        <ProfileImg src="/images/avatar.jpg" isOnline={true} bgD={true} />
        {open && (
          <div className="flex flex-col">
            <h2 className="text-[18px] text-white font-medium ">
              moein Hoseini
            </h2>
            <p className="text-[14px] text-n-4">moein.devht@gmail.com</p>
          </div>
        )}
      </div>
      {open && (
        <Link
          className="w-full p-3 bg-n-5 hover:bg-n-7 text-white rounded-full text-center "
          href={"pricing"}
        >
          Go To Pro
        </Link>
      )}
    </div>
  );
}

export default Profile;
