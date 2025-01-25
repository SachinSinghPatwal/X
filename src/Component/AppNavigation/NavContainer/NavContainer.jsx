import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { NavLink, useNavigate } from "react-router-dom";
import {
  faHouse,
  faMagnifyingGlass,
  faEnvelope,
  faMicrochip,
  faBell,
  faUser,
  faEllipsis,
  faHouseChimney,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell as bellonclick,
  faEnvelope as enveloponclick,
} from "@fortawesome/free-regular-svg-icons";
import { faXing } from "@fortawesome/free-brands-svg-icons";
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
    {
      name: "search",
      logoUnClicked: faMagnifyingGlass,
      logoOnclicked: null,
      centring: -25,
    },
    {
      name: "notification",
      logoUnClicked: bellonclick,
      logoOnClicked: faBell,
      centring: -90,
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
      <style>
        {`
          .prefix::before{content:var(--prefix);
            height:17.9px;
            padding:2px;
            width:fit-content;
            color:white;
            position:absolute;
            font-size:10px;
            font-family:"Gill Sans", sans-serif;
            left:var(--centring);
            margin-top:28px;
            letter-spacing:1px;
            border-radius:2px;
            opacity:0;
            transition:opacity .1s .6s ease-in-out;
            text-align:center
          }
          .prefix:hover::before{
            opacity:1;
          }
          `}
      </style>
      <div
        className={`grid place-cols-10 gap-[1.8rem] overflow-x-hidden
          justify-items-center 
          sm:justify-items-end
          sm:mr-[1.5rem]
          xl:justify-items-start
          top-0 sticky`}
      >
        <NavLink
          to="/Home"
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
                ? navigate(`${navItems.name}`)
                : navigate("");
              dispatch(setPageNavIconStatus(navItems.name));
            }}
            className={`relative min-h-[28px] hover:cursor-pointer  ${
              !BigScreenStatus && "prefix"
            }
              ${
                navItems.name == "post"
                  ? "w-fit transition-colors  ease-in prefix relative lg:hover:cursor-pointer pl-[2px]"
                  : ""
              }
              `}
            style={{
              "--prefix": `'${navItems.name}'`,
              "--centring": `${navItems.centring}%`,
            }}
          >
            <div className="h-full grid grid-flow-col gap-[1rem] items-center text-[18.5px] ">
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
          className="before:content-['Post'] before:h-[17.9px] 
            before:p-[2px] before:w-fit before:text-white before:absolute 
            before:text-[10px] before:font-['Gill Sans sans-serif']
            before:left-[-2.8px] before:mt-[28px] before:tracking-[1px]
            before:opacity-0 before:transition-opacity hover:before:opacity-100 before:delay-[.6s] before:duration-[.1s] before:ease-in-out relative before:border-none xl:h-[3rem]  w-full xl:bg-gray-800 font-bold rounded-[2rem] text-[18px] tracking-wider
            grid 
            justify-items-center 
            sm:justify-items-end
            sm:mr-[.3rem]
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
        <div className="mt-[3rem] ">
          <Account screenStatus={BigScreenStatus} />
        </div>
      </div>
    </>
  );
}
export default NavContainer;
