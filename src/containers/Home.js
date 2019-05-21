import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostLinks } from 'actions/postActions';
import 'styles/Home.scss';

import PostList from 'components/PostList';
import NavBar from 'containers/NavBar';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPostLinks();
  }

  render() {
    const { flashMessage, posts } = this.props;

    return(
      <div className="Home">
        <NavBar />
        <div className="Home__text-box">
          <h1 className="Home__header">Cafe Caligraphy</h1>
          <h2 className="Home__sub_heading">
            A JavaScript and Dev Culture Blog
          </h2>
        </div>
        <div>{flashMessage.message}</div>
        { posts.isFetching 
          ? <p>loading...</p> 
          : <PostList posts={posts}/>
        }
      </div>
    ); 
  };
};

function mapStateToProps({ posts, flashMessage }){
  return  { posts, flashMessage };
} 

export default connect(mapStateToProps, { fetchPostLinks })(Home);