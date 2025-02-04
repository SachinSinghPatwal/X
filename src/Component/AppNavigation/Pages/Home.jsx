import React, { memo } from "react";
import { NavContainer, ComposePost } from "../../index";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function Home() {
  const status = useSelector((state) => state.auth.composePostVisibility);
  return (
    <>
      <div
        className={` grid lg:grid-cols-[14vw_60vw_auto] 
        grid-cols-[13vw_80vw_auto] xl:justify-center items-start
        `}
      >
        <aside className="h-full">
          <NavContainer />
        </aside>
        <main
          className="grid sm:grid-cols-[80vw_0px] md:grid-cols-[600px_0px] 
      lg:grid-cols-[600px_auto] "
        >
          {status ? (
            <div className="fixed">
              <ComposePost />
            </div>
          ) : null}
          <Outlet />
          <aside className=" hidden xl:block xl:w-[320px] h-full ">
            <div
              className="border-[1px] border-gray-600 mx-[1.3rem] sticky
          top-20  p-[.2rem] rounded-[5px] text-white
          "
            >
              this project is still in progress of getting completed.
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}

export default memo(Home);
