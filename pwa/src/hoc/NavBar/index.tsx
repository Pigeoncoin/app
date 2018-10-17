import * as React from "react";
import Icon from "../../components/Icon";

import { NavLink } from "react-router-dom";

import "./style.css";

export interface Props {}

function NavBar({  }: Props) {
  return (
    <div id="NavBar">
      <NavLink to="/home">
        <Icon selector="home" />
      </NavLink>
      <Icon selector="magnifier" />
      <Icon selector="alarm" />
      <Icon selector="envelope" />
    </div>
  );
}

export default NavBar;
