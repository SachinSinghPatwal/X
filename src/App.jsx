import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import authService from "./AppwriteServices/Auth/Auth";
import { login, logout } from "./store/authSlice";
import { Loader } from "./Component";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
          navigate("../../Home/allpost");
          console.log("app yes");
        } else if (!userData) {
          dispatch(logout());
          console.log("app no");
          navigate("AuthenticatingPage");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader bg="black" />;
  }
  return (
    <div className="">
      <Outlet />
    </div>
  );
}
export default App;
