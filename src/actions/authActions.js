import { AUTH_USER_REQUEST } from './types';

export const signup = (formProps) => dispatch => {
  fetch('http://localhost:8080/api/v1/users/', {
    method: "POST",
    body: JSON.stringify(formProps),
    headers:{
      'Content-Type': 'application/json'
    }
  })
};
