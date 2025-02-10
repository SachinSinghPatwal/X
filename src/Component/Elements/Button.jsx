import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setTogglingAuthPageStatus,
  changeVisibility,
} from "../../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faThumbTack,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";

function Button({ children, calledBy, activePostId, setActivePostId, post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const iconArray = [
    { icon: faFlag, color: "red", label: "Report" },
    { icon: faThumbTack, color: "white", label: "Pin" },
    { icon: faFaceFrownOpen, color: "white", label: "Sad" },
    { icon: faVolumeXmark, color: "white", label: "Mute" },
  ];

  if (calledBy === "signIn") {
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
  } else if (calledBy === "createAccount") {
    return (
      <div
        className="grid rounded-full h-full w-full bg-[#2e85d7] 
        hover:bg-[#2675ba] place-items-center hover:cursor-pointer"
        onClick={() => {
          navigate("CreateAccount");
          dispatch(setTogglingAuthPageStatus(true));
        }}
      >
        <button className="font-semibold text-gray-200">Create account</button>
      </div>
    );
  } else if (calledBy === "optionsInForYouMoreButton") {
    return (
      <>
        {iconArray.map(({ icon, color, label }) => (
          <button
            key={label}
            onClick={() => {
              setActivePostId(activePostId === post?.$id ? null : post?.$id);
              dispatch(changeVisibility(false));
            }}
            className="grid grid-flow-col gap-[1rem] justify-start items-start 
            px-2 py-1 hover:bg-gray-800 rounded-md w-full"
          >
            <FontAwesomeIcon
              icon={icon}
              style={{ color, width: "22.5px" }}
              size="lg"
            />
            {label}
          </button>
        ))}
      </>
    );
  }
}

export default Button;
