import { put, takeLatest } from 'redux-saga/effects';
import { callLogin, callLogout } from '../requests/loginRequests';

// worker Saga: will be fired on "LOGIN" actions
function* loginUser(action) {
  try {
    yield put({ type: 'CLEAR_LOGIN_ERROR' });
    // sets that we are starting an async request
    yield put({ type: 'REQUEST_START' });
    yield callLogin(action.payload);
    
    yield put({
      type: 'FETCH_USER',
    });
    
    // sets that the async request is finished
    yield put({
      type: 'LOGIN_REQUEST_DONE',
    });
    
  } catch (error) {
    // sets that the async request is finished
    yield put({
      type: 'LOGIN_REQUEST_DONE',
    });
    if (error.status === 401) {
      yield put({
        type: 'LOGIN_FAILED',
        message: error.message,
      });
    } else {
      yield put({
        type: 'LOGIN_FAILED_NO_CODE',
        message: error.message,
      });
    }
  }
}

// worker Saga: will be fired on "LOGOUT" actions
function* logoutUser(action) {
  try {
    yield callLogout(action);
    yield put({
      type: 'UNSET_USER',
    });
  } catch (error) {
    console.log('LOGOUT FAILED -- CHECK YOUR SERVER', error);
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', loginUser);
  yield takeLatest('LOGOUT', logoutUser);
}

export default loginSaga;
