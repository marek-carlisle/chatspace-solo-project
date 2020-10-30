import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* channelSaga() {
    yield takeEvery(
        'FETCH_CHANNELS',
        fetchChannels,
    );
    // yield takeEvery(
    //     'POST_CHANNEL',
    //     postMessage,
    // );
    // yield takeEvery(
    //     'DELETE_CHANNEL',
    //     deleteMessage,
    // );
    // yield takeEvery(
    //     'EDIT_CHANNEL',
    //     editMessage,
    // )
};

function* fetchChannels() {
    try {
        const response = yield axios.get('/channels/getchannels');
        yield put({ type: 'SET_CHANNELS', payload: response.data });
    } catch (error) {
        console.log('Failed to get messages from /channels/getchannels', error);
    };
};

export default channelSaga;