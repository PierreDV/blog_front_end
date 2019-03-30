import axios from 'axios';
import {
  FETCH_POST_LINKS_REQUEST,
  FETCH_POST_LINKS_SUCCESS,
  FETCH_POST_LINKS_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
} from './types';

const backEndUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : process.env.BACK_END_URL;

export const fetchPostLinks = () => async dispatch => {
  try {
    dispatch({ type: FETCH_POST_LINKS_REQUEST });
    const response = await axios.get(`${process.env.BACK_END_URL}/api/v1/blog_posts/links`);
    if(!response.statusText === "OK") throw response;
    dispatch({ 
      type: FETCH_POST_LINKS_SUCCESS, 
      payload: response.data.rows 
    });
  } catch(error) {
    dispatch({ 
      type: FETCH_POST_LINKS_ERROR, 
      error: error.message 
    });
  }
}

export const fetchPost = id => async dispatch => {
  try {
    dispatch({ type: FETCH_POST_REQUEST });
    const response = await axios.get(`${process.env.BACK_END_URL}/api/v1/blog_posts/${id}`);
    if(!response.statusText === "OK") throw response;
    dispatch({ 
      type: FETCH_POST_SUCCESS, 
      payload: response.data 
    });
  } catch(error) {
    dispatch({ 
      type: FETCH_POST_ERROR, 
      error: error.message 
    });
  }
};

export const createPost = (formProps, callback) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    dispatch({ type: CREATE_POST_REQUEST });
    const response = await axios.post(
      `${process.env.BACK_END_URL}/api/v1/blog_posts/`,
      formProps,
      {
        headers: {
          'x-access-token': auth.authenticated
        }
      }
    );
    callback();
  } catch(error) {
    dispatch({ 
      type: CREATE_POST_ERROR, 
      payload: error.message 
    });
  }
};