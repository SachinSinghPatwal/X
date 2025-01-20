import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  AIPage,
  Layout,
  Message,
  Notification,
  SearchonNav,
  Subscription,
  Profile,
  More,
  AuthenticatingPage,
  CreateAccount,
  SignUpGoogle,
  SignUpApple,
  Home,
} from "./Component/index.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./Component/AppNavigation/Pages/SignIn.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="AuthenticatingPage" element={<AuthenticatingPage />} />
        <Route path="SignUpGoogle" element={<SignUpGoogle />} />
        <Route path="SignUpApple" element={<SignUpApple />} />
        <Route path="CreateAccount" element={<CreateAccount />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="Home" element={<Home />} />
        <Route path="Layout" element={<Layout />} />
        <Route path="Search" element={<SearchonNav />} />
        <Route path="Notification" element={<Notification />} />
        <Route path="Messages" element={<Message />} />
        <Route path="AI" element={<AIPage />} />
        <Route path="Premium" element={<Subscription />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="More" element={<More />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
