import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../../AppwriteServices/Auth/Auth";
import { logout } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
function LogOutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logOut().then(() => {
      dispatch(logout());
      navigate("../AuthenticatingPage");
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 rounded-full text-white"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogOutBtn;
