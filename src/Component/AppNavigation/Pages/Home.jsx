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
            <div
              className="fixed z-[1000] lg:left-[13vw] xl:left-[28.2vw] 
              md:left-[13vw] sm:left-[12vw] 
            left-[9.8vw]"
            >
              <ComposePost />
            </div>
          ) : null}
          <Outlet />
          <aside className=" hidden xl:block xl:w-[320px] h-full">
            <input
              className="sticky top-[1rem] w-[90%] rounded-[4rem] placeholder:text-[17px] focus:outline focus:outline-[#9a57f8]  bg-transparent text-gray-400
              placeholder:text-gray-200 h-[2.5rem] border-[1px] border-gray-500 
              pl-[5%]
              mx-[1rem]
              "
              placeholder="Search"
            ></input>
            <div
              className="border-[1px] border-gray-600 mx-[1rem] sticky
          top-20 p-[1rem] rounded-[1rem] text-gray-200 
          "
            >
              <h1 className="text-[20px] font-semibold">Get Premium now</h1>
              <p className="mt-[.5rem]">
                For a limited time get 10% off and Unlock the best
              </p>
              <button
                className="rounded-[4rem]  mt-[1rem] border-[1px] 
                border-gray-600 py-[.5rem] px-[1rem] w-[10rem] font-bold 
              hover:bg-gray-900 transition-[background] duration-300"
              >
                Subscribe
              </button>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}

export default memo(Home);
