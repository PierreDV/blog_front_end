import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
// this.props.match.id
class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    return(
      <div>{!this.props.posts.activePost || this.props.posts.isFetching ? 
        <p>...loading</p> :
        <div>
          <h2>{this.props.posts.activePost.title}</h2>
          <p>{this.props.posts.activePost.body_text}</p>
        </div>
      }</div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);