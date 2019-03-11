import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers/rootReducer';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(ReduxThunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);