import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    const posts = this.props.posts;
    return(
      <div>
        { !posts.activePost || posts.isFetching 
          ? <p>...loading</p> 
          : <div>
              <h2>{posts.activePost.title}</h2>
              <p>{posts.activePost.body_text}</p>
            </div>
        }
      </div>
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