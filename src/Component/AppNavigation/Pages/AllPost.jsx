import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
function AllPost() {
  const screenStatus = useMediaQuery({ query: "(max-width:640px)" });
  return (
    <div className="border-x-[1px] border-gray-700 ">
      <header
        className={` fixed h-[3rem] grid place-items-center 
          border-red-600 border-[1px]
        sm:w-[79.7vw] 
        md:w-[598px] 
        lg:w-[598px]
        backdrop-blur-sm
        ${screenStatus && "min-w-[82.6vw]"}
      `}
      >
        <nav
          className={`h-fit w-[70vw] md:w-[523px]
            grid grid-cols-3
        `}
        >
          <div className="h-full text-[18px]">For you</div>
          <div className="h-full text-[18px]">Following</div>
          <div className="h-full text-[18px]">Preferences</div>
        </nav>
      </header>
      <main className="h-[300vh] pt-[1rem]">
        ost
        <Outlet />
      </main>
    </div>
  );
}

export default AllPost;
