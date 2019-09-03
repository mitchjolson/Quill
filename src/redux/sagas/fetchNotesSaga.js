import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchNotes() {
    console.log('in fetchNotes')
    try {
        const response = yield axios.get(`/notes`);
        console.log('in fetchNotes, response is:', response.data)
        yield put({ type: 'SET_NOTES', payload: response.data })
    } catch (error) {
        console.log('Error retrieving collection:', error);
    }
}

function* fetchNotesSaga() {
    yield takeEvery('FETCH_NOTES', fetchNotes);
}

export default fetchNotesSaga;
