import * as React from "react";
import Icon from "../../components/Icon";
import Avatar from "../../components/Avatar";

import "./style.css";

export interface Props {
  title: string;
  child?: React.ReactNode;
  trailing: string;
  back?: boolean;
  transparent?: boolean;
}

function AppBar({ title, child, back, transparent, trailing }: Props) {
  const className = transparent ? "transparent" : undefined;

  return (
    <div id="AppBar" className={className}>
      {back ? (
        <Icon selector="chevron-left" />
      ) : (
        <Avatar
          radius={18}
          src="https://randomuser.me/api/portraits/men/72.jpg"
        />
      )}
      {child || <span>{title}</span>}
      <Icon selector={trailing} />
    </div>
  );
}

export default AppBar;
