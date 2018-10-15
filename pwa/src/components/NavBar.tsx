import * as React from "react";
import Icon from "../components/Icon";

import "./NavBar.css";

export interface Props {}

function NavBar({  }: Props) {
  return (
    <div id="NavBar">
      <Icon selector="home" />
      <Icon selector="magnifier" />
      <Icon selector="alarm" />
      <Icon selector="envelope" />
    </div>
  );
}

export default NavBar;
