import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { useSelector } from 'react-redux';


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

function* addSet(action){
    // combine user and search result into an array which can be accessed in router by key
    // const payload = useSelector(store => ({searchReducer: store.searchReducer, user: store.user}))
    yield console.log("Payload:", action.payload)
    // yield axios.post('/api/gallery', action.payload)
}


function* searchSaga(action) {
    yield takeLatest('SEARCH_SET', searchLego)
    yield takeLatest('ADD_SET', addSet)
}

export default searchSaga