import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import posts from './postsReducer';

export default combineReducers({
  auth,
  form: formReducer,
  posts
});