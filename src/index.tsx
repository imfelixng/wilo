import React from 'react';
import ReactDOM from 'react-dom';

import App from './root_app';
import * as serviceWorker from './serviceWorker';

import '@elastic/eui/dist/eui_theme_light.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
