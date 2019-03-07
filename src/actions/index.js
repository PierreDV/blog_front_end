const FETCH_POST_LINKS_REQUEST = 'FETCH_POST_LINKS_REQUEST';
const FETCH_POST_LINKS_SUCCESS = 'FETCH_POST_LINKS_SUCCESS';
const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';

export const fetchPostLinks = () => {
  return dispatch => {
    dispatch(fetchPostLinksRequest());
    fetch('http://localhost:8080/api/v1/blog_posts/links')
      .then(res => res.json())
      .then(res => {
        dispatch(fetchPostLinksSuccess(res));
      })
  }
}

const fetchPostLinksRequest = () => {
  return { type: FETCH_POST_LINKS_REQUEST }
}

const fetchPostLinksSuccess = (res) => {
  return { 
    type: FETCH_POST_LINKS_SUCCESS,
    payload: res
  }
}

export const fetchPost = (id) => {
  return dispatch => {
    dispatch(fetchPostRequest());
    fetch(`http://localhost:8080/api/v1/blog_posts/${id}`)
      .then(res => res.json())
      .then(res => {
        dispatch(fetchPostSuccess(res))
      })
  }
}

const fetchPostRequest = () => {
  return { type: FETCH_POST_REQUEST }
}

const fetchPostSuccess = (res) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: res
  }
}