import * as React from "react";
// import "./style.css";

import Icon from "../../components/Icon";

export interface Props {
  onNewTag: (tag: string) => void;
  onSubmit: (message: string) => void;
  tag: string;
}

interface State {}

class ActionField extends React.Component<Props, State> {
  private _ref = React.createRef<HTMLInputElement>();

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  _handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.currentTarget;
    const { onNewTag } = this.props;

    const foundTag = value.match(/^#[a-zA-Z]*\s/);
    if (foundTag) {
      const newTag = foundTag[0].trim().replace("#", "");
      ev.currentTarget.value = "";
      onNewTag(newTag);
    }
  };

  _handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      this._submit(ev.currentTarget.value);
      ev.currentTarget.value = "";
    }
  };

  _handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const textInput = this._ref.current;
    if (!!textInput) {
      if (!!textInput.value) {
        this._submit(textInput.value);
        textInput.value = "";
      }
    }
  };

  _submit = (message: string) => this.props.onSubmit(message);

  render() {
    const { tag } = this.props;
    const {} = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.tag}>
          <span>{`#${tag}`}</span>
        </div>
        <input
          ref={this._ref}
          style={styles.input}
          placeholder="What do you think?"
          type="text"
          onChange={this._handleChange}
          onKeyDown={this._handleKeyDown}
        />
        <div onClick={this._handleClick}>
          <Icon style={{ ...styles.icon, marginRight: 12 }} selector="rocket" />
        </div>
      </div>
    );
  }
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: 36,
    margin: 4,
    position: "fixed",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch"
  },
  tag: {
    backgroundColor: "cornflowerblue",
    fontSize: 16,
    color: "white",
    padding: "0px 12px",
    verticalAlign: "center",
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  input: {
    flex: 1,
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
    outline: "none",
    padding: "0px 12px",
    fontSize: 16,
    border: "1px solid transparent",
    backgroundColor: "#eee"
  },
  icon: {
    margin: 6
  }
};

export default ActionField;
