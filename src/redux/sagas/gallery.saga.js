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
  yield axios.delete(`/api/gallery/${action.payload}`)
  yield put({type: 'FETCH_GALLERY'})
}

function* updateSet(action){
  console.log('in updateSet(*)')
  // need to send axios.patch request by req.params.id with req.body
  // console.log('payload:', action.payload)
  // console.log('id:', action.payload.id)
  // PATCH
  yield axios.patch(`/api/gallery/`, action.payload)
  yield put({type: 'FETCH_GALLERY'})
}

function* updateComments(action) {
  console.log('in updateComments(*), action.payload:', action.payload)
  yield axios.patch(`/api/gallery/comments`, action.payload)
  yield put({type: 'FETCH_GALLERY'})
}

function* gallerySaga(action) {
  yield takeLatest('FETCH_GALLERY', fetchGallery);
  yield takeLatest('DELETE_SET', deleteSet)
  yield takeLatest('UPDATE_SET', updateSet)
  yield takeLatest('UPDATE_COMMENTS', updateComments)
}

export default gallerySaga;
