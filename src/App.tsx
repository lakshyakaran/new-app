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
import DialogComponent from "./DialogComponent";
import CardComponent from "./CardComponent";
import SearchComponent from "./SearchComponent";
import ListComponent from "./ListComponent";

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <div style={{display:"flex"}}>
        <div>
          <NavBar />
        </div>
        <div style={{width:'100%'}}>
            <Switch>
              <Route exact path="/" component={CommandList} />
              <Route exact path="/combo" component={Combo} />
              <Route exact path="/choice" component={Choice} />
              <Route exact path="/dialog" component={DialogComponent} />
              <Route exact path="/card" component={CardComponent} />
              <Route exact path="/search" component={SearchComponent} />
              <Route exact path="/list" component={ListComponent} />
            </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}