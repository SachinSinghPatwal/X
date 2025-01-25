import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink, Outlet } from "react-router-dom";

function AllPost({
  styles = "h-full text-white text-[18px] text-center ml-[-2rem] before:content-[''] before:absolute relative before:h-[3px] before:w-[2rem] before:bottom-[-.3rem] before:left-[5.5rem]",
}) {
  const [beforeStatus, setBeforeStatus] = useState(true);
  const screenStatus = useMediaQuery({ query: "(max-width:625px)" });
  return (
    <div className="border-x-[1px] border-gray-700 ">
      <header
        className={` fixed h-[3rem] grid place-items-center 
      border-gray-700 border-b-[1px]
        sm:w-[79.7vw] 
        md:w-[598px] 
        lg:w-[598px]
        backdrop-blur-sm
        w-[79.6vw]
        ${screenStatus && "w-[79.6vw]"}
      `}
      >
        <nav
          className={`h-fit w-[70vw] md:w-[523px]
            grid grid-cols-3
        `}
        >
          <NavLink
            to="foryou"
            onClick={() => {
              setBeforeStatus(true);
            }}
            className={({ isActive }) => `${styles}
          ${isActive || beforeStatus ? `before:bg-blue-600` : ""}`}
          >
            For you
          </NavLink>
          <NavLink
            onClick={() => {
              setBeforeStatus(false);
            }}
            to="following"
            className={({ isActive }) => `${styles}
          ${isActive ? `before:bg-blue-600` : ""}`}
          >
            Following
          </NavLink>
          <NavLink
            onClick={() => {
              setBeforeStatus(false);
            }}
            to="preferences"
            className={({ isActive }) => `${styles}
          ${isActive ? `before:bg-blue-600` : ""}`}
          >
            Preferences
          </NavLink>
        </nav>
      </header>
      <main className="h-[300vh] pt-[3.5rem]">
        <Outlet />
      </main>
    </div>
  );
}

export default AllPost;
