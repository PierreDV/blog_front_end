import axios from 'axios';

import { 
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  CREATE_USER_SUCCESS,
  CONFIRM_EMAIL_REQUEST,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_ERROR
} from './types';

const backEndUrl = (process.env.NODE_ENV === 'development') ? 'http://localhost:8080' : 'https://safe-meadow-41895.herokuapp.com';

export const signup = (formProps, callback) => async dispatch => {
  try {
    dispatch({ type: AUTH_USER_REQUEST });
    const response = await axios.post(
      `${backEndUrl}/api/v1/users/`, 
      formProps
    );
    if(!response.statusText === "OK") throw response.message;
    
    dispatch({ 
      type: CREATE_USER_SUCCESS, 
      payload: response.data
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch(error) {
    dispatch({ 
      type: AUTH_USER_ERROR, 
      payload: error.response.data.message
    });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  dispatch({ type: AUTH_USER_REQUEST });
  try {
    const response = await axios.post(
      `${backEndUrl}/api/v1/users/login`, 
      formProps
    );
    if(!response.statusText === "OK") throw response;
    dispatch({ 
      type: AUTH_USER_SUCCESS, 
      payload: response.data
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch(error) {
    dispatch({ 
      type: AUTH_USER_ERROR, 
      payload: error.response.data.message
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

export const confirmEmail = (token , callback) => async dispatch => {
  try {
    const response = await axios.post(
      `${backEndUrl}/api/v1/verify_user`,
      {token}
    );
    if(!response.statusText === "OK") throw response;
    dispatch({
      type: CONFIRM_EMAIL_SUCCESS,
      payload: response.data
    });
    callback();
  } catch(error) {
    dispatch({
      type: CONFIRM_EMAIL_ERROR,
      payload: error.response.data.message
    });
  }
};