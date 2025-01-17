import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../../AppwriteServices/Auth/Auth";
import { logout } from "../../../store/authSlice";
function logOutBtn() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default logOutBtn;
