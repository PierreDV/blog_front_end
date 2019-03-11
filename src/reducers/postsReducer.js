import {
  FETCH_POST_LINKS_REQUEST,
  FETCH_POST_LINKS_SUCCESS,
  FETCH_POST_LINKS_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR
} from '../actions/index';

const INITIAL_STATE = {
  links: [],
  activePost: null,
  isFetching: false,
  errorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case FETCH_POST_LINKS_REQUEST:
    return {
      ...state,
      isFetching: true,
      errorMessage: null
    };
  case FETCH_POST_LINKS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      links: action.payload,
      errorMessage: null
    }
  case FETCH_POST_LINKS_ERROR:
    return {
      ...state,
      isFetching: false,
      links: [],
      errorMessage: action.error
    }
  case FETCH_POST_REQUEST:
    return {
      ...state,
      activePost: null,
      isFetching: true,
      errorMessage: null
    }
  case FETCH_POST_SUCCESS:
    return {
      ...state,
      isFetching: false,
      activePost: action.payload,
      errorMessage: null
    }
  case FETCH_POST_ERROR:
    return {
      ...state,
      isFetching: false,
      activePost: null,
      errorMessage: action.error
    }
  default:
    return state;
  }
}