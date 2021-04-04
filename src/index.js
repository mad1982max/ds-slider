import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserProvider from "./Providers/UserProvider";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
