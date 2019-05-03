import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "styles/NavBar.scss";

class NavBar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <Fragment>
          <Link to="/new_post">New Post</Link>
          <Link to="/signout">Sign Out</Link>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </Fragment>
      )
    }
  }

  render() {
    return (
      <nav className="NavBar">
        <div className="row">
          <Link className="NavBar__home" to="/">Cafe Caligraphy</Link>
          <div className="NavBar__main">
            {this.renderLinks()}
          </div>
        </div>
      </nav>
    );
  };
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(NavBar);