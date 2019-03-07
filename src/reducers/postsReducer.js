const INITIAL_STATE = {
  links: [],
  activePost: null,
  isFetching: false,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'FETCH_POST_LINKS_REQUEST':
    return {
      ...state,
      isFetching: true,
      error: null
    };
  case 'FETCH_POST_LINKS_SUCCESS':
    return {
      ...state,
      isFetching: false,
      links: action.payload,
      error: null
    }
  case 'FETCH_POST_REQUEST':
    return {
      ...state,
      activePost: null,
      isFetching: true,
      error: null
    }
  case 'FETCH_POST_SUCCESS':
    return {
      ...state,
      isFetching: false,
      activePost: action.payload,
      error: null
    }
  default:
    return state;
  }
}