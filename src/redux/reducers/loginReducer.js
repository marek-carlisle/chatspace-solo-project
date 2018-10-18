import { combineReducers } from 'redux';

//message holds the string that will display on the login screen if there's an error
const message = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_FAILED':
      return 'Ooops! The username and password didn\'t match. Try again!';
    case 'LOGIN_FAILED_NO_CODE':
      return 'Ooops! Something went wrong! Is the server running?';
    case 'INPUT_ERROR':
      return action.payload;
    default:
      return state;
  }
};

//isLoading holds the boolean that tracks whether or not this async call is out in the internet or not
const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_START':
      return true;
    case 'LOGIN_REQUEST_DONE':
      return false;
    default:
      return state;
  }
};

//make one object that has keys message, isLoading
export default combineReducers({
  isLoading,
  message,
});
