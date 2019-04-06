import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import '@babel/polyfill';

import rootReducer from './reducers/rootReducer';
import App from './containers/App';
import Home from './containers/Home';
import Post from './containers/post/Post';
import Signup from './containers/auth/Signup';
import Signout from './containers/auth/Signout';
import Signin from './containers/auth/Signin';
import Confirmation from './containers/auth/Confirmation';
import CreatePostForm from './containers/post/CreatePostForm';

let middleWare;
if(process.env.NODE_ENV !== 'production') {
  middleWare = [reduxThunk, logger]
} else {
  middleWare = [reduxThunk]
}

export default({ initialState={} }) => {
  const store= createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleWare)
  );

  return(
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Route path='/signout' component={Signout} />
          <Route path='/new_post' component={CreatePostForm} />
          <Route path='/blog_posts/:id' component={Post} />
          <Route path='/confirmation' component={Confirmation} />
        </App>
      </BrowserRouter>
    </Provider>
  );
};