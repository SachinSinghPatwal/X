import React from "react";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-white absolute bg-green-700 h-[5rem] aspect-square">
        signIn
        <button onClick={() => navigate("/")}>x</button>
      </div>
    </>
  );
}

export default SignIn;
