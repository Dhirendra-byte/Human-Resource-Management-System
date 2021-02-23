import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Controller from "./Controller";
import "./index.css";
import "./style/main.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Controller />
  </StrictMode>,
  rootElement
);
