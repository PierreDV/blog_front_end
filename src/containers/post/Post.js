import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { fetchPost } from 'actions/postActions';
import ReactMarkdown from 'react-markdown';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    const { posts } = this.props;
    if (posts.errorMessage) {
      return (
        <div>{posts.errorMessage}</div>
      );
    }
    return(
      <div>
        { !posts.activePost || posts.isFetching 
          ? <p>...loading</p> 
          : <Fragment>
              <h2>{posts.activePost.title}</h2>
              <ReactMarkdown source={posts.activePost.body_text} />
            </Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
}

export default connect(mapStateToProps, { fetchPost })(Post);