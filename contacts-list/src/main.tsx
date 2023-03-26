import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { GlobalStyle, Reset } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Reset />
      <GlobalStyle /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
