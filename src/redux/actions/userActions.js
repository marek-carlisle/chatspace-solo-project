import UserService from '../../services/UserService';

export const USER_ACTIONS = {
  SET_USER: 'SET_USER_ACTION',
  UNSET_USER: 'UNSET_USER_ACTION',
  REQUEST_START: 'REQUEST_START_USER_ACTION',
  REQUEST_DONE: 'REQUEST_DONE_USER_ACTION',
};

export const fetchUser = () => (dispatch) => {
  dispatch({
    type: USER_ACTIONS.REQUEST_START,
  });

  UserService.getUser().then(
    (user) => {
      dispatch({
        type: USER_ACTIONS.SET_USER,
        user,
      });
      dispatch({
        type: USER_ACTIONS.REQUEST_DONE,
      });
    },
    () => {
      dispatch({
        type: USER_ACTIONS.UNSET_USER,
      });
      dispatch({
        type: USER_ACTIONS.REQUEST_DONE,
      });
    },
  );
};

export const logoutUser = () => ({
  type: USER_ACTIONS.UNSET_USER,
});
