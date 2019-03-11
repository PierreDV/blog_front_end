import { AUTH_USER_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case AUTH_USER_SUCCESS:
    return { ...state, authenticated:action.payload }
  default:
    return state;
  }
}