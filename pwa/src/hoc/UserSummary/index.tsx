import * as React from "react";
import "./style.css";

import Avatar from "../../components/Avatar";
import Stat from "../../components/Stat";

export interface Props {}

function UserSummary({  }: Props) {
  return (
    <div className="UserSummary">
      <Avatar
        radius={48}
        src="https://randomuser.me/api/portraits/men/72.jpg"
      />
      <div className="title">John Doe</div>
      <div className="stats">
        <Stat title="followers" value={23} />
        <Stat title="last seen" value="23m" />
        <Stat title="following" value={324} />
      </div>
    </div>
  );
}

export default UserSummary;
