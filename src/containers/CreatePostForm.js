import React, { Component } from 'react';
import requireAuth from './requireAuth';

class CreatePostForm extends Component {
  render() {
    return(
      <div>Post Create Form</div>
    );
  }
}

export default requireAuth(CreatePostForm);