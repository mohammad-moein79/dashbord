import Image from "next/image";
import React from "react";

function Logo() {
  return <Image alt="logo" width={240} height={80} src={"/images/logo.svg"} />;
}

export default Logo;
