import React, { useEffect } from "react";
import { NavContainer, ComposePost, More } from "../../index";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
function Home() {
  const status = useSelector((state) => state.auth.composePostVisibility);
  const screenStatus = useMediaQuery({ query: "(max-width:640px)" });
  return (
    <div
      className={` grid grid-cols-[13vw_83vw] 
        `}
    >
      <aside className={` bg-pink-500`}>
        <NavContainer />
      </aside>
      <main className="grid sm:grid-cols-[80vw] md:grid-cols-[600px_auto] lg:grid-cols-[600px_auto] ">
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
