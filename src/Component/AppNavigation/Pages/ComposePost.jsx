import React from "react";
import { Message } from "../..";

function ComposePost() {
  return (
    <div
      className="text-white absolute top-[20vh] left-[3vw] h-[301px] 
      xl:left-[46.6%] 
    md:w-[550px] sm:w-[76vw] w-[80vw]"
    >
      <div className="absolute w-full bottom-[1px]">
        <Message />
      </div>
    </div>
  );
}

export default ComposePost;
