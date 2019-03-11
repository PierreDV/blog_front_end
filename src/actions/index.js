const FETCH_POST_LINKS_REQUEST = 'FETCH_POST_LINKS_REQUEST';
const FETCH_POST_LINKS_SUCCESS = 'FETCH_POST_LINKS_SUCCESS';
const FETCH_POST_LINKS_ERROR = 'FETCH_POST_LINKS_ERROR';
const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const fetchPostLinks = () => {
  return dispatch => {
    dispatch(fetchPostLinksRequest());
    fetch('http://localhost:8080/api/v1/blog_posts/links')
      .then(res => res.json())
      .then(res => {
        dispatch(fetchPostLinksSuccess(res));
      })
      .catch(error => {
        dispatch(fetchPostLinksError(error.message));
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

const fetchPostLinksError = (error) => {
  return {
    type: FETCH_POST_LINKS_ERROR,
    error
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
      .catch(error => {
        dispatch(fetchPostError(error.message));
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

const fetchPostError = (error) => {
  return {
    type: FETCH_POST_ERROR,
    error
  }
}