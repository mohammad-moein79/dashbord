import Icon from "@/Components/Icon/Icon";
import React from "react";

function ContentModalUpload() {
  return (
    <div className="relative p-3 bg-primary-1 rounded-[1.25rem]">
      <input className="absolute inset-0 opacity-0" type="file" />
      <div className="px-6 py-14 border-2 border-dashed border-n-1 rounded-xl text-center text-n-1">
        <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 bg-n-1 rounded-full">
          <Icon name="upload" />
        </div>
        <div className="h5">Upload to Brainwave</div>
        <div className="base2">You can add prompts after uploading.</div>
      </div>
    </div>
  );
}

export default ContentModalUpload;
