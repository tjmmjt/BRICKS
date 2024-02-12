import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchGallery(action) {
  try {
    // console.log("in fetchGallery()");
    const gallery = yield axios.get(`/api/gallery`);
    yield put({ type: "SET_GALLERY", payload: gallery.data });
  } catch (error) {
    console.error('Error in fetchGallery * ()', error)
  }
}

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

function* updateSet(action){
  // console.log('in updateSet(*)')
  // need to send axios.patch request by req.params.id with req.body
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

function* updateComments(action) {
  // console.log('in updateComments(*), action.payload:', action.payload)
  try {
    yield axios.patch(`/api/gallery/comments`, action.payload)
    yield put({type: 'FETCH_GALLERY'})
  } catch (error) {
    console.error('Error in updateComments(*)', error)
  }
}

function* favorite(action) {
  try {
    console.log('FAVORITE: action.payload', action.payload)
    yield axios.patch(`/api/gallery/favorite/${action.payload}`)
    yield put({type: 'FETCH_GALLERY'})
  } catch (err) {
    console.error('Error favoriting LEGO')
  } 
}
function* gallerySaga(action) {
  yield takeLatest('FETCH_GALLERY', fetchGallery);
  yield takeLatest('DELETE_SET', deleteSet)
  yield takeLatest('UPDATE_SET', updateSet)
  yield takeLatest('UPDATE_COMMENTS', updateComments)
  yield takeLatest('FAVORITE', favorite)
}


export default gallerySaga;
