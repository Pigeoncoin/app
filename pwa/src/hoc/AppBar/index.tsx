import * as React from "react";
import { NavLink } from "react-router-dom";

import Icon from "../../components/Icon";
import Avatar from "../../components/Avatar";

import "./style.css";

export interface Props {
  leadingRoute?: string;
  title: string;
  child?: React.ReactNode;
  trailing: string;
  back?: boolean;
  transparent?: boolean;
}

function AppBar({
  leadingRoute = "/home",
  title,
  child,
  back,
  transparent,
  trailing
}: Props) {
  const className = transparent ? "transparent" : undefined;

  return (
    <div id="AppBar" className={className}>
      <NavLink to={leadingRoute}>
        {back ? (
          <Icon selector="chevron-left" />
        ) : (
          <Avatar
            radius={18}
            src="https://randomuser.me/api/portraits/men/72.jpg"
          />
        )}
      </NavLink>

      {child || <span>{title}</span>}
      <Icon selector={trailing} />
    </div>
  );
}

export default AppBar;
