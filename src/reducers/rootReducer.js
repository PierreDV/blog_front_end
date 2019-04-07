import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import posts from './postsReducer';
import flashMessage from './flashMessageReducer';

export default combineReducers({
  auth,
  posts,
  flashMessage,
  form: formReducer
});