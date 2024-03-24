import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { useDispatch } from 'react-redux';

// ! rebrickable API GET
// sends axios get request to rebrickable api for a specific lego set number
// initialize a variable (lego) with the response data, then
// store the response (search result) in search.reducer 
function* searchLego(action) {
    try {
        // console.log("action.payload:", action.payload);
        // initialize lego with API request data
        const lego = yield axios.get(`/api/search/${action.payload}`)
        yield put({type: 'SEARCH_RESULT', payload: lego.data})
    } catch (error) {
        console.error('error adding lego')
    }
}

// ! DB POST 
// post search result and user.id to gallery_item
function* addSet(action){
    try {
        yield console.log("Payload:", action.payload)
        yield axios.post('/api/gallery', action.payload)
        yield put({type: 'FETCH_GALLERY' })
    } catch (error) {
        console.error('Error in addSet(*)')
    }
}


function* searchSaga(action) {
    yield takeLatest('SEARCH_SET', searchLego)
    yield takeLatest('ADD_SET', addSet)
}

export default searchSaga