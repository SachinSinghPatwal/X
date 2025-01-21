import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import authService from "./AppwriteServices/Auth/Auth";
import { login, logout } from "./store/authSlice";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (!userData) {
        dispatch(login({ userData }));
        navigate("/Home");
        console.log("app called false");
      } else {
        dispatch(logout());
        navigate("/AuthenticatingPage");
      }
    });
  }, []);
  return (
    <div className="grid place-items-center h-screen">
      <Outlet />
    </div>
  );
}
export default App;
