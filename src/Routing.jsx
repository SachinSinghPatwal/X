import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Profile,
  AuthenticatingPage,
  CreateAccount,
  Protected,
  Home,
  AllPost,
  Following,
  Preference,
  ForYou,
  SignIn,
  App,
} from "./Component/index.js";

function Routing() {
  return (
    <Routes>
      {/* Root route - App component */}
      <Route path="/" element={<App />}>
        {/* Protected Routes */}
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
        {/* Home Route */}
        <Route
          path="Home"
          element={
            <Protected authentication={!true}>
              {" "}
              {/* Set this according to your logic */}
              <Home />
            </Protected>
          }
        >
          {/* Nested Routes under Home */}
          <Route path="allpost" element={<AllPost />}>
            <Route index element={<ForYou />} />
            <Route path="following" element={<Following />} />
            <Route path="preferences" element={<Preference />} />
          </Route>
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Routing;
