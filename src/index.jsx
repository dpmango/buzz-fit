import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/features/array/from';
import 'core-js/features/number/is-nan';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';

import App from '@components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserInfo } from '@services';

import './sass/main.sass';
import { loadHubSpot } from './components/HubSpot/HubSpot';

viewportUnitsBuggyfill.init({ force: true, refreshDebounceWait: 250 });

// HubSpot script loader
loadHubSpot();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

new BrowserInfo();
