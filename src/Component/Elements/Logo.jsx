import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
function Logo({ classname = "" }) {
  const [hoverStatus, steHoverStatus] = useState(false);
  return (
    <>
      <div className={`${classname}`}>
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
