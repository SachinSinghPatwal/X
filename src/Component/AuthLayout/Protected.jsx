import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../index";
import { useSelector } from "react-redux";
function Protected({ authentication = !true, children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  // we have changed the value in main Home element !true changed value here !true and in App !userData remove those to get the proper effect

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      console.log("logout");
      navigate("/AuthenticatingPage");
    } else if (!authentication && authStatus !== authentication) {
      console.log("login");
      navigate("/Home/allpost");
    }
    setLoading(false);
    console.log("protected called");
  }, [authentication, authStatus]);
  return loading ? <Loader bg="#050505" /> : <>{children}</>;
}
export default Protected;
