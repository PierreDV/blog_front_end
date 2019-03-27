import axios from 'axios';

import { 
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR
} from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    dispatch({ type: AUTH_USER_REQUEST });
    const response = await axios.post('http://localhost:8080/api/v1/users/', formProps);
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

export const singout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER_SUCCESS,
    payload: ''
  };
};
