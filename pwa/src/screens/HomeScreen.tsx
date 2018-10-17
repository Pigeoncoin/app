import * as React from "react";

import AppBar from "../hoc/AppBar";
import NavBar from "../hoc/NavBar";

import Avatar from "../components/Avatar";

import TextInput from "../components/TextInput";

export interface Props {}

function HomeScreen({  }: Props) {
  return (
    <div>
      <AppBar title="Feed" child={<TextInput width={180} />} />
      <div style={{ marginTop: 48 + 8 }}>
        <Avatar src="https://randomuser.me/api/portraits/men/72.jpg" />
      </div>
      <NavBar />
    </div>
  );
}

export default HomeScreen;
