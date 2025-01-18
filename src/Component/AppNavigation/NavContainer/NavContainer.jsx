import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import {
  faHouse,
  faMagnifyingGlass,
  faEnvelope,
  faMicrochip,
  faBell,
  faUser,
  faEllipsis,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell as bellonclick,
  faEnvelope as enveloponclick,
} from "@fortawesome/free-regular-svg-icons";
import { faXing } from "@fortawesome/free-brands-svg-icons";
import { Logo, Account } from "../../index";

function NavContainer() {
  const navigate = useNavigate();
  const [iconStatus, setIconStatus] = useState("Home");
  const BigScreenStatus = useMediaQuery({ query: "(min-width : 1280px)" });
  const pageNavItems = [
    {
      name: "Home",
      logoUnClicked: faHouseChimney,
      logoOnClicked: faHouse,
      centring: -15,
      to: "/Home",
    },
    {
      name: "Search",
      logoUnClicked: faMagnifyingGlass,
      logoOnclicked: null,
      centring: -35,
      to: "/Search",
    },
    {
      name: "Notification",
      logoUnClicked: bellonclick,
      logoOnClicked: faBell,
      centring: -100,
      to: "/Notification",
    },
    {
      name: "Messages",
      logoUnClicked: enveloponclick,
      logoOnClicked: faEnvelope,
      centring: -70,
      to: "/Messages",
    },
    {
      name: "AI",
      logoUnClicked: faMicrochip,
      logoOnClicked: null,
      centring: 18,
      to: "/AIMessage",
    },
    {
      name: "Premium",
      logoUnClicked: faXing,
      logoOnClicked: null,
      centring: -90,
      to: "/Subscription",
    },
    {
      name: "Profile",
      logoUnClicked: faUser,
      logoOnClicked: null,
      centring: -46,
      to: "/Profile",
    },
    {
      name: "More",
      logoUnClicked: faEllipsis,
      logoOnClicked: null,
      centring: -21,
      to: "/More",
    },
  ];
  return (
    <>
      <Logo />
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
            margin-top:33px;
            letter-spacing:1px;
            background :#8d8f8e80;
            border-radius:2px;
            opacity:0;
            transition:opacity .2s .8s linear
          }
          .prefix:hover::before{
            opacity:1;
          }
          `}
      </style>
      <div className="grid justify-items-center lg:justify-items-start content-between h-[86vh]">
        <div className="grid place-cols-8 max-w-fit gap-[2.2rem] ml-[2.5vw] justify-items-center lg:justify-items-start">
          {pageNavItems.map((navItems) => (
            <div
              to={navItems.to}
              key={navItems.name}
              onClick={() => {
                navigate(navItems.to);
                setIconStatus(navItems.name);
              }}
              className={`prefix lg:hover:cursor-pointer relative `}
              style={{
                "--prefix": `'${navItems.name}'`,
                "--centring": `${navItems.centring}%`,
              }}
            >
              <FontAwesomeIcon
                icon={
                  iconStatus == navItems.name && navItems.logoOnClicked
                    ? navItems.logoOnClicked
                    : navItems.logoUnClicked
                }
                key={navItems.name}
                className={` `}
                size="xl"
                style={{
                  color: `${
                    (iconStatus == navItems.name && !navItems.logoOnClicked) ||
                    (iconStatus == navItems.name && navItems.logoOnClicked)
                      ? "#7b3bd4"
                      : "#f7f5f5"
                  }`,
                  cursor: "pointer",
                }}
              />
              {BigScreenStatus ? (
                <span
                  key={navItems.name}
                  className={`ml-5 text-white ${
                    iconStatus == navItems.name ? "font-bold " : "font-normal"
                  }`}
                >
                  {navItems.name}
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="grid grid-flow-col w-fit">
          <Account screenStatus={BigScreenStatus} />
        </div>
      </div>
    </>
  );
}
export default NavContainer;
