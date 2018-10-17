import * as React from "react";
import "./style.css";

export interface Props {
  selector: string;
}

function Icon({ selector }: Props) {
  return (
    <svg className={`lnr lnr-${selector}`}>
      <use xlinkHref={`#lnr-${selector}`} />
    </svg>
  );
}

export default Icon;
