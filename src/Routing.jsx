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
  IndividualPost,
} from "./Component/index.js";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="AuthenticatingPage" element={<AuthenticatingPage />}>
          <Route
            path="CreateAccount"
            element={
              <Protected>
                <CreateAccount />
              </Protected>
            }
          />
          <Route path="SignIn" element={<SignIn />} />
        </Route>
        <Route path="Home" element={<Home />}>
          <Route path="allpost" element={<AllPost />}>
            <Route index element={<ForYou />} />
          </Route>
        </Route>
        <Route path=":slug" element={<IndividualPost />} />
      </Route>
    </Routes>
  );
}

export default Routing;
