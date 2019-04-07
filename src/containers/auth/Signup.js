import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signup } from 'actions/authActions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field 
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>
          {this.props.flashMessage}
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
} 

function mapStateToProps(state) {
  return { flashMessage: state.flashMessage.message };
}

export default compose(
  connect(mapStateToProps, { signup }),
  reduxForm({ form: 'signup' })
)(Signup);