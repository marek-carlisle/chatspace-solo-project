import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../actions/loginActions';
import { callLogin } from '../requests/loginRequests';

// worker Saga: will be fired on FETCH_USER actions
function* loginUser(action) {
  try {
    yield put({ type: LOGIN_ACTIONS.REQUEST_START });
    const response = yield call(callLogin, action.payload);
    console.log('good login', response);
    // yield put({
    //   type: USER_ACTIONS.SET_USER,
    //   user,
    // });
    yield put({
      type: LOGIN_ACTIONS.LOGIN_REQUEST_DONE,
    });
    // yield put({ type: USER_ACTIONS.USER_FETCH_SUCCEEDED, user });
  } catch (e) {
    console.log('bad login', e);
    yield put({
      type: LOGIN_ACTIONS.LOGIN_REQUEST_DONE,
    });
    yield put({
      type: LOGIN_ACTIONS.LOGIN_FAILED,
      message: e.message,
    });
  }
}
// const request = new Request(`${CONSTANTS.apiBaseUrl}/user/login`, {
//   method: 'POST',
//   headers: new Headers({ 'Content-Type': 'application/json' }),
//   body: JSON.stringify({
//     username: this.state.username,
//     password: this.state.password,
//   }),
//   credentials: 'include',
// });

// // making the request to the server to post the country
// fetch(request)
//   .then((response) => {
//     if (response.status === 200) {
//       this.props.history.push('/user');
//     } else {
//       this.setState({
//         message: 'Wrong!!',
//       });
//     }
//   })
//   .catch(() => {
//     this.setState({
//       message: 'Wrong!!',
//     });
//   });

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* userSaga() {
//   yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* userSaga() {
  yield takeLatest(LOGIN_ACTIONS.LOGIN, loginUser);
}

export default userSaga;
