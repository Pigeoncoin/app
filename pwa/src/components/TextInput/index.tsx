import * as React from "react";
import "./style.css";

export interface Props {
  width?: string | number | undefined;
  placeholder?: string;
}

interface State {}

class TextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { width = 180, placeholder = "Search" } = this.props;

    return (
      <div className="TextInput" style={{ width }}>
        <input type="text" placeholder={placeholder} />
      </div>
    );
  }
}

export default TextInput;
