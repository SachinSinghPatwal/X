import React from "react";
import google from "../../Public/Google.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Button({ children, calledBy, type }) {
  const navigate = useNavigate();
  if (calledBy == "signIn") {
    return (
      <button
        className={
          "text-[#1A8CD8] border-[#434e61] border-[1px] rounded-full w-[20rem] h-[40px] hover:cursor-pointer hover:bg-[#031018]"
        }
        onClick={() => {
          navigate("SignIn");
        }}
      >
        {children}
      </button>
    );
  }

  if (calledBy == "signUpGoogle" || calledBy == "signUpApple") {
    return (
      <div
        className={`grid rounded-full place-items-center hover:cursor-pointer
          ${
            type == "google"
              ? "hover:bg-[#121212] bg-[#0d0d0d] border-[#363636] border-[1px]"
              : "hover:bg-[#e1e2e3] bg-white"
          }`}
        onClick={() => {
          navigate(type == "google" ? "/SignUpGoogle" : "/SignUpApple");
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
        className="grid rounded-full w-full bg-[#1A8CD8] 
                  place-items-center hover:cursor-pointer"
        onClick={() => {
          navigate("/CreateAccount");
        }}
      >
        <button className="font-semibold text-white">Create account</button>
      </div>
    );
  }
}
export default Button;
