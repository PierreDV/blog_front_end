import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { confirmEmail } from 'actions/authActions';

class Confirmation extends Component {
  componentDidMount() {
    const { token } = queryString.parse(this.props.location.search);
    this.props.confirmEmail(token, () => {
      this.props.history.push('/');
    });
  }
  render() {
    return <div>Confirming your email ...</div>
  }
}

export default connect(null, { confirmEmail })(Confirmation)