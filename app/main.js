import React from 'react';
import { render } from 'react-dom';
import store from './store/index.js';
import { Provider } from 'react-redux';
import App from './containers/App.js';


const RootEle = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  RootEle
);
