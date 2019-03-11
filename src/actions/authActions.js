import { 
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR
} from './types';

export const signup = (formProps) => async dispatch => {
  fetch('http://localhost:8080/api/v1/users/', {
    method: "POST",
    body: JSON.stringify(formProps),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => {
    dispatch({ type: AUTH_USER_SUCCESS, payload: res.token })
  })
  .catch(error => {
    dispatch({
      type: AUTH_USER_ERROR,
      error: error.message
    })
  })
};
