import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/database";

import { TagSummary } from "src/types";

interface Props {
  children: (t: TagSummary) => React.ReactNode;
}

interface State {
  tags?: TagSummary[];
}

class TagListBuilder extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    firebase
      .database()
      .ref("/tagsList")
      .orderByChild("count")
      .limitToLast(20)
      .on("value", snaps => {
        const tags: TagSummary[] = [];

        if (!!snaps) {
          snaps.forEach(snap => {
            tags.push({ ...snap.val(), tag: snap.key });
          });

          this.setState({ tags });
        }
      });
  }

  render() {
    const { children } = this.props;
    const { tags } = this.state;

    if (!!tags) {
      return tags.map(t => children(t));
    }
    return <div>loading...</div>;
  }
}

export default TagListBuilder;
