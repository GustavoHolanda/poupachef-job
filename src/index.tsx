import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/app';
import { Provider } from 'react-redux'


import { store } from './store/store'


const rootElement = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
