import React from "react";
import { useSelector } from "react-redux";
import { NavContainer, ComposePost } from "../../index";
import { Outlet } from "react-router-dom";
function Layout() {
  const status = useSelector((state) => state.auth.composePostVisibility);
  return (
    <div className="grid place-items-center h-screen">
      <div className="h-full w-[100vw] md:w-[80vw] lg:w-[75vw] grid grid-cols-[14%_86%] xl:grid-cols-[30%_70%]">
        <aside className="border-r-[1px] border-gray-600">
          <NavContainer />
        </aside>
        <main>
          {status ? <ComposePost /> : null}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
