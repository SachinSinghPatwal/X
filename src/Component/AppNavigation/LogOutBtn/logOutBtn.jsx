import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../../AppwriteServices/Auth/Auth";
import { logout } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
function LogOutBtn({ children, className = "" }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logOut().then(() => {
      dispatch(logout());
      navigate("../AuthenticatingPage");
    });
  };
  return (
    <button className={` text-gray-200 ${className}`} onClick={handleLogout}>
      {children}
    </button>
  );
}

export default LogOutBtn;
