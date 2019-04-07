import {
  CREATE_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE
} from 'actions/types';

const INITIAL_STATE = {
  category: null,
  message: ""
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case CREATE_FLASH_MESSAGE:
    return { 
      ...state, 
      category: action.category, 
      message: action.payload 
    }
  case CLEAR_FLASH_MESSAGE:
    return { ...state, category: null, message: '' }
  default:
    return state;
  }
}

