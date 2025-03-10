import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import authService from "./AppwriteServices/Auth/Auth";
import { login, logout } from "./store/authSlice";
import { Loader } from "./Component";
import { Analytics } from "@vercel/analytics/react"
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const userDataStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
          navigate("../../Home/allpost");
        } else if (!userData) {
          dispatch(logout());
          navigate("AuthenticatingPage");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userDataStatus]);
  if (loading) {
    return <Loader bg="black" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default memo(App);
