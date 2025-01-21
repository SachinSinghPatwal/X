import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthPageSizeStatus } from "../../../store/authSlice";
function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth.authPageSizeStatus);
  return (
    <>
      <div className="text-white absolute bg-green-700 h-[5rem] aspect-square">
        signIn
        <button
          onClick={() => {
            dispatch(setAuthPageSizeStatus(!state));
            navigate("/");
          }}
        >
          x
        </button>
      </div>
    </>
  );
}

export default SignIn;
