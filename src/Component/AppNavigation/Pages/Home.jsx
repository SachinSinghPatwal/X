import React, { useEffect } from "react";
import { NavContainer, ComposePost, More } from "../../index";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
function Home() {
  const status = useSelector((state) => state.auth.composePostVisibility);
  const screenStatus = useMediaQuery({ query: "(max-width:640px)" });
  const BigScreenStatus = useMediaQuery({ query: "(min-width : 1292px)" });
  const MiddleScreenStatus = useMediaQuery({ query: "(min-width : 718px)" });
  return (
    <div
      className={`h-screen grid xl:justify-center
        ${screenStatus && " grid-cols-[13vw_86%] "}
        sm:grid-cols-[13vw_84%]
        md:grid-cols-[13vw_600px]
        xl:grid-cols-[14rem_70%]
        `}
    >
      <aside className={`border-gray-600 `}>
        <NavContainer />
      </aside>
      <main
        className="lg:min-w-[600px] sm:min-w-[400px] grid 
      grid-cols-[600px_25vw] gap-[2rem] "
      >
        {status ? <ComposePost /> : null}
        <Outlet />
        <aside className=" invisible xl:visible">
          <More />
        </aside>
      </main>
    </div>
  );
}

export default Home;
