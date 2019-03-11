import { 
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS
} from './types';

export const signup = (formProps) => async dispatch => {
  const response = await fetch('http://localhost:8080/api/v1/users/', {
    method: "POST",
    body: JSON.stringify(formProps),
    headers:{
      'Content-Type': 'application/json'
    }
  });

  dispatch({ type: AUTH_USER_SUCCESS, payload: response.data.token })
};
