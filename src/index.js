import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';

import { App } from './components/App';
import rootReducer from './reducers/rootReducer';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(promiseMiddleware))}>
    <App />
  </Provider>,
  document.getElementById('root')
);