import * as React from "react";
import AppBar from "../components/AppBar";
import NavBar from "../components/NavBar";

export interface Props {}

function HomeScreen({  }: Props) {
  return (
    <div>
      <AppBar title="Feed" />
      <NavBar />
    </div>
  );
}

export default HomeScreen;
