import React from "react";
import Wolf from "../../../../Public/Wolflol.jpg";

function Preference() {
  return (
    <>
      <div className="text-white text-center mt-[1rem] border-b-[1px] border-gray-700">
        none preference set
      </div>
      <div className="text-white mt-[10=rem] ml-[1rem]  h-[30%]">
        <h1 className="mb-[1rem] mt-[1rem]">
          And on this too trying to understand how preference work
        </h1>
        <img src={Wolf} className="w-[50%]" />
      </div>
    </>
  );
}

export default Preference;
