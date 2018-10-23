import "./firebase";

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={HomeScreen} />
      <Route exact path="/user" component={UserScreen} />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
