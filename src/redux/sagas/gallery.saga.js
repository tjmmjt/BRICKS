import axios from "axios";
import { useSelector } from "react-redux";
import { takeLatest, put } from "redux-saga/effects";

// ! GET stats
function* fetchStats(action){
  console.log('in fetchStats(*)')
  
  try {
    
    const stats = yield axios.get(`/api/gallery/stats/${action.payload}`)
    console.log('stats.data:', stats.data)
    yield put({type: 'SET_STATS', payload: stats.data[0]})
  } catch (error) {
    console.error('error fetching stats')
  }
}


// ! GET
// fetches data from gallery_item table,
// stores it in gallery.reducer
function* fetchGallery(action) {
  try {
    // console.log("in fetchGallery(*)");
    console.log('ACTION.PAYLOAD', action.payload)
    const gallery = yield axios.get(`/api/gallery/${action.payload}`);
    yield put({ type: "SET_GALLERY", payload: gallery.data });
  } catch (error) {
    console.error('Error in fetchGallery * ()', error)
  }
}

// ! DELETE
// deletes lego set by id, calls fetchGallery(*)
// to return updated store
function* deleteSet(action) {
  // console.log('in deleteSet(*)')
  // console.log('delete id:', action.payload)
  try{
    yield axios.delete(`/api/gallery/${action.payload.setid}`)
    yield put({type: 'FETCH_GALLERY', payload: action.payload.userid})
  } catch (error){
    console.error('Error in deleteSet(*)', error)
  }
  
}

// ! UPDATE lego set data
// updates name, num_parts, year, and theme_id then
// returns updated store
function* updateSet(action){
  // console.log('in updateSet(*)')
  // console.log('payload:', action.payload)
  // console.log('id:', action.payload.id)
  // PATCH
  try {
    yield axios.patch(`/api/gallery/`, action.payload.input)
    yield put({type: 'FETCH_GALLERY', payload: action.payload.userid})
  } catch (error) {
    console.error('Error in updateSet(*)', error)
  }
}

// ! UPDATE COMMENTS
// updates comments then returns updated store
function* updateComments(action) {
  // console.log('in updateComments(*), action.payload:', action.payload)
  try {
    yield axios.patch(`/api/gallery/comments`, action.payload.comment)
    yield put({type: 'FETCH_GALLERY', payload: action.payload.userid})
  } catch (error) {
    console.error('Error in updateComments(*)', error)
  }
}

// ! UPDATE
// toggles favorite then returns updated store
function* favorite(action) {
  try {
    // console.log('FAVORITE: action.payload', action.payload)
    yield axios.patch(`/api/gallery/favorite/${action.payload.setid}`)
    yield put({type: 'FETCH_GALLERY', payload: action.payload.userid})
  } catch (err) {
    console.error('Error favoriting LEGO')
  } 
}

// ! gallerySaga
function* gallerySaga(action) {
  yield takeLatest('FETCH_GALLERY', fetchGallery);
  yield takeLatest('DELETE_SET', deleteSet)
  yield takeLatest('UPDATE_SET', updateSet)
  yield takeLatest('UPDATE_COMMENTS', updateComments)
  yield takeLatest('FAVORITE', favorite)
  yield takeLatest('FETCH_STATS', fetchStats)
}


export default gallerySaga;
