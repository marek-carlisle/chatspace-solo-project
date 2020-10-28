import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* chatSaga() {
    yield takeEvery(
        'FETCH_MESSAGES',
        fetchMessages,
    );
    yield takeEvery(
        'POST_MESSAGE',
        postMessage,
    );
    // yield takeEvery(
    //     'DELETE_MESSAGE',
    //     deleteMessage,
    // );
    // yield takeEvery(
    //     'EDIT_MESSAGE',
    //     editMessage,
    // )
};

function* fetchMessages() {
    try {
        const response = yield axios.get('/chat/messages');
        yield put({ type: 'SET_MESSAGES', payload: response.data });
    } catch (error) {
        console.log('Failed to get messages from /chat/messages', error);
    };
};

function* postMessage(action) {
    try {
        const response = yield axios.post('/chat/postmessage', action.payload)
        //   yield put({type: 'FETCH_ITEMS'})
    } catch (err) {
        console.log('Failed to add message to chat/postmessage', err)
    };
};

export default chatSaga;