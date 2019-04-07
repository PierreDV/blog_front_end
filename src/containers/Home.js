import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostLinks } from 'actions/postActions';
import PostList from 'components/PostList';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPostLinks();
  }
  render() {
    const { flashMessage, posts } = this.props;

    return(
      <div>
        <div>{flashMessage.message}</div>
        { posts.isFetching 
          ? <p>loading...</p> 
          : <PostList posts={posts}/>
        }
      </div>
    ); 
  };
};

const mapStateToProps = ({ posts, flashMessage }) => {
  return { posts, flashMessage };
};

export default connect(mapStateToProps, { fetchPostLinks })(Home);