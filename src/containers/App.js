import React, { Component, Fragment } from 'react';
import NavBar from 'containers/NavBar';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { clearFlashMessage } from 'actions/flashMessageActions';

class App extends Component {
  // considered UNSAFE, find new implementation
  componentWillUpdate(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.clearFlashMessage();
    }
  }

  render() {
    return (
      <Fragment>
        {(this.props.location.pathname !== '/') && <NavBar />}
        { this.props.children }
      </Fragment>
    );
  }
};

export default withRouter(connect(null, { clearFlashMessage })(App));