import * as React from "react";
import "./style.css";

import AppBar from "../../hoc/AppBar";
import UserSummary from "../../hoc/UserSummary";

export interface Props {}

function UserScreen({  }: Props) {
  return (
    <div>
      <AppBar transparent back title="Settings" />
      <UserSummary />
    </div>
  );
}

export default UserScreen;
