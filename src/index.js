import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import './index.css';

const store = createStore(reducer);

const { log } = console;
log('The state of the entire application: ', store.getState());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

module.hot.accept();