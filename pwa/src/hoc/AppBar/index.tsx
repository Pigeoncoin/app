import * as React from "react";
import Icon from "../../components/Icon";
import Avatar from "../../components/Avatar";

import "./style.css";

export interface Props {
  title: string;
  child?: React.ReactNode;
  back?: boolean;
}

function AppBar({ title, child, back }: Props) {
  return (
    <div id="AppBar">
      {back ? (
        <Icon selector="chevron-left" />
      ) : (
        <Avatar
          radius={18}
          src="https://randomuser.me/api/portraits/men/72.jpg"
        />
      )}
      {child || <span>{title}</span>}
      <Icon selector="rocket" />
    </div>
  );
}

export default AppBar;
