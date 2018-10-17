import * as React from "react";
import "./style.css";

export interface Props {
  title: string;
  value: string | number;
}

function Stat({ title, value }: Props) {
  return (
    <div className="Stat">
      <div className="value">{value}</div>
      <div className="title">{title}</div>
    </div>
  );
}

export default Stat;
