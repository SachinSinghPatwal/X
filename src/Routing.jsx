import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AIPage,
  Message,
  Notification,
  SearchonNav,
  Subscription,
  Profile,
  More,
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
            <Route index path="foryou" element={<ForYou />} />
            <Route path="following" element={<Following />} />
            <Route path="preferences" element={<Preference />} />
          </Route>
          <Route path="Search" element={<SearchonNav />} />
          <Route path="Messages" element={<Message />} />
          <Route path="AI" element={<AIPage />} />
          <Route path="Premium" element={<Subscription />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="More" element={<More />} />
          <Route path="Notification" element={<Notification />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Routing;
