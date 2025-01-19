import React from "react";
import { useMediaQuery } from "react-responsive";
function Footer({ styles }) {
  const screenStatus = useMediaQuery({ query: "(min-width : 1280px)" });
  const betweenScreenStatus = useMediaQuery({ query: "(max-width : 1275px)" });
  let currentYear = new Date();
  currentYear = currentYear.getFullYear();
  const values = [
    [
      "About",
      "Download the app",
      "app",
      "Help Center",
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy",
    ],
    [
      "Accessibility ",
      "Ads info",
      "Blog",
      "Careers",
      "Brand Resources",
      "Advertising",
      "Marketing",
      "For business",
    ],
    ["Developers", "Directory", "Settings", `© ${currentYear} Yap Corp.`],
  ];
  const valuesForBigScreen = [
    [
      "About",
      "Download the app",
      "app",
      "Help Center",
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy",
      "Accessibility ",
      "Ads info",
      "Blog",
      "Careers",
      "Brand Resources",
      "Advertising",
      "Marketing",
      "For business",
    ],
    ["Developers", "Directory", "Settings", `© ${currentYear} Yap Corp.`],
  ];
  return (
    <div
      className={` ${styles} text-[12px] mb-[2rem] text-[#9b9e9c] grid grid-flow-row place-items-center gap-[5px] min-w-[88vw] lg:mb-0`}
    >
      {(screenStatus || !betweenScreenStatus ? valuesForBigScreen : values).map(
        (lines) => (
          <div
            key={lines}
            className="grid  grid-flow-col md:gap-[2rem] sm:gap-[1.7rem] hover:cursor-pointer lg:gap-[1rem]"
          >
            {lines.map((content) => (
              <span key={content} className="tracking-wider hover:underline ">
                {content}
              </span>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default Footer;
