import React, { useEffect } from "react";
import { Button, Footer } from "../../index";
import Logo from "../../../Public/Logo.svg";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function AuthenticatingPage({
  styles = "text-white font-['Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif]",
}) {
  const screenStatus = useMediaQuery({ query: "(min-width : 1280px)" });
  const pageSizeStatus = useSelector((state) => state.auth.authPageSizeStatus);
  return (
    <div
      className={`${
        pageSizeStatus ? "h-screen overflow-hidden bg-[#242D34] w-screen" : ""
      }`}
    >
      <Outlet />
      <div
        className="grid md:mr-auto sm:mx-[15%] lg:mx-0 
        lg:w-[99dvw] lg:gap-0 lg:justify-items-center items-center gap-3 
        mt-[1rem] mb-[4rem] lg:overflow-hidden lg:items-center 
        lg:grid-cols-2"
      >
        <header className="grid justify-items-start gap-[1.5rem] w-fit">
          <img
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
            className={`${styles}  text-3xl font-bold w-fit lg:mt-[3rem] mt-[4.2rem]`}
          >
            Join today .
          </h3>
          <div
            className="grid grid-rows-[40px_40px_1px_40px] h-fit w-[20rem] 
          gap-[1rem] mt-[2rem]"
          >
            <Button calledBy="signUp" type="google" />
            <Button calledBy="signUp" type="apple" />
            <div
              className="w-full bg-gray-800 before:content-['or'] text-center
            before:h-[1.2rem] before:aspect-video before:text-white before:left-[45%] before:-bottom-[3px] before:absolute relative before:text-lg before:pb-4 before:z-10 z-0 "
            ></div>
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
          <h4 className={`${styles} my-[3rem] lg:mt-[2rem] lg:mb-[1.6rem]`}>
            Already have a account ?
          </h4>
          <Button calledBy="signIn">Sign in</Button>
        </main>
      </div>
      <div className="grid place-items-center ">
        <Footer styles=" font-['Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif]" />
      </div>
    </div>
  );
}

export default AuthenticatingPage;
