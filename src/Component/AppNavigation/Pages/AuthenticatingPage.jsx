import React, { useEffect } from "react";
import { Button, Footer } from "../../index";
import Logo from "../../../Public/Logo.svg";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTogglingAuthPageStatus } from "../../../store/authSlice";
function AuthenticatingPage({
  styles = "text-gray-200 font-['Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif]",
}) {
  const screenStatus = useMediaQuery({ query: "(min-width : 1280px)" });
  const smallestScreen = useMediaQuery({ query: "(max-width : 640px)" });
  const createLoginUserPageStatus = useSelector(
    (state) => state.auth.togglingAuthPageStatus
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTogglingAuthPageStatus(false));
  }, []);
  return (
    <>
      {createLoginUserPageStatus ? <Outlet /> : ""}
      <div
        className={`min-h-screen ${
          createLoginUserPageStatus ? "bg-gray-800 " : ""
        } `}
      >
        <div
          className={`grid md:pr-auto sm:px-[15%] lg:px-[2%] lg:mx-0 
            sm:py-[3.5rem]lg:pb-[8rem] pb-[6rem] pt-[3rem]
        ${smallestScreen && "justify-items-center"}
        lg:w-[98dvw] lg:gap-0 lg:justify-items-center items-center gap-3 
        lg:overflow-hidden lg:items-center 
        sm:justify-items-start px
        lg:grid-cols-2`}
        >
          <header className="grid justify-items-start gap-[1.5rem] w-fit">
            <img
              loading="lazy"
              className="w-[6.5rem] lg:w-[25rem] aspect-square -ml-3 lg:ml-[15%]"
              src={Logo}
              alt="logo"
              style={{ filter: "invert(100%)" }}
            />
          </header>
          <main className="w-fit lg:-ml-[10%]">
            <h1 className={`text-7xl ${styles} font-semibold lg:mt-[3rem]`}>
              Start Yapping {!screenStatus ? <br /> : null}
              now
            </h1>
            <h3
              className={`${styles}  text-3xl font-bold w-fit lg:mt-[3rem] mt-[4.2rem]
            `}
            >
              Join today .
            </h3>
            <div
              className="h-[2.8rem] w-[20rem] 
          gap-[1rem] mt-[2rem]  "
            >
              <Button calledBy="createAccount" />
            </div>
            <p className="text-[#9b9e9c] text-[12px] ml-[1px] mt-[6px]">
              By signing up, you agree to the{" "}
              <span className="text-[#1A8CD8] hover:cursor-pointer">
                Terms of Service{" "}
              </span>
              and{" "}
              <span className="text-[#1A8CD8] hover:cursor-pointer">
                Privacy <br /> Policy
              </span>{" "}
              <span>, including</span>{" "}
              <span className="text-[#1A8CD8] hover:cursor-pointer">
                Cookie Use.
              </span>
            </p>
            <h4 className={`${styles} my-[2rem] lg:mb-[1.6rem]`}>
              Already have a account ?
            </h4>
            <Button calledBy="signIn">Sign in</Button>
          </main>
        </div>
        <div className="sm:grid sm:place-items-center ">
          <Footer styles=" font-['Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif]" />
        </div>
      </div>
    </>
  );
}

export default AuthenticatingPage;
