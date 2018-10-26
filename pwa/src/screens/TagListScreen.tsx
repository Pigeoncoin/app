import * as React from "react";
import TagListBuilder from "src/builders/TagListBuilder";
import AppBar from "src/hoc/AppBar";
import SafeArea from "src/components/SafeArea";

interface Props {}

interface State {}

class TagListScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.props;

    return (
      <div>
        <AppBar back leadingRoute="/home" title="Tags" />
        <SafeArea>
          <TagListBuilder>
            {t => (
              <div style={styles.container} key={t.tag}>
                <span style={styles.count}>{t.count}</span>
                <span style={styles.tag}>#{t.tag}</span>
                <span>{t.msg}</span>
              </div>
            )}
          </TagListBuilder>
        </SafeArea>
      </div>
    );
  }
}

export default TagListScreen;

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: 32,
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  count: {
    minWidth: 36,
    textAlign: "right",
    marginRight: 12
  },
  tag: {
    marginRight: 12
  }
};
