import * as React from "react";

import AppBar from "../hoc/AppBar";
import NavBar from "../hoc/NavBar";

import SafeArea from "../components/SafeArea";
import TextInput from "../components/TextInput";

export interface Props {}

function HomeScreen({  }: Props) {
  return (
    <div>
      <AppBar
        leadingRoute="/user"
        title="Feed"
        child={<TextInput width={180} />}
        trailing="rocket"
      />
      <SafeArea>
        <br />
      </SafeArea>
      <NavBar />
    </div>
  );
}

export default HomeScreen;
