import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../containers/Home';
import Header from './Header';
import Post from '../containers/Post';

export default () => {
  return (
    <Router>
      <div>
        <Header />

        <hr/>
        <Route exact path='/' component={Home} />
        <Route path='/blog_posts/:id' component={Post} />
      </div>
    </Router>
  )
}

