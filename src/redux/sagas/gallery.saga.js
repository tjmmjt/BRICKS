import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

// ! GET
// fetches data from gallery_item table,
// stores it in gallery.reducer
function* fetchGallery(action) {
  try {
    // console.log("in fetchGallery(*)");
    const gallery = yield axios.get(`/api/gallery`);
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
    yield axios.delete(`/api/gallery/${action.payload}`)
    yield put({type: 'FETCH_GALLERY'})
  } catch (error){
    console.error('Error in deleteSet(*)', error)
  }
  
}

// ! UPDATE
// updates name, num_parts, year, and theme_id then
// returns updated store
function* updateSet(action){
  // console.log('in updateSet(*)')
  // console.log('payload:', action.payload)
  // console.log('id:', action.payload.id)
  // PATCH
  try {
    yield axios.patch(`/api/gallery/`, action.payload)
    yield put({type: 'FETCH_GALLERY'})
  } catch (error) {
    console.error('Error in updateSet(*)', error)
  }
}

// ! UPDATE COMMENTS
// updates comments then returns updated store
function* updateComments(action) {
  // console.log('in updateComments(*), action.payload:', action.payload)
  try {
    yield axios.patch(`/api/gallery/comments`, action.payload)
    yield put({type: 'FETCH_GALLERY'})
  } catch (error) {
    console.error('Error in updateComments(*)', error)
  }
}

// ! UPDATE
// toggles favorite then returns updated store
function* favorite(action) {
  try {
    // console.log('FAVORITE: action.payload', action.payload)
    yield axios.patch(`/api/gallery/favorite/${action.payload}`)
    yield put({type: 'FETCH_GALLERY'})
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
}


export default gallerySaga;
