import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { LogOutBtn } from "../index";

function Account({ screenStatus }) {
  const [hoverStatus, steHoverStatus] = useState(false);
  return (
    <>
      <div
        className="
      "
      >
        <button
          className="bg-[#303235] rounded-full aspect-square 
          w-[43px] mb-[.5rem] relative
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
          <span className="text-white ml-[1.5rem]">
            <LogOutBtn />
          </span>
        ) : null}
      </div>
    </>
  );
}

export default Account;
