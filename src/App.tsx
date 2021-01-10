import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  DefaultButton,
  PrimaryButton,
  Stack,
  IStackTokens,
  CompoundButton,
} from "office-ui-fabric-react";
import CommandList from "./CommandList";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Combo from "./Combo";
import Choice from "./Choice";

export default function App() {
  return (
    <BrowserRouter>
    <div className="ms-Fabric">
      <div style={{ display: "flex" }}>
        <div className="ms-Grid-col ms-lg2">
          <NavBar />
        </div>
        <div className="ms-Grid-col ms-lg10">
            <Switch>
              <Route exact path="/" component={CommandList} />
              <Route exact path="/combo" component={Combo} />
              <Route exact path="/choice" component={Choice} />
            </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}