import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./AppwriteServices/Auth/Auth";
import { logout, login } from "./store/authSlice";
import { Layout, AuthenticatingPage, Loader } from "./Component";
function App() {
  const [loading, setLoading] = useState(true);
  let userAuthStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userAuthStatus]);
  if (loading) {
    return <Loader bg="#050505" />;
  }
  if (userAuthStatus) {
    return <Layout />;
  }
  return (
    <AuthenticatingPage styles="text-white font-['Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif]" />
  );
}
export default App;
