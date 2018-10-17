import * as React from "react";
import "./style.css";

import AppBar from "../../hoc/AppBar";
import UserSummary from "../../hoc/UserSummary";
import Message from "../../hoc/Message";

export interface Props {}

function UserScreen({  }: Props) {
  return (
    <div>
      <AppBar transparent back title="Settings" trailing="cog" />
      <UserSummary />
      <Message
        avatarUrl="https://randomuser.me/api/portraits/men/31.jpg"
        name="Joe Liam"
        text="Sup man! Hope things are well."
        time="2m ago"
      />
      <Message
        avatarUrl="https://randomuser.me/api/portraits/women/59.jpg"
        name="Melinda Olson"
        text="Hey ducky! 🐤"
        time="1d ago"
      />
      <Message
        avatarUrl="https://randomuser.me/api/portraits/men/71.jpg"
        name="Aiden Murphy"
        text="You around tomorrow?"
        time="3d ago"
      />
      <Message
        avatarUrl="https://randomuser.me/api/portraits/men/39.jpg"
        name="Billie Edwards"
        text="Lorem ipsum sit delor amet."
        time="3d ago"
      />
      <Message
        avatarUrl="https://randomuser.me/api/portraits/men/12.jpg"
        name="Joe Rancher"
        text="Lorem ipsum sit delor amet."
        time="3d ago"
      />
      <Message
        avatarUrl="https://randomuser.me/api/portraits/women/14.jpg"
        name="Melissa Danderman"
        text="Lorem ipsum sit delor amet."
        time="3d ago"
      />
      <Message
        avatarUrl="https://randomuser.me/api/portraits/men/15.jpg"
        name="Rick Darstable"
        text="Lorem ipsum sit delor amet."
        time="3d ago"
      />
    </div>
  );
}

export default UserScreen;
