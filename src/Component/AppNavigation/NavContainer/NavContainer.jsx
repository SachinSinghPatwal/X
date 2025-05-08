import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Account } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../../index";
import { changeVisibility } from "../../../store/authSlice";
import { NavItems } from "../../index";
import { useMediaQuery } from "react-responsive";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function NavContainer() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.composePostVisibility);
  const BigScreenStatus = useMediaQuery({ query: "(min-width : 1280px)" });
  return (
    <div
      className={`grid gap-[2rem] 
          justify-items-center 
          sm:justify-items-end
          sm:mr-[1.5rem]
          xl:justify-items-start
          top-1 sticky
          align-center
          content-center
          `}
    >
      <Logo classname="mb-[-.5rem]" />
      <NavItems BigScreenStatus={BigScreenStatus} />
      <button
        className="xl:h-[2.5rem] text-gray-200  xl:bg-sky-600 xl:hover:bg-sky-800 xl:w-full w-fit 
          rounded-full text-[18px] tracking-wider 
            grid 
            justify-items-center 
            // sm:justify-items-end
            xl:justify-items-center
            xl:content-center
            transition-colors duration-300
            "
        onClick={() => {
          dispatch(changeVisibility(!status));
        }}
      >
        {BigScreenStatus ? (
          "Post"
        ) : (
          <FontAwesomeIcon
            icon={faPlus}
            size="xl"
            style={{
              color: `${status ? "#7b3bd4" : "#f7f5f5"}`,
              width: "31.2px",
              marginRight: ".2rem",
            }}
          />
        )}
      </button>
      <div className="mt-[8.5rem]">
        <Account screenStatus={BigScreenStatus} />
      </div>
    </div>
  );
}
export default NavContainer;
