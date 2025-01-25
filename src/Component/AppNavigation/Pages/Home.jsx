import React from "react";
import { NavContainer, ComposePost, More } from "../../index";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
function Home() {
  const status = useSelector((state) => state.auth.composePostVisibility);
  return (
    <div
      className={` grid lg:grid-cols-[14vw_60vw] 
        grid-cols-[13vw_80vw] xl:justify-center
        `}
    >
      <aside>
        <NavContainer />
      </aside>
      <main
        className="grid sm:grid-cols-[80vw_0px] md:grid-cols-[600px_0px] overflow-x-hidden 
      lg:grid-cols-[600px_auto] "
      >
        {status ? <ComposePost /> : null}
        <Outlet />
        <aside className=" invisible xl:visible ">
          <More />
        </aside>
      </main>
    </div>
  );
}

export default Home;
