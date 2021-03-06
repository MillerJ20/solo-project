import React from "react";
import { render } from 'react-dom';
import { Provider } from "react-redux";
import App from "./Client/App.jsx";
import store from './Client/store';

render(
  <Provider store={store}> <App /> </Provider>,
  document.getElementById('contents')
);