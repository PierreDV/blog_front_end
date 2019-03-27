import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import '@babel/polyfill';

import rootReducer from 'reducers/rootReducer';
import App from 'components/App';
import Home from './containers/Home';
import Post from './containers/Post';
import Signup from './containers/auth/Signup';
import Signout from './containers/auth/Signout';
import CreatePostForm from './containers/CreatePostForm';

export default({ initialState={} }) => {
  const store= createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk, logger)
  );

  return(
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/signout' component={Signout} />
          <Route path='/new_post' component={CreatePostForm} />
          <Route path='/blog_posts/:id' component={Post} />
        </App>
      </BrowserRouter>
    </Provider>
  );
};