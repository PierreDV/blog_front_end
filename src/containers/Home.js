import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPostLinks } from '../actions/index';
import { PostList } from '../components/PostList';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPostLinks();
  }
  render() {
    const posts = this.props.posts;
    return(
      <div>
        { posts.links.length === 0 || posts.isFetching 
          ? <p>loading...</p> 
          : <PostList posts={posts}/>
        }
      </div>
    ); 
  } 
}

const mapStateToProps = ({ posts }) => {
  return { posts };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPostLinks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);