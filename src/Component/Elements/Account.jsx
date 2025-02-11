import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { LogOutBtn } from "../index";

function Account({ screenStatus }) {
  const [hoverStatus, steHoverStatus] = useState(false);
  return (
    <>
      {screenStatus ? (
        <LogOutBtn className="border-[1px] px-[3rem] rounded-full py-[.5rem] border-gray-600 w-full hover:bg-[#111010] transition-colors duration-300">
          LogOut
        </LogOutBtn>
      ) : (
        <LogOutBtn className="aspect-square w-[43px]">
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
        </LogOutBtn>
      )}
    </>
  );
}

export default Account;
