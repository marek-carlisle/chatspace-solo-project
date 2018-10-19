import { combineReducers } from 'redux';

//message holds the string that will display on the login screen if there's an error
const loginMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_FAILED':
      return 'Oops! The username and password didn\'t match. Try again!';
    case 'LOGIN_FAILED_NO_CODE':
      return 'Oops! Something went wrong! Is the server running?';
    case 'LOGIN_INPUT_ERROR':
      return 'Enter your username and password!';
    default:
      return state;
  }
};

//message holds the string that will display on the registration screen if there's an error
const registrationMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REGISTRATION_ERROR':
      return '';
    case 'REGISTRATION_FAILED':
      return 'Oops! That didn\'t work. The username might already be taken. Try again!';
    case 'REGISTRATION_INPUT_ERROR':
      return 'Choose a username and password!';
    default:
      return state;
  }
};

//make one object that has keys message, isLoading
export default combineReducers({
  loginMessage,
  registrationMessage,
});
