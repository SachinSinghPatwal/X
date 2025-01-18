import React from "react";
import google from "../../Public/google.svg";
function SignUp() {
  return (
    <>
      <div className="text-black font-semibold grid grid-cols-[85%_15%] justify-items-center items-center gap-[.1rem]">
        Sign up with Gmail
        <span>
          <img width="30px" src={google} alt="google" />
        </span>
      </div>
    </>
  );
}

export default SignUp;
