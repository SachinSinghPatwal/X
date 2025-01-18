import React from "react";
import { CreateAccount, SignUp } from "../../index";
import Logo from "../../../Public/Logo.svg";
function AuthenticatingPage() {
  return (
    <>
      <div className="grid ml-[15%] gap-3 mt-[2rem]">
        <header className="grid justify-items-start gap-[3rem]">
          <img
            className="w-[6.5rem] aspect-square -ml-3 "
            src={Logo}
            alt="logo"
            style={{ filter: "invert(100%)" }}
          />
          <h1 className="text-white font- text-7xl font-['Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif] font-semibold">
            Start Yapping <br />
            now
          </h1>
        </header>
        <main className="grid mt-[3rem]">
          <h3 className="text-white font-[Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif] text-3xl font-bold">
            Join today .
          </h3>
          <div className="grid grid-rows-[42px_1px_42px] h-[16vh] w-[20rem] gap-[1rem] mt-[2.5rem]">
            <div className="grid w-full rounded-full place-items-center bg-white hover:cursor-pointer">
              <SignUp />
            </div>
            <div
              className="w-full bg-gray-800 before:content-['or'] text-center
            before:h-[1.2rem] before:aspect-video before:text-white before:left-[45%] before:-bottom-[3px] before:absolute relative before:text-lg before:pb-4 "
            ></div>
            <div
              className="grid rounded-full text-white w-full bg-[#1A8CD8] 
            place-items-center hover:cursor-pointer"
            >
              <CreateAccount />
            </div>
          </div>
        </main>
        <p className="text-white text-[12px] ml-[1px]">
          By signing up, you agree to the{" "}
          <span className="text-[#1A8CD8] hover:cursor-pointer">
            Terms of Service{" "}
          </span>
          and{" "}
          <span className="text-[#1A8CD8] hover:cursor-pointer">
            Privacy <br /> Policy
          </span>{" "}
          <span className="text-[#1A8CD8] hover:cursor-pointer">
            including Cookie
          </span>{" "}
          Use.
        </p>
        <h4 className="text-white mt-[1.7rem] font-bold font-[Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif]">
          Already have a account ?
        </h4>
        <button>Sign in</button>
      </div>
    </>
  );
}

export default AuthenticatingPage;
