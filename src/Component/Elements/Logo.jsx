import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
function Logo({ classname = "" }) {
  const [hoverStatus, steHoverStatus] = useState(false);
  return (
    <>
      <div
        className={`${classname} before:content-['Yapper'] before:h-[17.9px] 
            before:p-[2px] before:w-fit before:text-gray-200 before:absolute 
            before:text-[10px] before:font-['Gill Sans sans-serif']
            before:left-[-2px] before:mt-[2rem] before:tracking-[1px]
            before:border- before:opacity-0 before:transition-opacity hover:before:opacity-100 before:delay-[.6s] before:duration-[.1s] before:ease-in-out relative before:border-none `}
      >
        <FontAwesomeIcon
          onMouseEnter={() => {
            steHoverStatus(true);
          }}
          onMouseLeave={() => {
            steHoverStatus(false);
          }}
          icon={faNfcSymbol}
          style={{
            color: `${hoverStatus ? "#7b3bd4" : "#f7f5f5"}`,
            transition: "color .2s linear",
            cursor: "pointer",
          }}
          className="h-[2.5rem]"
        />
      </div>
    </>
  );
}

export default Logo;
