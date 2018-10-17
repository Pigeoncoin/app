import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// import HomeScreen from './screens/HomeScreen';
import SettingsScreen from "./screens/SettingsScreen";

ReactDOM.render(<SettingsScreen />, document.getElementById(
  "root"
) as HTMLElement);
registerServiceWorker();
