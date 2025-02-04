import React from "react";
import { Message } from "../..";

function ComposePost() {
  return (
    <div
      className="text-white absolute top-[20vh] left-[3vw]  bg-black h-[301px] 
      lg:left-[46.6%]
    w-[550px]"
    >
      <div className="absolute w-full bottom-[1px]">
        <Message />
      </div>
    </div>
  );
}

export default ComposePost;
