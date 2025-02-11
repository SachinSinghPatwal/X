import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import {
  faHouse,
  faHouseChimney,
  faPlus,
  faEnvelope,
  faMicrochip,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { faXing } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as enveloponclick } from "@fortawesome/free-regular-svg-icons";
import { Account } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../../index";

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
    {
      name: "messages",
      logoUnClicked: enveloponclick,
      logoOnClicked: faEnvelope,
      centring: -56,
    },
    {
      name: "ai",
      logoUnClicked: faMicrochip,
      logoOnClicked: null,
      centring: 25,
    },
    {
      name: "premium",
      logoUnClicked: faXing,
      logoOnClicked: null,
      centring: -80,
    },
    {
      name: "profile",
      logoUnClicked: faUser,
      logoOnClicked: null,
      centring: -40,
    },
    {
      name: "more",
      logoUnClicked: faEllipsis,
      logoOnClicked: null,
      centring: -16,
    },
  ];
  const status = useSelector((state) => state.auth.composePostVisibility);
  return (
    <>
      <div
        className={`grid gap-[2rem] overflow-x-hidden
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
        <Logo classname="mb-[-.5rem]" />
        {pageNavItems.map((navItems) => (
          <div
            key={navItems.name}
            onClick={() => {
              dispatch(setPageNavIconStatus(navItems.name));
            }}
            className={`relative min-h-[28px] hover:cursor-pointer  ${
              !BigScreenStatus && "prefix"
            }
              `}
          >
            <div
              className="h-full grid grid-flow-col gap-[1rem] items-center 
            text-[18.5px] mr-[.2rem]"
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
                  className={`text-gray-200 h-full ${
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
          className="xl:h-[2.5rem] text-gray-200 w-full xl:bg-sky-600 hover:bg-sky-800 
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
    </>
  );
}
export default NavContainer;
