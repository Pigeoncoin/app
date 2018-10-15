import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import HomeScreen from './screens/HomeScreen';

ReactDOM.render(
  <HomeScreen />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
