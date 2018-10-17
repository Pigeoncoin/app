import * as React from "react";
import "./style.css";

export interface Props {
  children: React.ReactNode;
}

function SafeArea({ children }: Props) {
  return <div className="SafeArea">{children}</div>;
}

export default SafeArea;
