import * as React from "react";
import { TagMessage } from "../../types";

import { distanceInWordsToNow as formatDate } from "date-fns";

export interface Props {
  m: TagMessage;
}

function TagMessage({ m }: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>{m.uid.slice(0, 4)} </span>
        <span style={styles.timestamp}>{formatDate(m.tc)} ago</span>
      </div>
      <div>{m.msg}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: "100%",
    borderBottom: "0.5px solid #eee",
    padding: 6
  },
  header: {
    marginBottom: 4
  },
  title: {
    fontSize: 16,
    fontWeight: 600
  },
  timestamp: {
    fontSize: 12,
    color: "#777"
  }
};

export default TagMessage;
