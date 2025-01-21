import React from "react";
import google from "../../Public/Google.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthPageSizeStatus } from "../../store/authSlice";
function Button({ children, calledBy, type }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth.authPageSizeStatus);
  if (calledBy == "signIn") {
    return (
      <button
        className={
          "text-[#1A8CD8] border-[#434e61] border-[1px] rounded-full w-[20rem] h-[40px] hover:cursor-pointer hover:bg-[#031018]"
        }
        onClick={() => {
          navigate("SignIn");
          dispatch(setAuthPageSizeStatus(true));
        }}
      >
        {children}
      </button>
    );
  }

  if (calledBy == "signUp") {
    return (
      <div
        className={`grid rounded-full place-items-center hover:cursor-pointer
          ${
            type == "google"
              ? "hover:bg-[#121212] bg-[#0d0d0d] border-[#363636] border-[1px]"
              : "hover:bg-[#e1e2e3] bg-white"
          }`}
        onClick={() => {
          navigate(type == "google" ? "SignUpGoogle" : "SignUpApple");
        }}
      >
        <button
          className={`
              ${type == "google" ? "text-white" : "text-black"}
              font-semibold grid grid-cols-[15%_85%] justify-items-center 
              items-center ${type == "google" ? "gap-[.3rem]" : "gap-0"} 
              ${type == "apple" && "w-[180px]"}`}
        >
          <span>
            {type == "google" ? (
              <img width="30px" src={google} alt="google" />
            ) : (
              <FontAwesomeIcon
                icon={faApple}
                size="xl"
                style={{ color: "black" }}
              />
            )}
          </span>
          {type == "google" ? "Sign up with Google" : "Sign up with Apple"}
        </button>
      </div>
    );
  }
  if (calledBy == "createAccount") {
    return (
      <div
        className="grid rounded-full w-full bg-[#2e85d7] hover:bg-[#2981cd] 
                  place-items-center hover:cursor-pointer"
        onClick={() => {
          navigate("CreateAccount");
          dispatch(setAuthPageSizeStatus(true));
        }}
      >
        <button className="font-semibold text-white">Create account</button>
      </div>
    );
  }
  if (calledBy == "NextInCreateAccount") {
    return (
      <div
        className="grid rounded-full w-fit black aspect-square
                  place-items-center hover:cursor-pointer absolute left-[.7rem] top-[.6rem] hover:bg-[#141414] h-[2rem] hover:transition-color duration-300 ease-in-out"
        onClick={() => {
          dispatch(setAuthPageSizeStatus(false));
          navigate("/");
        }}
      >
        <FontAwesomeIcon icon={faXmark} style={{ color: "white" }} />
      </div>
    );
  }
  if (calledBy == "submitCreateAccount") {
    return (
      <div
        className="grid rounded-full place-items-center hover:cursor-pointer 
        h-[3rem] w-[70%] "
        onClick={() => {
          dispatch(setAuthPageSizeStatus(false));
          navigate("/");
        }}
      >
        <button
          type="submit"
          className="font-semibold h-full w-full rounded-full bg-gray-600 text-black"
        >
          Create Account
        </button>
      </div>
    );
  }
}
export default Button;
