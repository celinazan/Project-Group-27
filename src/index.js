import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
<link
  href="https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise"
  rel="stylesheet"
  type="text/css"
/>;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
