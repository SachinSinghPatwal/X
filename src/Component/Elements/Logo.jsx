import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
function Logo({ classname = "", navigateTo, sendBy = "" }) {
  const navigate = useNavigate();
  const [hoverStatus, steHoverStatus] = useState(false);
  return (
    <>
      <div
        className={`${classname}`}
        onClick={() => (sendBy !== "" ? navigate(`${navigateTo}`) : null)}
      >
        <FontAwesomeIcon
          onMouseEnter={() => {
            steHoverStatus(true);
          }}
          onMouseLeave={() => {
            steHoverStatus(false);
          }}
          icon={faNfcSymbol}
          size="2xl"
          style={{
            color: `${hoverStatus ? "#7b3bd4" : "#f7f5f5"}`,
            transition: "color .2s linear",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
}

export default Logo;
