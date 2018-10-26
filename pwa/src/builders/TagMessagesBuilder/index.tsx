import * as React from "react";
import { TagMessage } from "../../types";

import * as firebase from "firebase/app";
import "firebase/database";

export interface Props {
  tag: string;
  onMessage: () => void;
  children: (m: TagMessage) => React.ReactNode;
}

interface State {
  messages: TagMessage[] | null;
}

class TagMessagesBuilder extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { messages: null };
  }

  componentDidMount() {
    firebase
      .database()
      .ref(`/tags/${this.props.tag}`)
      .limitToLast(50)
      .on("value", snaps => {
        const messages: TagMessage[] = [];

        if (!!snaps) {
          snaps.forEach(snap => {
            const message: TagMessage = snap.val();
            messages.push(message);
          });

          this.setState({ messages });
        }

        this.props.onMessage();
      });
  }

  componentDidUpdate() {
    this.props.onMessage();
  }

  render() {
    const { children } = this.props;
    const { messages } = this.state;

    if (!!messages) {
      return messages.map(m => children(m));
    }

    return <div>loading...</div>;
  }
}

export default TagMessagesBuilder;
