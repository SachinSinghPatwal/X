import React from "react";
import google from "../../Public/Google.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
function Button({ children, calledBy, type }) {
  return (
    <>
      {calledBy == "signIn" && (
        <button
          className={
            "text-[#1A8CD8] border-[#434e61] border-[1px] rounded-full w-[20rem] h-[40px] hover:cursor-pointer hover:bg-[#031018]"
          }
        >
          {children}
        </button>
      )}
      {calledBy == "signUpGoogle" || calledBy == "signUpApple" ? (
        <div
          className={`grid rounded-full place-items-center 
          ${
            type == "google"
              ? "hover:bg-[#121212] bg-[#0d0d0d] border-[#363636] border-[1px]"
              : "hover:bg-[#e1e2e3] bg-white"
          }`}
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
      ) : null}
      {calledBy == "createAccount" && (
        <button className="font-semibold text-white">Create account</button>
      )}
    </>
  );
}
export default Button;
