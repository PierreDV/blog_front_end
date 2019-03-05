const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsRequest());
    fetch('http://localhost:8080/api/v1/blog_posts/')
      .then(res => res.json())
      .then(res => {
        dispatch(fetchPostsSuccess(res));
      })
  }
}

const fetchPostsRequest = () => {
  return { type: FETCH_POSTS_REQUEST }
}

const fetchPostsSuccess = (response) => {
  return { 
    type: FETCH_POSTS_SUCCESS,
    payload: response
  }
}