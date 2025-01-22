import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Account({ screenStatus }) {
  const [hoverStatus, steHoverStatus] = useState(false);
  return (
    <>
      <button
        className="bg-[#303235] rounded-full aspect-square mr-[2.5vw] relative
          w-[43px] mb-[.5rem] xl:w-fit xl:mb-0 xl:mr-0 xl:bg-transparent
          before:content-['Account'] before:h-[17.9px] 
            before:p-[2px] before:w-fit before:text-white before:absolute 
            before:text-[14px] before:font-['Gill Sans sans-serif']
            before:left-[-.8rem] before:tracking-[1px] before:top-[-2rem]
            before:border- before:opacity-0 before:transition-opacity hover:before:opacity-100 relative before:border-none
            xl:ml-[1rem]
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
        <span className="text-white xl:mr-[60%]">HI User</span>
      ) : null}
    </>
  );
}

export default Account;
