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
      centring: -15,
    },
    {
      name: "search",
      logoUnClicked: faMagnifyingGlass,
      logoOnclicked: null,
      centring: -35,
    },
    {
      name: "notification",
      logoUnClicked: bellonclick,
      logoOnClicked: faBell,
      centring: -100,
    },
    {
      name: "messages",
      logoUnClicked: enveloponclick,
      logoOnClicked: faEnvelope,
      centring: -70,
    },
    {
      name: "ai",
      logoUnClicked: faMicrochip,
      logoOnClicked: null,
      centring: 18,
    },
    {
      name: "premium",
      logoUnClicked: faXing,
      logoOnClicked: null,
      centring: -90,
    },
    {
      name: "profile",
      logoUnClicked: faUser,
      logoOnClicked: null,
      centring: -46,
    },
    {
      name: "more",
      logoUnClicked: faEllipsis,
      logoOnClicked: null,
      centring: -21,
    },
  ];
  const status = useSelector((state) => state.auth.composePostVisibility);
  return (
    <>
      <NavLink
        to="/Home"
        onClick={() => {
          dispatch(setPageNavIconStatus("home"));
        }}
      >
        <Logo
          classname="mb-8 grid place-items-center lg:place-items-start
        mt-5 ml-[2.5vw]"
        />
      </NavLink>
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
            transition:opacity .2s  linear
          }
          .prefix:hover::before{
            opacity:1;
          }
          `}
      </style>
      <div className="grid justify-items-center lg:justify-items-start content-between h-[86vh] ">
        <div className="grid place-cols-9 max-w-fit gap-[1.8rem] ml-[2.5vw] justify-items-center lg:justify-items-start">
          {pageNavItems.map((navItems) => (
            <div
              key={navItems.name}
              onClick={() => {
                navItems.name !== "home"
                  ? navigate(`${navItems.name}`)
                  : navigate("");
                dispatch(setPageNavIconStatus(navItems.name));
              }}
              className={`prefix lg:hover:cursor-pointer relative 
              ${
                navItems.name == "post"
                  ? " w-fit transition-colors aspect-square ease-in prefix relative lg:hover:cursor-pointer pl-[2px] lg:pl-[]"
                  : ""
              }
              `}
              style={{
                "--prefix": `'${navItems.name}'`,
                "--centring": `${navItems.centring}%`,
              }}
            >
              <FontAwesomeIcon
                icon={
                  pageNavIconStatus == navItems.name && navItems.logoOnClicked
                    ? navItems.logoOnClicked
                    : navItems.logoUnClicked
                }
                size="xl"
                style={{
                  color: `${
                    pageNavIconStatus == navItems.name ? "#7b3bd4" : "#f7f5f5"
                  }`,
                  textAlign: "center",
                  cursor: "pointer",
                }}
              />
              {BigScreenStatus ? (
                <span
                  key={navItems.name}
                  className={`ml-5 text-white ${
                    pageNavIconStatus == navItems.name
                      ? "font-bold "
                      : "font-normal"
                  }`}
                >
                  {navItems.name}
                </span>
              ) : null}
            </div>
          ))}
          <button
            className="before:content-['Post'] before:h-[17.9px] 
            before:p-[2px] before:w-fit before:text-white before:absolute 
            before:text-[10px] before:font-['Gill Sans sans-serif']
            before:left-[-2.8px] before:mt-[28px] before:tracking-[1px]
            before:border- before:opacity-0 before:transition-opacity hover:before:opacity-100 relative before:border-none"
            onClick={() => {
              dispatch(changeVisibility(!status));
            }}
          >
            <FontAwesomeIcon
              icon={faPlus}
              size="xl"
              style={{ color: `${status ? "#7b3bd4" : "#f7f5f5"}` }}
            />
          </button>
        </div>
        <div className="grid grid-flow-col w-fit ">
          <Account screenStatus={BigScreenStatus} />
        </div>
      </div>
    </>
  );
}
export default NavContainer;
