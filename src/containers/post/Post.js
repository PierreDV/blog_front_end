import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from 'actions/postActions';
import ReactMarkdown from 'react-markdown';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    const posts = this.props.posts;
    if (posts.errorMessage) {
      return (
        <div>{posts.errorMessage}</div>
      );
    }
    return(
      <div>
        { !posts.activePost || posts.isFetching 
          ? <p>...loading</p> 
          : <div>
              <h2>{posts.activePost.title}</h2>
              <ReactMarkdown source={posts.activePost.body_text} />
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