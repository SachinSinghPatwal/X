import React from "react";
import { NavContainer, ComposePost } from "../../index";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function Home() {
  const status = useSelector((state) => state.auth.composePostVisibility);
  return (
    <div className="h-full w-[100vw] md:w-[80vw] lg:w-[75vw] grid grid-cols-[14%_86%] xl:grid-cols-[30%_70%]">
      <aside className="border-r-[1px] border-gray-600">
        <NavContainer />
      </aside>
      <main>
        {status ? <ComposePost /> : null}
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
