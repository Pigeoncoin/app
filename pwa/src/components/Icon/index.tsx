import * as React from "react";
import "./style.css";

export interface Props {
  selector: string;
  style?: React.CSSProperties;
}

function Icon({ selector, style }: Props) {
  return (
    <svg style={style} className={`lnr lnr-${selector}`}>
      <use xlinkHref={`#lnr-${selector}`} />
    </svg>
  );
}

export default Icon;
