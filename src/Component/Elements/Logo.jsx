import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
function Logo() {
  return (
    <div className="mb-8 grid place-items-center lg:place-items-start">
      <FontAwesomeIcon
        icon={faNfcSymbol}
        size="2xl"
        className="ml-[2.5vw] mt-5"
        style={{ color: "#181A1B" }}
      />
    </div>
  );
}

export default Logo;
