import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  AIPage,
  Home,
  Message,
  Notification,
  SearchonNav,
  Subscription,
  Profile,
  More,
  ComposePost,
} from "./Component/index.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/Search" element={<SearchonNav />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="/Messages" element={<Message />} />
      <Route path="/AI" element={<AIPage />} />
      <Route path="/Premium" element={<Subscription />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/More" element={<More />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
