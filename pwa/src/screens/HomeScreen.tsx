import * as React from "react";

import AppBar from "../hoc/AppBar";
import NavBar from "../hoc/NavBar";

import SafeArea from "../components/SafeArea";
import Avatar from "../components/Avatar";
import TextInput from "../components/TextInput";

export interface Props {}

function HomeScreen({  }: Props) {
  return (
    <div>
      <AppBar
        title="Feed"
        child={<TextInput width={180} />}
        trailing="rocket"
      />
      <SafeArea>
        <Avatar src="https://randomuser.me/api/portraits/men/72.jpg" />
      </SafeArea>
      <NavBar />
    </div>
  );
}

export default HomeScreen;
