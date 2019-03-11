import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

import App from './components/App';
import Home from './containers/Home';
import Post from './containers/Post';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(ReduxThunk))}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Home} />
        <Route path='/blog_posts/:id' component={Post} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);