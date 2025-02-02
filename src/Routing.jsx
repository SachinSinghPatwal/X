import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AuthenticatingPage,
  CreateAccount,
  Protected,
  Home,
  AllPost,
  ForYou,
  SignIn,
  App,
} from "./Component/index.js";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="AuthenticatingPage"
          element={
            <Protected>
              <AuthenticatingPage />
            </Protected>
          }
        >
          <Route path="CreateAccount" element={<CreateAccount />} />
          <Route path="SignIn" element={<SignIn />} />
        </Route>
        <Route
          path="Home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        >
          <Route path="allpost" element={<AllPost />}>
            <Route index element={<ForYou />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default Routing;
