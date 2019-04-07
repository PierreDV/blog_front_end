import { 
  AUTH_USER_SUCCESS, 
  AUTH_USER_ERROR,
  CREATE_USER_SUCCESS,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_ERROR
} from "actions/types";

const INITIAL_STATE = {
  authenticated: '',
  isAdmin: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CREATE_USER_SUCCESS:
    return { ...state }
  case AUTH_USER_SUCCESS:
    return { ...state, authenticated: action.payload.token, isAdmin: action.payload.isAdmin }
  case AUTH_USER_ERROR:
    return { ...state, authenticated: "" }
  case CONFIRM_EMAIL_SUCCESS:
    return { ...state, authenticated: action.payload.token, isAdmin: action.payload.isAdmin }
  case CONFIRM_EMAIL_ERROR:
    return { ...state, authenticated: "" }
  default:
    return state;
  }
}