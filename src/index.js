import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Router } from "@reach/router";
import Home from "./pages/home";
import MigTooFig from "./pages/projects/MigTooFig";
import ExpCar from "./pages/projects/ExpCar";

const Navigator = () => {
  return (
    <Router>
      <Home path="/" />
      <MigTooFig path="/migration-tools-figma" />
      <ExpCar path="/expedia-cars-redesign" />
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Navigator />, rootElement);
