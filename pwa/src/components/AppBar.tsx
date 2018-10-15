import * as React from "react";
import Icon from "./Icon";

import "./AppBar.css";

export interface Props {
  title: string;
}

function AppBar({ title }: Props) {
  return (
    <div id="AppBar">
      <Icon selector="user" />
      <span>{title}</span>
      <Icon selector="rocket" />
    </div>
  );
}

export default AppBar;
