import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { NavLink, useNavigate } from "react-router-dom";
import {
  faHouse,
  faHouseChimney,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Logo, Account } from "../../index";
import { useDispatch, useSelector } from "react-redux";

import {
  changeVisibility,
  setPageNavIconStatus,
} from "../../../store/authSlice";

function NavContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageNavIconStatus = useSelector(
    (state) => state.auth.pageNavIconStatus
  );
  const BigScreenStatus = useMediaQuery({ query: "(min-width : 1280px)" });
  const pageNavItems = [
    {
      name: "home",
      logoUnClicked: faHouseChimney,
      logoOnClicked: faHouse,
      centring: -10,
    },
  ];
  const status = useSelector((state) => state.auth.composePostVisibility);
  return (
    <>
      <div
        className={`grid place-cols-9 gap-[2rem] overflow-x-hidden
          justify-items-center 
          sm:justify-items-end
          sm:mr-[1.5rem]
          xl:justify-items-start
          top-0 sticky
          align-center
          content-center
          h-screen
          `}
      >
        <NavLink
          to="/Home/allpost"
          onClick={() => {
            dispatch(setPageNavIconStatus("home"));
          }}
        >
          <Logo classname="mt-[1rem]" />
        </NavLink>
        {pageNavItems.map((navItems) => (
          <div
            key={navItems.name}
            onClick={() => {
              navItems.name !== "home"
                ? navigate(
                    `${navItems.name}`,
                    dispatch(changeVisibility(false))
                  )
                : navigate("../Home/allpost");
              dispatch(setPageNavIconStatus(navItems.name));
            }}
            className={`relative min-h-[28px] hover:cursor-pointer  ${
              !BigScreenStatus && "prefix"
            }
              `}
          >
            <div
              className="h-full grid grid-flow-col gap-[1rem] items-center 
            text-[18.5px] "
            >
              <FontAwesomeIcon
                icon={
                  pageNavIconStatus == navItems.name && navItems.logoOnClicked
                    ? navItems.logoOnClicked
                    : navItems.logoUnClicked
                }
                size="lg"
                style={{
                  color: `${
                    pageNavIconStatus == navItems.name ? "#7b3bd4 " : "#f7f5f5 "
                  }`,
                  cursor: "pointer",
                  minWidth: "31.21px",
                }}
              />
              {BigScreenStatus ? (
                <span
                  key={navItems.name}
                  className={`text-white h-full ${
                    pageNavIconStatus == navItems.name
                      ? "font-normal"
                      : "font-thin"
                  }`}
                >
                  {navItems.name !== "home"
                    ? navItems.name.charAt(0).toLocaleUpperCase() +
                      navItems.name.slice(1)
                    : "Home"}
                </span>
              ) : null}
            </div>
          </div>
        ))}
        <button
          className="xl:h-[3rem] text-white w-full xl:bg-gray-800  rounded-[2rem] text-[18px] tracking-wider
            grid 
            justify-items-center 
            sm:justify-items-end
            xl:justify-items-center
            xl:content-center
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
              }}
            />
          )}
        </button>
        <div className="mt-[22rem] xl:mb-[1rem]">
          <Account screenStatus={BigScreenStatus} />
        </div>
      </div>
    </>
  );
}
export default NavContainer;
