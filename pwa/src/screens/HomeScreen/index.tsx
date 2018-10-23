import * as React from "react";

import AppBar from "../../hoc/AppBar";
import ActionField from "../../hoc/ActionField";

import SafeArea from "../../components/SafeArea";

export interface Props {}

interface State {
  tag: string;
}

class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { tag: "#all" };
  }

  _onNewTag = (tag: string) => {
    this.setState({ tag });
    localStorage.setItem("tag", tag);
  };

  componentDidMount() {
    const storedTag = localStorage.getItem("tag");
    if (!!storedTag) {
      this.setState({ tag: storedTag });
    }
  }

  render() {
    const { tag } = this.state;

    return (
      <div>
        <AppBar leadingRoute="/user" title={tag} trailing="rocket" />
        <SafeArea>
          <br />
        </SafeArea>
        <ActionField tag={tag} onNewTag={this._onNewTag} />
      </div>
    );
  }
}

export default HomeScreen;
