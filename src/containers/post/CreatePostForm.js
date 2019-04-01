import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ReactMDE from 'redux-forms-markdown-editor';
import { compose } from 'redux';
import { connect } from 'react-redux';
import requireAuth from 'containers/requireAuth';
import { createPost } from 'actions/postActions';

class CreatePost extends Component {
  onSubmit = formProps => {
    this.props.createPost(formProps, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Title</label>
          <Field
            name="title"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Body</label>
          <Field 
            name="body_text"
            type="text"
            component={ReactMDE}
            autoComplete="none"
          />
        </fieldset>
        <div>
          {this.props.errorMessage}
        </div>
        <button>Create Post</button>
      </form>
    );
  }
} 

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, { createPost }),
  reduxForm({ form: 'createPost' })
)(requireAuth(CreatePost));