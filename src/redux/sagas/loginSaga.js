import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../actions/loginActions';
import { USER_ACTIONS } from '../actions/userActions';
import { callLogin } from '../requests/loginRequests';

// worker Saga: will be fired on FETCH_USER actions
function* loginUser(action) {
  try {
    yield put({ type: LOGIN_ACTIONS.REQUEST_START });
    const response = yield call(callLogin, action.payload);
    console.log('good login', response);
    yield put({
      type: LOGIN_ACTIONS.LOGIN_REQUEST_DONE,
    });
    yield put({
      type: USER_ACTIONS.FETCH_USER,
    });
  } catch (e) {
    console.log('bad login', e);
    yield put({
      type: LOGIN_ACTIONS.LOGIN_REQUEST_DONE,
    });
    if (e.status === 401) {
      yield put({
        type: LOGIN_ACTIONS.LOGIN_FAILED,
        message: e.message,
      });
    } else {
      yield put({
        type: LOGIN_ACTIONS.LOGIN_FAILED_NO_CODE,
        message: e.message,
      });
    }
  }
}

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
function* loginSaga() {
  yield takeLatest(LOGIN_ACTIONS.LOGIN, loginUser);
}

export default loginSaga;
