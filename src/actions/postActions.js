import {
  FETCH_POST_LINKS_REQUEST,
  FETCH_POST_LINKS_SUCCESS,
  FETCH_POST_LINKS_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR
} from './types';

export const fetchPostLinks = () => dispatch => {
  dispatch({ type: FETCH_POST_LINKS_REQUEST });
  fetch('http://localhost:8080/api/v1/blog_posts/links')
    .then(res => res.json())
    .then(res => {
      dispatch({ 
        type: FETCH_POST_LINKS_SUCCESS,
        payload: res
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_POST_LINKS_ERROR,
        error: error.message
      });
    });
};

export const fetchPost = id => dispatch => {
  dispatch({ type: FETCH_POST_REQUEST });
  fetch(`http://localhost:8080/api/v1/blog_posts/${id}`)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: res
      })
    })
    .catch(error => {
      dispatch({
        type: FETCH_POST_ERROR,
        error: error.message
      });
    });
};
