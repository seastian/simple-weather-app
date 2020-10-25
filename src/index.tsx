import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "fontsource-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "./app/store";
import { Provider } from "react-redux";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
