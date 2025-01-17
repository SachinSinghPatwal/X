import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./AppwriteServices/Auth/Auth";
import { Outlet } from "react-router-dom";
import { NavContainer, Loader } from "./Component/index";
import { logout } from "./store/authSlice";
import Animation from "../src/Public/Animation.mp4";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) =>
        userData ? dispatch(login({ userData })) : dispatch(logout())
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <div className="grid place-items-center h-screen  ">
      <div className=" h-full w-[100vw] md:w-[80vw] lg:w-[75vw] grid grid-cols-[14%_86%] xl:grid-cols-[30%_70%]">
        <aside className=" border-r-[1px] border-gray-600">
          <NavContainer />
        </aside>
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <Loader bg="#000000" />
  );
}

export default App;
