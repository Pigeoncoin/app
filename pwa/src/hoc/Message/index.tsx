import * as React from "react";
import "./style.css";

import Avatar from "../../components/Avatar";

export interface Props {
  avatarUrl: string;
  name: string;
  text: string;
  time: string;
}

function Message({ avatarUrl, name, text, time }: Props) {
  return (
    <div className="Message">
      <Avatar radius={16} src={avatarUrl} />
      <div className="column">
        <div className="row">
          <div className="name">{name}</div>
          <div className="time">{time}</div>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

export default Message;
