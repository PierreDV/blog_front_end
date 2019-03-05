const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'FETCH_POSTS_REQUEST':
    return {
      ...state,
      isFetching: true,
      error: null
    };
  case 'FETCH_POSTS_SUCCESS':
    return {
      ...state,
      isFetching: false,
      posts: action.payload,
      error: null
    }
  default:
    return state;
  }
}