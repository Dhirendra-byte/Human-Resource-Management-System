import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Controller from "./Controller";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Controller />
  </StrictMode>,
  rootElement
);
