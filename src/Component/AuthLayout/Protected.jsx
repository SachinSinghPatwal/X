import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../index";
import { useSelector } from "react-redux";
function Protected({ authentication = true, children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/AuthenticatingPage");
    } else if (!authentication && authStatus !== authentication) {
      navigate("../../Home/allpost");
    }
    setLoading(false);
  }, [authentication, authStatus]);
  return loading ? <Loader bg="#050505" /> : <>{children}</>;
}
export default Protected;
