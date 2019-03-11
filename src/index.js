import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import '@babel/polyfill';

import rootReducer from './reducers/rootReducer';
import App from './components/App';
import Home from './containers/Home';
import Post from './containers/Post';
import Signup from './containers/auth/Signup';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(ReduxThunk))}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path='/blog_posts/:id' component={Post} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);