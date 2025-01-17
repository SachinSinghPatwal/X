import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
function Account({ screenStatus }) {
  return (
    <>
      <button
        className="bg-[#181A1B] rounded-full aspect-square ml-[1.5vw]
          w-[60px]"
      >
        <FontAwesomeIcon
          icon={faUserNinja}
          size="2xl"
          style={{ color: "#181A1B" }}
        />
      </button>
      {screenStatus ? <span>HI User</span> : null}
    </>
  );
}

export default Account;
