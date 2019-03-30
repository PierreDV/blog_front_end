import axios from 'axios';

import { 
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR
} from './types';

const backEndUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : process.env.BACK_END_URL;

export const signup = (formProps, callback) => async dispatch => {
  try {
    dispatch({ type: AUTH_USER_REQUEST });
    const response = await axios.post(
      `${process.env.BACK_END_URL}/api/v1/users/`, 
      formProps
    );
    if(!response.statusText === "OK") throw response;
    
    dispatch({ 
      type: AUTH_USER_SUCCESS, 
      payload: response.data.token 
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch(error) {
    dispatch({ 
      type: AUTH_USER_ERROR, 
      payload: error.message 
    });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    dispatch({ type: AUTH_USER_REQUEST });
    const response = await axios.post(
      `${process.env.BACK_END_URL}/api/v1/users/login`, 
      formProps
    );
    if(!response.statusText === "OK") throw response;

    dispatch({ 
      type: AUTH_USER_SUCCESS, 
      payload: response.data.token 
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch(error) {
    dispatch({ 
      type: AUTH_USER_ERROR, 
      payload: error.message 
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER_SUCCESS,
    payload: ''
  };
};
