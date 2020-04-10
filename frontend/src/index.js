import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";

import appStore from "./components/app/stores/AppStore";
import App from "./components/app/App";

ReactDOM.render(
  <Provider appStore={appStore}>
    <App />
  </Provider>, document.getElementById('root'));