import { 
  AUTH_USER_SUCCESS, 
  AUTH_USER_ERROR,
  CREATE_USER_SUCCESS,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_ERROR,
  CLEAR_ERROR_MESSAGE
} from "actions/types";

const INITIAL_STATE = {
  authenticated: '',
  isAdmin: '',
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CREATE_USER_SUCCESS:
    return { ...state }
  case AUTH_USER_SUCCESS:
    return { ...state, authenticated: action.payload.token, isAdmin: action.payload.isAdmin }
  case AUTH_USER_ERROR:
    return { ...state, errorMessage: action.payload}
  case CONFIRM_EMAIL_SUCCESS:
    return { ...state, authenticated: action.payload.token, isAdmin: action.payload.isAdmin }
  case CONFIRM_EMAIL_ERROR:
    return { ...state, errorMessage: action.payload }
  case CLEAR_ERROR_MESSAGE:
    return { ...state, errorMessage: ''}
  default:
    return state;
  }
}