import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Account({ screenStatus }) {
  const [hoverStatus, steHoverStatus] = useState(false);
  return (
    <>
      <button
        className="bg-[#212529] rounded-full aspect-square ml-[2.5vw]
          w-[43px] "
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
      {screenStatus ? <span className="text-white">HI User</span> : null}
    </>
  );
}

export default Account;
