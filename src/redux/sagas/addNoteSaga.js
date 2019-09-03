import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* addNote(action) {
    console.log('in addNote, action.payload is', action.payload);
    try {
        yield axios.post(`/notes`, action.payload);
        yield put({ type: 'FETCH_NOTES' });
    }
    catch (error) {
        console.log('Error posting note:', error);
    }
}

function* addNoteSaga() {
    yield takeEvery('ADD_NOTE', addNote);
}

export default addNoteSaga;