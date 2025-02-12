import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHouseChimney,
  faEnvelope,
  faMicrochip,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { faXing } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as enveloponclick } from "@fortawesome/free-regular-svg-icons";
import { setPageNavIconStatus } from "../../../store/authSlice";
function NavItems({ BigScreenStatus }) {
  const dispatch = useDispatch();
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
  const pageNavIconStatus = useSelector(
    (state) => state.auth.pageNavIconStatus
  );
  return pageNavItems.map((navItems) => (
    <div
      key={navItems.name}
      onClick={() => {
        dispatch(setPageNavIconStatus(navItems.name));
      }}
      className={`relative min-h-[28px] hover:cursor-pointer  ${
        !BigScreenStatus && "prefix"
      }`}
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
              pageNavIconStatus == navItems.name ? "font-normal" : "font-thin"
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
  ));
}

export default NavItems;
