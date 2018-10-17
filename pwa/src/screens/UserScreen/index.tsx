import * as React from "react";
import "./style.css";

import AppBar from "../../hoc/AppBar";
import UserSummary from "../../hoc/UserSummary";
import SafeArea from "../../components/SafeArea";

export interface Props {}

function UserScreen({  }: Props) {
  return (
    <div>
      <AppBar back title="Settings" />
      <SafeArea>
        <UserSummary />
      </SafeArea>
    </div>
  );
}

export default UserScreen;
