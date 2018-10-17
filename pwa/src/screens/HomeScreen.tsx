import * as React from "react";

import AppBar from "../components/AppBar";
import NavBar from "../components/NavBar";

import TextInput from "../components/TextInput";

export interface Props {}

function HomeScreen({  }: Props) {
  return (
    <div>
      <AppBar title="Feed" />
      <div style={{ marginTop: 48 + 8 }}>
        <TextInput width={200} />
      </div>
      <NavBar />
    </div>
  );
}

export default HomeScreen;
