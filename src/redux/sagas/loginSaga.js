import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* loginUser(action) {
  try {
    yield put({ type: 'CLEAR_LOGIN_ERROR' });

    const body = {
      username: action.payload.username,
      password: action.payload.password,
    };

    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    yield axios.post('api/user/login', body, config);
    
    yield put({type: 'FETCH_USER'});
  } catch (error) {
    console.log('Error with user login:', error);
    if (error.response.status === 401) {
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
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    yield axios.get('api/user/logout', config);

    yield put({ type: 'UNSET_USER' });

  } catch (error) {
    console.log('Error with user logout:', error);
    console.log('LOGOUT FAILED -- CHECK YOUR SERVER', error);
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', loginUser);
  yield takeLatest('LOGOUT', logoutUser);
}

export default loginSaga;
