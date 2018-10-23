import * as React from "react";

import * as firebase from "firebase/app";
import "firebase/auth";

import AppBar from "../../hoc/AppBar";
import ActionField from "../../hoc/ActionField";

import SafeArea from "../../components/SafeArea";

import TagMessagesBuilder from "../../builders/TagMessagesBuilder";
import { TagMessage } from "../../builders/TagMessagesBuilder/types";
import TagMessageItem from "../../hoc/TagMessage";

export interface Props {}

interface State {
  tag: string;
  auth: string | null;
}

class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { tag: "welcome", auth: null };
  }

  async componentDidMount() {
    /// stored tag
    const storedTag = localStorage.getItem("tag");
    if (!!storedTag) {
      this.setState({ tag: storedTag });
    }

    /// login
    const result = await firebase.auth().signInAnonymously();
    const { user } = result;
    if (!!user) {
      this.setState({ auth: user.uid });
      console.log("logged in as ", user.uid);
    }
  }
  _onNewTag = (tag: string) => {
    this.setState({ tag });
    localStorage.setItem("tag", tag);
  };

  _handleSubmit = (message: string) => {
    if (!!message && !!this.state.auth) {
      const newMessage: TagMessage = {
        uid: this.state.auth,
        tag: this.state.tag,
        msg: message,
        /* tslint:disable-next-line */
        tc: firebase.database.ServerValue.TIMESTAMP as number
      };

      firebase
        .database()
        .ref(`/tags/${this.state.tag}`)
        .push()
        .set(newMessage);
    }
  };

  render() {
    const { tag } = this.state;

    return (
      <div>
        <AppBar leadingRoute="/user" title={`#${tag}`} trailing="rocket" />{" "}
        <SafeArea>
          <TagMessagesBuilder key={tag} tag={tag}>
            {m => <TagMessageItem m={m} />}
          </TagMessagesBuilder>
        </SafeArea>
        <ActionField
          tag={tag}
          onNewTag={this._onNewTag}
          onSubmit={this._handleSubmit}
        />
      </div>
    );
  }
}

export default HomeScreen;
