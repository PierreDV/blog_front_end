import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { fetchPosts } from '../actions/index';
import { Home } from '../components/Home';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
  
          <hr/>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);