import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../containers/Home';
import Post from '../containers/Post';

export const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>

        <hr/>
        <Route exact path='/' component={Home} />
        <Route path='/blog_posts/:id' component={Post} />
      </div>
    </Router>
  )
}

