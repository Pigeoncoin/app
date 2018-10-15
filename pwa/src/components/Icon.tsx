import * as React from "react";

export interface Props {
  selector: string;
}

function Icon({ selector }: Props) {
  return (
    <svg className={`lnr lnr-${selector}`} style={style}>
      <use xlinkHref={`#lnr-${selector}`} />
    </svg>
  );
}

const style: React.CSSProperties = {
  height: 24,
  width: 24
};

export default Icon;
