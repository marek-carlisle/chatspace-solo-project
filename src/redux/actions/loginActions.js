export const LOGIN_ACTIONS = {
  LOGIN: 'LOGIN',
  REQUEST_START: 'REQUEST_START',
  LOGIN_REQUEST_DONE: 'LOGIN_REQUEST_DONE',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGIN_FAILED_NO_CODE: 'LOGIN_FAILED_NO_CODE',
  INPUT_ERROR: 'INPUT_ERROR',
};

export function triggerLogin(username, password) {
  return {
    type: LOGIN_ACTIONS.LOGIN,
    payload: {
      username,
      password,
    },
  };
}

export function formError() {
  return {
    type: LOGIN_ACTIONS.INPUT_ERROR,
    payload: 'Enter your username and password!',
  };
}
