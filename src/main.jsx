import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Routing from "./Routing.jsx";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
        <Analytics/>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
