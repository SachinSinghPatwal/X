import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AllPost() {
  return (
    <div className="border-x-[1px] border-gray-500 ">
      <header>
        <nav className="grid grid-cols-3 justify-items-center mr-[.5rem] fixed backfrop">
          <NavLink>
            <div>For you</div>
          </NavLink>
          <NavLink>
            <div>Following</div>
          </NavLink>
          <NavLink>
            <div>Preferences</div>
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AllPost;
