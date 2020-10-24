import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "fontsource-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
