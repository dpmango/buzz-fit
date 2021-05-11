import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/features/array/from';
import 'core-js/features/number/is-nan';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.sass';

viewportUnitsBuggyfill.init({ force: true, refreshDebounceWait: 250 });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
