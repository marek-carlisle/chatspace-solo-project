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
    yield takeEvery(
        'DELETE_MESSAGE',
        deleteMessage,
    );
    yield takeEvery(
        'EDIT_MESSAGE',
        editMessage,
    )
};

function* fetchMessages(action) {
    try {
        const response = yield axios.get('/chat/messages', action.payload);
        yield put({ type: 'SET_MESSAGES', payload: response.data });
    } catch (error) {
        console.log('Failed to get messages from /chat/messages', error);
    };
};

function* postMessage(action) {
    try {
        const response = yield axios.post('/chat/postmessage', action.payload);
        yield put({ type: 'FETCH_MESSAGES' });
    } catch (err) {
        console.log('Failed to add message to chat/postmessage', err)
    };
};

function* editMessage(action) {
    console.log(`Editing message ID ${action.payload.id} with "${action.payload.message}"`);
    try {
        const response = yield axios.put(
            `/chat/editmessage/${action.payload.id}`, action.payload
        );
        yield put({ type: "FETCH_MESSAGES" });
    } catch (err) {
        console.log('Failed to edit message at /chat/editmessage', err)
    }
};

function* deleteMessage(action) {
    try {
        const id = action.payload;
        yield axios.delete(`/chat/deletemessage/${id}`, action.payload);
        yield put({ type: 'FETCH_MESSAGES' });
    } catch (err) {
        console.log('Failed to delete message from /chat/deletemessage', err)
    };
};

export default chatSaga;