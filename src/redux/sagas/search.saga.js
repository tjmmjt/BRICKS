import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';


function* searchLego(action) {
    try {
        // action.payload should be the id
        // console.log("action.payload:", action.payload);
        // initialize lego with API request data
        const lego = yield axios.get(`/api/search/${action.payload}`)
        // console.log('lego:', lego)
        // send lego.data to SEARCH_RESULT
        yield put({type: 'SEARCH_RESULT', payload: lego.data})
    } catch (error) {
        console.error('error adding lego')
    }
}

function* searchSaga(action) {
    yield takeLatest('SEARCH_SET', searchLego)
}

export default searchSaga