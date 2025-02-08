import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTogglingAuthPageStatus } from "../../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faThumbTack,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
function Button({ children, calledBy }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (calledBy == "signIn") {
    return (
      <button
        className="text-[#1A8CD8] border-[#434e61] border-[1px] rounded-full w-[20rem] h-[44px] hover:cursor-pointer hover:bg-[#031018]"
        onClick={() => {
          navigate("SignIn");
          dispatch(setTogglingAuthPageStatus(true));
        }}
      >
        {children}
      </button>
    );
  } else if (calledBy == "createAccount") {
    return (
      <div
        className="grid rounded-full h-full w-full bg-[#2e85d7] 
        hover:bg-[#2675ba] place-items-center hover:cursor-pointer"
        onClick={() => {
          navigate("CreateAccount");
          dispatch(setTogglingAuthPageStatus(true));
        }}
      >
        <button className="font-semibold text-white">Create account</button>
      </div>
    );
  } else if (calledBy == "optionsInForYouMoreButton") {
    return (
      <>
        <button>
          <FontAwesomeIcon
            icon={faFlag}
            style={{ color: "red" }}
            size="lg"
            className="w-[23px] mr-[.5rem]"
          />
          Report
        </button>
        <button>
          <FontAwesomeIcon
            icon={faThumbTack}
            style={{ color: "white" }}
            size="lg"
            className="w-[23px] mr-[.5rem]"
          />
          Pin
        </button>
        <button>
          <FontAwesomeIcon
            icon={faFaceFrownOpen}
            style={{ color: "white" }}
            size="lg"
            className="w-[23px] mr-[.5rem]"
          />
          Not interested in this post
        </button>
        <button>
          <FontAwesomeIcon
            icon={faVolumeXmark}
            style={{ color: "white" }}
            size="lg"
            className="w-[23px] mr-[.5rem]"
          />
          Mute
        </button>
      </>
    );
  }
}
export default Button;
