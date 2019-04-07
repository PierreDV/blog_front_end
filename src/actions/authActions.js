import axios from 'axios';

import { 
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  CREATE_USER_SUCCESS,
  CONFIRM_EMAIL_REQUEST,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_ERROR,
  CREATE_FLASH_MESSAGE
} from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    dispatch({ type: AUTH_USER_REQUEST });
    const response = await axios.post(
      `${process.env.BACKEND_URL}/api/v1/users/`, 
      formProps
    );
    if(!response.statusText === "OK") throw response.message;
    
    callback();
    dispatch({ 
      type: CREATE_FLASH_MESSAGE,
      category: 'info',
      payload: response.data.message
    });
  } catch(error) {
    dispatch({ type: AUTH_USER_ERROR }); // do we need this?
    dispatch({ 
      type: CREATE_FLASH_MESSAGE, 
      category: 'error',
      payload: error.response.data.message
    });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  dispatch({ type: AUTH_USER_REQUEST });
  try {
    const response = await axios.post(
      `${process.env.BACKEND_URL}/api/v1/users/login`, 
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
    dispatch({ type: AUTH_USER_ERROR }); // do we need this?
    dispatch({ 
      type: CREATE_FLASH_MESSAGE, 
      category: 'error',
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
      `${process.env.BACKEND_URL}/api/v1/verify_user`,
      {token}
    );
    if(!response.statusText === "OK") throw response;
    dispatch({
      type: CONFIRM_EMAIL_SUCCESS,
      payload: response.data
    });
    callback();
    dispatch({
      type: CREATE_FLASH_MESSAGE,
      category: 'info',
      payload: 'You have successfully signed up!'
    });
  } catch(error) {
    dispatch({ type: CONFIRM_EMAIL_ERROR });
    dispatch({ 
      type: CREATE_FLASH_MESSAGE, 
      category: 'error',
      payload: error.response.data.message
    });
  }
};