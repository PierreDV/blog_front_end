import React, { Component } from 'react';
import Header from 'containers/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { clearErrorMessage } from 'actions/errorMessageActions';

class App extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.clearErrorMessage();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <hr/>
        { this.props.children }
      </div>
    );
  }
};

export default withRouter(connect(null, { clearErrorMessage })(App));