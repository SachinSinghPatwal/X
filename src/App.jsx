import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./AppwriteServices/Auth/Auth";
import { Outlet } from "react-router-dom";
import {
  NavContainer,
  Loader,
  ComposePost,
  AuthenticatingPage,
} from "./Component/index";
import { logout } from "./store/authSlice";
import { useNavigate } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
          setAuthStatus((prev) => !prev);
        } else {
          dispatch(logout());
          setAuthStatus(false);
        }
      })
      .finally(() => {
        setLoading(false);
        navigate("/Home");
      });
  }, []);
  const status = useSelector((state) => state.auth.composePostVisibility);
  return !loading && authStatus ? (
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
  ) : authStatus ? (
    <Loader bg="#050505" />
  ) : (
    <AuthenticatingPage styles="text-white font-['Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif]" />
  );
}

export default App;
