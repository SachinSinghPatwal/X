import React from "react";

function AllPostHeader({ screenStatus }) {
  const styles =
    "h-full text-gray-200 text-[18px] text-center ml-[-2rem] before:content-[''] before:absolute relative before:h-[3px] before:w-[2rem] before:bottom-[-.3rem] before:left-[1rem] bg";
  return (
    <header
      className={`fixed h-[3rem] grid place-items-center 
      border-gray-700 border-b-[1px]
        sm:w-[79.7vw]
        z-[10000] 
        md:w-[598px] 
        lg:w-[598.7px]
        backdrop-blur-sm
        w-[79.6vw]
        ${screenStatus && "w-[79.6vw]"}
      `}
    >
      <nav
        className={`h-fit w-[70vw] md:w-[523px]
            text-center
        `}
      >
        <div className={`${styles}`}>For you</div>
      </nav>
    </header>
  );
}

export default AllPostHeader;
