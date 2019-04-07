import React, { Component } from 'react';
import Header from 'containers/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { clearFlashMessage } from 'actions/flashMessageActions';

class App extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.clearFlashMessage();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <hr/>
        <h1>Cafe Caligraphy</h1>
        { this.props.children }
      </div>
    );
  }
};

export default withRouter(connect(null, { clearFlashMessage })(App));