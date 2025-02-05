// import BingeLandingComponent from "./components/BingeLandingComponent";

// export default BingeLandingComponent;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PortalProvider from "./components/PortalProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import palette from "./theme/palette";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={createTheme({ palette })}>
    <PortalProvider>
      <App />
    </PortalProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
