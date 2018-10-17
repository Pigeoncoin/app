import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// import HomeScreen from './screens/HomeScreen';
import UserScreen from "./screens/UserScreen";

ReactDOM.render(<UserScreen />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
