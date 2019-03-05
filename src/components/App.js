import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import { TestPage } from './TestPage';

export const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test_page">Test Page</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route exact path="/test_page" component={TestPage}/>
      </div>
    </Router>
  )
}