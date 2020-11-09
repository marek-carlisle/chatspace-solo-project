import axios from 'axios';
import { put, takeEvery, takeLatest, select } from 'redux-saga/effects';

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

const getSelectedChannel = (reduxState) => reduxState.channels.selectedChannel || 1; // Selected channel, or channel 1, selector reaches into redux state and grabs the seleted channel ID

function* fetchMessages(action) {
    try {
        const channel_id = yield select(getSelectedChannel); // Select is meant to use the yield keyword
        const response = yield axios.get(`/chat/messages/${channel_id}`);
        yield put({ type: 'SET_MESSAGES', payload: response.data });
    } catch (error) {
        console.log('Failed to get messages from /chat/messages', error);
    };
};

function* postMessage(action) {
    try {
        const channel_id = yield select(getSelectedChannel); // Select is meant to use the yield keyword
        const response = yield axios.post(`/chat/postmessage/${channel_id}`, action.payload);
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