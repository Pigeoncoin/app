import * as React from "react";
import "./style.css";

export interface Props {
  radius?: number;
  src: string;
}

function Avatar({ radius = 36, src }: Props) {
  const height = radius * 2;
  const width = height;

  return (
    <img className="Avatar" style={{ height, width }} src={src} alt="avatar" />
  );
}

export default Avatar;
