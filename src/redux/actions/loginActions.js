export const LOGIN_ACTIONS = {
  LOGIN: 'LOGIN',
  REQUEST_START: 'REQUEST_START',
  LOGIN_REQUEST_DONE: 'LOGIN_REQUEST_DONE',
  LOGIN_FAILED: 'LOGIN_FAILED',
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
