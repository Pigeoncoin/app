import "./firebase";

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import TagListScreen from "./screens/TagListScreen";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/user" component={UserScreen} />
      <Route exact path="/tags" component={TagListScreen} />
      <Route exact path="/tag/:tag" component={HomeScreen} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
