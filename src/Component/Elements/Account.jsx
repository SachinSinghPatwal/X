import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Account({ screenStatus }) {
  const [hoverStatus, steHoverStatus] = useState(false);
  return (
    <>
      <div
        className="mb-[1rem]
      "
      >
        <button
          className="bg-[#303235] rounded-full aspect-square 
          w-[43px] mb-[.5rem] relative
          
          before:content-['Account'] before:h-[17.9px] 
          before:p-[2px] before:w-fit before:text-white before:absolute 
          before:text-[14px] before:font-['Gill Sans sans-serif']
          before:left-[-.8rem] before:tracking-[1px] before:top-[-2rem]
          before:border- before:opacity-0 before:transition-opacity 
          hover:before:opacity-100  before:border-none
          
          
          
          xl:w-fit 
          xl:bg-transparent
          "
        >
          <FontAwesomeIcon
            onMouseEnter={() => {
              steHoverStatus(true);
            }}
            onMouseLeave={() => {
              steHoverStatus(false);
            }}
            icon={faUserNinja}
            size="2xl"
            style={{
              color: `${hoverStatus ? "#7b3bd4" : "#f7f5f5"}`,
              transition: "color .2s linear",
            }}
          />
        </button>
        {screenStatus ? (
          <span className="text-white ml-[1.5rem]">HI User</span>
        ) : null}
      </div>
    </>
  );
}

export default Account;
