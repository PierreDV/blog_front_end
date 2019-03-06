import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

import { PostList } from '../components/PostList';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return(
      <div>
        {this.props.posts.items.length === 0 || this.props.posts.isFetching ? <p>loading...</p> : <PostList posts={this.props.posts}/>}
      </div>
    ) 
  } 
}

const mapStateToProps = ({ posts }) => {
  return { posts };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);