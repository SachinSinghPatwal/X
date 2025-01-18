import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./AppwriteServices/Auth/Auth";
import { Outlet } from "react-router-dom";
import { NavContainer, Loader, ComposePost } from "./Component/index";
import { logout } from "./store/authSlice";
import { useNavigate } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) =>
        userData ? dispatch(login({ userData })) : dispatch(logout())
      )
      .finally(() => {
        setLoading(false);
        navigate("/Home");
      });
  }, []);
  const status = useSelector((state) => state.auth.composePostVisibility);
  return !loading ? (
    <div className="grid place-items-center h-screen  ">
      <div className=" h-full w-[100vw] md:w-[80vw] lg:w-[75vw] grid grid-cols-[14%_86%] xl:grid-cols-[30%_70%]">
        <aside className=" border-r-[1px] border-gray-600">
          <NavContainer />
        </aside>
        <main className="">
          {status ? <ComposePost /> : null}
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <Loader bg="#050505" />
  );
}

export default App;
