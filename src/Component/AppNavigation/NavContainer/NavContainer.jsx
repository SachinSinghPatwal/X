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
      to: "/",
    },
    {
      name: "Search",
      logoUnClicked: faMagnifyingGlass,
      logoOnclicked: null,
      to: "/Search",
    },
    {
      name: "Notification",
      logoUnClicked: bellonclick,
      logoOnClicked: faBell,
      to: "/Notification",
    },
    {
      name: "Messages",
      logoUnClicked: enveloponclick,
      logoOnClicked: faEnvelope,
      to: "/Messages",
    },
    {
      name: "AIMessage",
      logoUnClicked: faMicrochip,
      logoOnClicked: null,
      to: "/AIMessage",
    },
    {
      name: "Subscription",
      logoUnClicked: faXing,
      logoOnClicked: null,
      to: "/Subscription",
    },
    {
      name: "Profile",
      logoUnClicked: faUser,
      logoOnClicked: null,
      to: "/Profile",
    },
    {
      name: "More",
      logoUnClicked: faEllipsis,
      logoOnClicked: null,
      to: "/More",
    },
  ];
  return (
    <>
      <Logo />
      <div className="grid justify-items-center lg:justify-items-start content-between h-[87vh]">
        <div className="grid place-cols-8 max-w-fit gap-8 ml-[2.5vw] justify-items-center lg:justify-items-start">
          {pageNavItems.map((navItems) => (
            <div
              to={navItems.to}
              key={navItems.name}
              onClick={() => {
                navigate(navItems.to);
                setIconStatus(navItems.name);
              }}
              className={`hover:cursor-pointer`}
            >
              <FontAwesomeIcon
                icon={
                  iconStatus == navItems.name && navItems.logoOnClicked
                    ? navItems.logoOnClicked
                    : navItems.logoUnClicked
                }
                size="lg"
                style={{
                  color: `${
                    iconStatus == navItems.name && !navItems.logoOnClicked
                      ? "#4361ee"
                      : "#181A1B"
                  }`,
                }}
              />
              {BigScreenStatus ? (
                <span
                  className={`ml-5 ${
                    iconStatus == navItems.name ? "font-bold" : "font-normal"
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
